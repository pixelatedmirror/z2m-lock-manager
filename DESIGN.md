# Zigbee2MQTT Lock Manager Design Document

## Overview
This project is a Home Assistant custom component designed to manage PIN codes for Zigbee smart locks via Zigbee2MQTT (Z2M). It features a dedicated **custom Sidebar Panel** in Home Assistant for a polished, app-like management experience, moving away from standard Lovelace cards.

## Architecture

The system consists of a Python backend (the custom component) and a JavaScript frontend (the sidebar panel), communicating via Home Assistant's WebSocket API.

### Components

1.  **Backend (Custom Component)**
    *   **Config Flow:** Setup MQTT topics and slot limits.
    *   **Core Manager:** Maintains state, handles MQTT pub/sub, and manages schedules.
    *   **WebSocket API:** Registers commands to allow the frontend to fetch data and trigger actions (e.g., `z2m_lock_manager/get_slots`, `z2m_lock_manager/update_slot`, `z2m_lock_manager/add_user`, `z2m_lock_manager/delete_user`, `z2m_lock_manager/get_history`).
    *   **Panel Registration:** Registers the custom frontend resource and adds the "Lock Manager" item to the sidebar.

2.  **Frontend (Sidebar Panel)**
    *   **Tech Stack:** React (or Lit), built with Vite.
    *   **Native UI Integration:** Embedded directly into the Home Assistant DOM (no iframe) to leverage native components like `<ha-menu-button>`.
    *   **Shadow DOM Styling:** Uses `@emotion/cache` and `<CacheProvider>` to inject styles into the component host, bypassing Shadow DOM isolation.
    *   **Features:**
        *   Dashboard view of active slots.
        *   Add/Edit modal for users (Code, Name, Access Mode/Schedule).
        *   Activity Log displaying recent lock actions with contextual resolution (e.g., distinguishing "Disabled" vs "Deleted").
        *   Real-time visual feedback for sync status (Pending, Synced, Mismatch).
        *   Sync Mismatch Handling: Detects differences between Home Assistant's expected state and the lock's actual state, offering one-click Import or Force-Write.

3.  **Communication Layer**
    *   **Data Fetching:** Frontend fetches initial state and polls history via WebSocket.
    *   **Actions:** Frontend sends WebSocket messages to backend to update lock codes and user status.

### Logic Flow

#### 1. Loading the Panel
1.  User clicks "Lock Manager" in the sidebar.
2.  Home Assistant loads the bundled JS file from the integration directory.
3.  Frontend initializes and sends `z2m_lock_manager/get_slots` and `z2m_lock_manager/get_history` over WebSocket.
4.  Backend responds with current slots, history, and status.

#### 2. Managing Codes
1.  User adds or updates a code in the UI.
2.  Frontend sends `z2m_lock_manager/add_user` or `z2m_lock_manager/update_slot` with user details and schedule.
3.  Backend updates internal state and publishes the MQTT payload to Z2M.
4.  Backend broadcasts a `z2m_lock_manager_updated` event via the HA Event Bus.
5.  Frontend listens for this event and triggers a silent re-fetch to reflect "Pending" status.
6.  Once Z2M confirms (via MQTT), Backend updates state and broadcasts again; Frontend reflects "Synced" status.

#### 3. Sync Mismatch Resolution
1.  Backend continuously compares the physical lock state (reported via Z2M) with HA's intended state.
2.  If a mismatch is detected (e.g., code changed manually on the lock), the UI displays a "Sync Mismatch" warning.
3.  User can choose "Import from Lock" (updates HA to match lock) or "Write to Lock" (overwrites lock to match HA).
4.  Corrected state is persisted and broadcast to the frontend.

## Directory Structure
```
custom_components/
  z2m_lock_manager/
    __init__.py       # Setup, Panel Registration, WebSocket handlers
    config_flow.py    # Integration Setup
    const.py
    manifest.json
    manager.py        # Logic for MQTT & Scheduling
    api.py            # WebSocket API definitions
    www/
      z2m-lock-manager-panel.js  # Built frontend bundle

frontend/             # Source code for the UI
  src/
    components/
    main.tsx
  package.json
  vite.config.ts
```

## User Interface
*   **Main View:** A list of active users showing Name, Status, Sync State, Access Mode, Last Used, and an Enabled toggle. Includes an Activity Log at the bottom.
*   **Detail View:** Clicking "Edit" or "Add User" opens a modal for settings: Name, Code, and Access Mode (Always Active, Recurring Weekly, Temporary Date Range).
