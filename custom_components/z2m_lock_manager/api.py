"""WebSocket API for Zigbee2MQTT Lock Manager."""
import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import DOMAIN
from .manager import LockManager

# Define schemas
SLOT_UPDATE_SCHEMA = websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
    {
        vol.Required("type"): "z2m_lock_manager/update_slot",
        vol.Required("slot_id"): str,
        vol.Optional("name"): str,
        vol.Optional("code"): str,
        vol.Optional("enabled"): bool,
        vol.Optional("access_mode"): str,
        vol.Optional("start_date"): vol.Any(str, None),
        vol.Optional("end_date"): vol.Any(str, None),
        vol.Optional("weekdays"): vol.All(list), # Basic list validation, can be stricter
        vol.Optional("daily_start_time"): vol.Any(str, None),
        vol.Optional("daily_end_time"): vol.Any(str, None),
    },
    extra=vol.REMOVE_EXTRA,
)

VALID_UPDATE_KEYS = [
    "name", "code", "enabled", "access_mode", "start_date",
    "end_date", "weekdays", "daily_start_time", "daily_end_time"
]

@callback
def websocket_get_slots(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle get slots command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    connection.send_result(msg["id"], {
        "slots": manager.slots,
        "lock_state": manager.lock_state
    })

@callback
def websocket_get_history(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle get history command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    connection.send_result(msg["id"], {"history": manager.history})

@websocket_api.async_response
async def websocket_update_slot(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle update slot command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    slot_id = msg["slot_id"]
    # Extract only valid args
    data = {k: v for k, v in msg.items() if k in VALID_UPDATE_KEYS}
    
    await manager.set_slot_details(slot_id, **data)
    connection.send_result(msg["id"])

@websocket_api.async_response
async def websocket_add_user(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle add user command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    # Extract args, ignore type/id
    data = {k: v for k, v in msg.items() if k in VALID_UPDATE_KEYS}
    
    try:
        slot_id = await manager.add_user(**data)
        connection.send_result(msg["id"], {"slot_id": slot_id})
    except ValueError as e:
        connection.send_error(msg["id"], "add_failed", str(e))

@websocket_api.async_response
async def websocket_delete_user(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle delete user command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    slot_id = msg["slot_id"]
    try:
        await manager.delete_user(slot_id)
        connection.send_result(msg["id"])
    except ValueError as e:
        connection.send_error(msg["id"], "delete_failed", str(e))

@websocket_api.async_response
async def websocket_import_from_lock(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle import from lock command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    slot_id = msg["slot_id"]
    try:
        await manager.import_from_lock(slot_id)
        connection.send_result(msg["id"])
    except ValueError as e:
        connection.send_error(msg["id"], "import_failed", str(e))

@websocket_api.async_response
async def websocket_force_sync_to_lock(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict):
    """Handle force sync to lock command."""
    manager: LockManager = hass.data[DOMAIN].get("manager")
    if not manager:
         connection.send_error(msg["id"], "manager_not_found", "Manager not initialized")
         return

    slot_id = msg["slot_id"]
    try:
        await manager.force_sync_to_lock(slot_id)
        connection.send_result(msg["id"])
    except ValueError as e:
        connection.send_error(msg["id"], "sync_failed", str(e))

async def async_setup_api(hass: HomeAssistant):
    """Set up the WebSocket API."""
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/get_slots",
        websocket_get_slots,
        websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
            {vol.Required("type"): "z2m_lock_manager/get_slots"}
        ),
    )
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/get_history",
        websocket_get_history,
        websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
            {vol.Required("type"): "z2m_lock_manager/get_history"}
        ),
    )
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/update_slot",
        websocket_update_slot,
        SLOT_UPDATE_SCHEMA,
    )
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/add_user",
        websocket_add_user,
        websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
            {
                vol.Required("type"): "z2m_lock_manager/add_user",
                vol.Optional("name"): str,
                vol.Optional("code"): str,
                vol.Optional("enabled"): bool,
                vol.Optional("access_mode"): str,
                vol.Optional("start_date"): vol.Any(str, None),
                vol.Optional("end_date"): vol.Any(str, None),
                vol.Optional("weekdays"): vol.All(list),
                vol.Optional("daily_start_time"): vol.Any(str, None),
                vol.Optional("daily_end_time"): vol.Any(str, None),
            },
            extra=vol.REMOVE_EXTRA,
        ),
    )
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/delete_user",
        websocket_delete_user,
        websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
            {
                vol.Required("type"): "z2m_lock_manager/delete_user",
                vol.Required("slot_id"): str,
            }
        ),
    )
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/import_from_lock",
        websocket_import_from_lock,
        websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
            {
                vol.Required("type"): "z2m_lock_manager/import_from_lock",
                vol.Required("slot_id"): str,
            }
        ),
    )
    websocket_api.async_register_command(
        hass,
        "z2m_lock_manager/force_sync_to_lock",
        websocket_force_sync_to_lock,
        websocket_api.BASE_COMMAND_MESSAGE_SCHEMA.extend(
            {
                vol.Required("type"): "z2m_lock_manager/force_sync_to_lock",
                vol.Required("slot_id"): str,
            }
        ),
    )
