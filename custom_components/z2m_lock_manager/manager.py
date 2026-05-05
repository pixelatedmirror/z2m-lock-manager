"""Core manager for Zigbee2MQTT Lock Manager."""
import json
import logging
from typing import Any
from datetime import timedelta

from homeassistant.components import mqtt
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store
from homeassistant.helpers.event import async_track_time_interval
import homeassistant.util.dt as dt_util

from .const import DOMAIN, CONF_MQTT_TOPIC, CONF_SLOT_COUNT

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY = f"{DOMAIN}.manager"
STORAGE_VERSION = 1

MODE_ALWAYS = "Always"
MODE_RECURRING = "Recurring"
MODE_TEMPORARY = "Temporary"

# Z2M Topics
# To request all pin codes: {"pin_code": ""} to /get
Z2M_REQUEST_PIN_CODE_TOPIC_SUFFIX = "/get"

def _decode_pin_code(raw_code):
    """Safely parse PIN codes from potentially corrupted Z2M payloads."""
    if isinstance(raw_code, (dict, list)):
        code_chars = []
        if isinstance(raw_code, dict):
            try:
                # Filter out non-digit keys and sort by integer key
                items = sorted(
                    [(int(k), v) for k, v in raw_code.items() if str(k).isdigit()],
                    key=lambda x: x[0]
                )
                values = [v for k, v in items]
            except ValueError:
                values = list(raw_code.values())
        else:
            values = raw_code

        for v in values:
            if isinstance(v, int) and v >= 32: # Printable ASCII character code
                code_chars.append(chr(v))
            else:
                code_chars.append(str(v))
        return "".join(code_chars)
    elif raw_code is not None:
        return str(raw_code)
    return ""

class LockManager:
    """Manages lock codes and synchronization."""

    def __init__(self, hass: HomeAssistant, config: dict[str, Any]):
        """Initialize the manager."""
        self.hass = hass
        self.mqtt_root_topic = config[CONF_MQTT_TOPIC] # Renamed for clarity
        self.z2m_state_topic = f"{self.mqtt_root_topic}"
        self.z2m_set_topic = f"{self.mqtt_root_topic}/set"
        self.slot_count = config[CONF_SLOT_COUNT]
        self._store = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self.slots: dict[str, dict] = {}
        self.lock_state: dict[str, dict] = {}
        self.history: list[dict] = []
        self._initialized = False

    async def async_initialize(self):
        """Initialize the manager, load data, and subscribe to MQTT."""
        await self._load_data()
        
        # Ensure we have all slots initialized in memory
        for i in range(1, self.slot_count + 1):
            slot_id = str(i)
            if slot_id not in self.slots:
                self.slots[slot_id] = {
                    "code": "",
                    "name": f"Slot {i}",
                    "enabled": False,
                    "status": "Unknown",
                    "last_used": None,
                    # Scheduling defaults
                    "access_mode": MODE_ALWAYS,
                    "start_date": None,
                    "end_date": None,
                    "weekdays": [], # [0, 1, 2...] Mon=0
                    "daily_start_time": None, # "09:00"
                    "daily_end_time": None,   # "17:00"
                }
            # Ensure new fields exist if loading old data
            self.slots[slot_id].setdefault("access_mode", MODE_ALWAYS)
            self.slots[slot_id].setdefault("weekdays", [])
            self.slots[slot_id].setdefault("last_used", None)

        # Subscribe to Z2M state topic for updates (including initial pin_codes response)
        self._unsub_mqtt = await mqtt.async_subscribe(
            self.hass, self.z2m_state_topic, self._handle_mqtt_message
        )
        
        # Request current PIN codes from the lock
        await self._request_pin_codes()

        # Start Scheduler Loop (every 1 minute)
        self._unsub_timer = async_track_time_interval(
            self.hass, self._check_schedules, timedelta(minutes=1)
        )
        
        self._initialized = True
        _LOGGER.info("Lock Manager initialized with %d slots", self.slot_count)
        
        await self._check_schedules()

    async def async_unload(self):
        """Unload the manager and clean up listeners."""
        _LOGGER.info("Unloading Lock Manager")
        if hasattr(self, "_unsub_mqtt") and self._unsub_mqtt:
            self._unsub_mqtt()
        if hasattr(self, "_unsub_timer") and self._unsub_timer:
            self._unsub_timer()

    async def _load_data(self):
        """Load data from storage."""
        data = await self._store.async_load()
        if data:
            self.slots = data.get("slots", {})
            self.history = data.get("history", [])

            # Cleanup potential corrupted data (e.g. dict for code)
            for slot_id, slot in self.slots.items():
                if isinstance(slot.get("code"), (dict, list)):
                    slot["code"] = _decode_pin_code(slot["code"])

    async def _save_data(self):
        """Save data to storage and notify frontend."""
        await self._store.async_save({"slots": self.slots, "history": self.history})
        self.hass.bus.async_fire("z2m_lock_manager_updated")

    async def _request_pin_codes(self, user=-1):
        """Request all PIN codes from the lock via MQTT."""
        # Per smartlock.md: To read ('/get') the value publish ... payload '{"pin_code": ""}'
        topic = f"{self.mqtt_root_topic}{Z2M_REQUEST_PIN_CODE_TOPIC_SUFFIX}"
        if user == -1:
            payload = {"pin_code": ""}
        else:
            payload = {"pin_code": {"user": user}}

        _LOGGER.debug("Requesting PIN codes from %s with payload %s", topic, payload)
        await mqtt.async_publish(self.hass, topic, json.dumps(payload))

    def _add_history_entry(self, action: str, source: str, user_id: int = None):
        """Add an entry to the action log."""
        entry = {
            "timestamp": dt_util.now().isoformat(),
            "action": action,
            "source": source,
            "user_id": user_id
        }
        self.history.insert(0, entry)
        self.history = self.history[:50] # Keep last 50 events
        return entry

    async def handle_action(self, payload):
        action = payload["action"]
        # Sometimes action is just a string, sometimes Z2M sends separate fields
        # We check for action_source_name and action_user in the main payload
        source = payload.get("action_source_name", "unknown")
        user_id = payload.get("action_user")
        
        # Convert user_id to int if present
        if user_id is not None:
            try:
                user_id = int(user_id)
            except ValueError:
                user_id = None

        self._add_history_entry(action, source, user_id)
        
        # Update Last Used
        if action == "unlock" and user_id is not None:
            slot_id = str(user_id + 1)
            if slot_id in self.slots:
                self.slots[slot_id]["last_used"] = dt_util.now().isoformat()
        if action == "pin_code_added" or action == "pin_code_deleted":
            await self._request_pin_codes(int(user_id))

    async def handle_users(self, payload):
        keys = payload["users"].keys()
        _LOGGER.debug("Users changed: %s", ",".join(keys))
        for z2m_user_id_str in keys:
            user_data = payload["users"][z2m_user_id_str]
            z2m_user_id = int(z2m_user_id_str)
            slot_id = str(z2m_user_id + 1) # Z2M is 0-indexed, HA is 1-indexed

            raw_code = user_data.get("pin_code", "")
            code = _decode_pin_code(raw_code)

            status = user_data.get("status", "available") # Z2M gives "enabled", "disabled", "available"
            
            is_enabled = False
            if status == "enabled":
                is_enabled = True
            elif status == "disabled":
                is_enabled = False # Explicitly disabled
            elif status == "available" :
                code = ""
                is_enabled = False # Empty slot

            self.lock_state[slot_id] = {
                "code": code,
                "enabled": is_enabled
            }
            
            if slot_id in self.slots:
                slot = self.slots[slot_id]
                
                # If this slot has never been synced by HA and we found an existing code/user on the lock, import it.
                if "last_synced_active_state" not in slot and (is_enabled or code):
                    slot["code"] = code
                    slot["enabled"] = is_enabled
                    slot["status"] = "Synced" if is_enabled else "Disabled"
                    slot["last_synced_active_state"] = is_enabled
                    _LOGGER.info("Imported existing PIN for slot %s", slot_id)
                
                # Also if the slot has no code and lock has no code, we can mark it as last_synced=False so we know we've seen it empty
                elif "last_synced_active_state" not in slot and not is_enabled and not code:
                    slot["last_synced_active_state"] = False
                    
                self._compare_state(slot_id)

    @callback
    async def _handle_mqtt_message(self, msg):
        """Handle incoming MQTT messages."""
        try:
            payload = json.loads(msg.payload)
            data_changed = False
            # Handle Actions
            if "action" in payload and payload["action"]:
                await self.handle_action(payload)
                data_changed = True

            # Handle Users/PIN Codes
            if "users" in payload and isinstance(payload["users"], dict):
                await self.handle_users(payload)
                data_changed = True

            if data_changed:
                await self._save_data()

        except json.JSONDecodeError:
            _LOGGER.warning("Received non-JSON MQTT payload on %s: %s", msg.topic, msg.payload)
        except Exception as e:
            _LOGGER.error("Error processing MQTT message: %s", e)

    async def set_slot_details(self, slot_id: str, **kwargs):
        """Update slot details and sync with lock."""
        if slot_id not in self.slots:
            _LOGGER.error("Invalid slot ID: %s", slot_id)
            return

        slot = self.slots[slot_id]
        changed = False

        for key, value in kwargs.items():
            if key in slot and slot[key] != value:
                slot[key] = value
                changed = True

        if changed:
            slot["status"] = "Pending"
            await self._save_data()
            await self._check_schedules() # Re-eval schedule immediately

    async def add_user(self, **kwargs):
        """Find next available slot and set details."""
        # Find first slot with empty code
        for i in range(1, self.slot_count + 1):
            slot_id = str(i)
            if self.slots[slot_id]["code"] == "":
                # Found available slot
                await self.set_slot_details(slot_id, **kwargs)
                return slot_id
        
        raise ValueError("No available slots")

    async def delete_user(self, slot_id: str):
        """Clear a slot and remove from lock."""
        if slot_id not in self.slots:
            raise ValueError(f"Invalid slot ID: {slot_id}")

        # Reset slot to defaults
        # We explicitly set enabled=False and code="" to ensure it clears on the lock
        defaults = {
            "code": "",
            "name": f"Slot {slot_id}",
            "enabled": False,
            "access_mode": MODE_ALWAYS,
            "start_date": None,
            "end_date": None,
            "weekdays": [],
            "daily_start_time": None,
            "daily_end_time": None,
            "last_used": None
        }
        
        await self.set_slot_details(slot_id, **defaults)

    def _compare_state(self, slot_id: str):
        """Compare expected state with actual lock state and set sync_state."""
        if slot_id not in self.slots:
            return

        slot = self.slots[slot_id]
        lock_state = self.lock_state.get(slot_id)

        if not lock_state:
            slot["sync_state"] = "unknown"
            return

        # If user explicitly disabled, we expect lock to be disabled or empty
        # If enabled, we expect code and enabled to match
        expected_active = self._calculate_active_state(slot, dt_util.now())
        expected_code = slot["code"] if expected_active else ""

        actual_active = lock_state["enabled"]
        actual_code = lock_state["code"]

        if slot.get("status") == "Pending":
            slot["sync_state"] = "pending"
        elif expected_active != actual_active or expected_code != actual_code:
            slot["sync_state"] = "mismatch"
            slot["status"] = "Mismatch"
        else:
            slot["sync_state"] = "synced"
            slot["status"] = "Synced" if actual_active else "Disabled"

    async def import_from_lock(self, slot_id: str):
        """Import the lock's actual state into the expected HA state silently."""
        if slot_id not in self.slots or slot_id not in self.lock_state:
            raise ValueError(f"Invalid slot ID or no lock state for {slot_id}")
            
        lock_state = self.lock_state[slot_id]
        slot = self.slots[slot_id]
        
        # Directly update the slot to avoid triggering the 'Pending' state 
        # that set_slot_details uses, avoiding redundant Zigbee traffic.
        slot["code"] = lock_state["code"]
        slot["enabled"] = lock_state["enabled"]
        slot["access_mode"] = MODE_ALWAYS
        slot["last_synced_active_state"] = lock_state["enabled"]
        slot["status"] = "Synced" if lock_state["enabled"] else "Disabled"
        
        self._compare_state(slot_id)
        await self._save_data()

    async def force_sync_to_lock(self, slot_id: str):
        """Force the expected HA state to the lock."""
        if slot_id not in self.slots:
            raise ValueError(f"Invalid slot ID: {slot_id}")
            
        should_be_active = self._calculate_active_state(self.slots[slot_id], dt_util.now())
        await self._sync_slot_to_lock(slot_id, should_be_active)
        # Assume it will sync, actual status will be updated when MQTT responds

    async def _check_schedules(self, now=None):
        """Check all slots and ensure lock state matches schedule."""
        if now is None:
            now = dt_util.now()
            
        for slot_id, slot in self.slots.items():
            should_be_active = self._calculate_active_state(slot, now)
            
            # Check if we need to update the lock
            # We assume 'last_synced_active_state' tracks what we sent to the lock
            # If it's missing, we shouldn't blindly wipe the lock. Wait for import.
            last_state = slot.get("last_synced_active_state")
            
            # Also sync if status is Pending (user made changes)
            if slot.get("status") == "Pending" or (last_state is not None and last_state != should_be_active):
                await self._sync_slot_to_lock(slot_id, should_be_active)
            else:
                self._compare_state(slot_id)

    def _calculate_active_state(self, slot, now):
        """Determine if slot should be active right now."""
        if not slot["enabled"]:
            return False
            
        mode = slot.get("access_mode", MODE_ALWAYS)
        
        if mode == MODE_ALWAYS:
            return True
            
        elif mode == MODE_TEMPORARY:
            start = dt_util.parse_datetime(slot.get("start_date") or "")
            end = dt_util.parse_datetime(slot.get("end_date") or "")
            
            if start and now < start:
                return False
            if end and now > end:
                return False
            return True
            
        elif mode == MODE_RECURRING:
            # Check weekday
            if slot.get("weekdays") and now.weekday() not in slot["weekdays"]:
                return False
            
            # Check time range
            start_str = slot.get("daily_start_time")
            end_str = slot.get("daily_end_time")
            
            if start_str and end_str:
                current_time = now.strftime("%H:%M")
                if current_time < start_str or current_time > end_str:
                    return False
            
            return True
            
        return False

    async def _sync_slot_to_lock(self, slot_id: str, active: bool):
        """Publish MQTT message to set the code on the lock."""
        slot = self.slots[slot_id]
        
        pin_code = slot["code"] if active else None
        if pin_code == "":
            pin_code = None
        
        # smartlock.md payload structure:
        # {"pin_code": {"user": VALUE, "user_type": VALUE, "user_enabled": VALUE, "pin_code": VALUE}}
        
        payload = {
            "pin_code": {
                "user": int(slot_id) - 1, # Z2M expects 0-indexed user IDs
                "pin_code": pin_code,     # Key is "pin_code", not "code"
                "user_type": "unrestricted", # "pin_code_user" was invalid. "unrestricted" is default/standard
                "user_enabled": active
            }
        }

        # Z2M expects pin_code updates on the /set topic
        topic = self.z2m_set_topic
        await mqtt.async_publish(self.hass, topic, json.dumps(payload))
        
        slot["last_synced_active_state"] = active
        if slot["enabled"] and active:
            slot["status"] = "Synced"
        elif slot["enabled"] and not active:
             slot["status"] = "Scheduled Off"
        elif not slot["enabled"]:
             slot["status"] = "Disabled"
             
        _LOGGER.debug("Synced slot %s. Active: %s. Status: %s", slot_id, active, slot["status"])