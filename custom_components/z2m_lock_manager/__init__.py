"""The Zigbee2MQTT Lock Manager integration."""
from __future__ import annotations

import os
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.components import frontend
from homeassistant.components.http import StaticPathConfig

from .const import DOMAIN

PLATFORMS: list[Platform] = []

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Zigbee2MQTT Lock Manager from a config entry."""
    import sys
    import importlib
    
    # Import local modules
    from . import manager
    from . import api

    # Hot Reload: If the modules are already loaded in memory, reload them from disk
    if "custom_components.z2m_lock_manager.manager" in sys.modules:
        importlib.reload(manager)
        importlib.reload(api)

    hass.data.setdefault(DOMAIN, {})

    # Initialize Manager
    lock_manager = manager.LockManager(hass, entry.data)
    await lock_manager.async_initialize()
    hass.data[DOMAIN]["manager"] = lock_manager

    # Setup WebSocket API
    await api.async_setup_api(hass)
    
    # Register Static Path for Frontend
    # This allows /z2m_lock_manager/z2m-lock-manager-panel.js to be served
    path = os.path.join(os.path.dirname(__file__), "frontend/dist/")
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                "/z2m_lock_manager",
                path,
                cache_headers=False,
            )
        ]
    )

    # Register Sidebar Panel
    frontend.async_register_built_in_panel(
        hass,
        component_name="custom",
        frontend_url_path="z2m-lock-manager",
        config={
            "_panel_custom": {
                "name": "z2m-lock-manager",
                "embed_iframe": False,
                "trust_external": False,
                "js_url": "/z2m_lock_manager/z2m-lock-manager-panel.js",
            }
        },
        sidebar_title="Lock Manager",
        sidebar_icon="mdi:lock-smart",
        require_admin=True,
        update=True,
    )
    
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    if unload_ok := await hass.config_entries.async_unload_platforms(entry, PLATFORMS):
        lock_manager = hass.data[DOMAIN].get("manager")
        if lock_manager:
            await lock_manager.async_unload()
        hass.data[DOMAIN].pop("manager", None)
        frontend.async_remove_panel(hass, "z2m_lock_manager")
        
    return unload_ok

async def async_remove_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Handle removal of an entry and its data."""
    from homeassistant.helpers.storage import Store
    from .const import DOMAIN
    
    # Remove the storage file
    store = Store(hass, 1, f"{DOMAIN}.manager")
    await store.async_remove()
