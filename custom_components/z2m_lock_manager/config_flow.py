"""Config flow for Zigbee2MQTT Lock Manager integration."""
from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResult
from homeassistant.exceptions import HomeAssistantError

from homeassistant.helpers import selector
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers import device_registry as dr

from .const import CONF_MQTT_TOPIC, CONF_SLOT_COUNT, DEFAULT_SLOT_COUNT, DOMAIN

_LOGGER = logging.getLogger(__name__)

STEP_USER_DATA_SCHEMA = vol.Schema(
    {
        vol.Required("lock_entity"): selector.EntitySelector(
            selector.EntitySelectorConfig(domain="lock")
        ),
        vol.Required(CONF_SLOT_COUNT, default=DEFAULT_SLOT_COUNT): int,
    }
)

class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Zigbee2MQTT Lock Manager."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Handle the initial step."""
        errors: dict[str, str] = {}
        if user_input is not None:
            # Here we could validate the MQTT topic or connection if we had access to the MQTT component.
            # For now, we assume it's correct or validatable later.
            try:
                registry = er.async_get(self.hass)
                entity = registry.async_get(user_input["lock_entity"])
                if not entity:
                    errors["base"] = "entity_not_found"
                else:
                    device_registry = dr.async_get(self.hass)
                    device = device_registry.async_get(entity.device_id)
                    
                    if not device or not device.name:
                        errors["base"] = "device_not_found"
                    else:
                        # Discover the MQTT topic using the device name
                        # Z2M typically uses zigbee2mqtt/[device_name]
                        mqtt_topic = f"zigbee2mqtt/{device.name}"
                        user_input[CONF_MQTT_TOPIC] = mqtt_topic
                        
                        return self.async_create_entry(
                            title=device.name, data=user_input
                        )
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("Unexpected exception")
                errors["base"] = "unknown"

        return self.async_show_form(
            step_id="user", data_schema=STEP_USER_DATA_SCHEMA, errors=errors
        )
