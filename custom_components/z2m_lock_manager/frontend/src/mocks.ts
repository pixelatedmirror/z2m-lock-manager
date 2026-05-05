import { HomeAssistant, Slot, Slots, LogEntry } from './types';

export const mockSlots: Slots = {
    "1": { 
        code: "1234", name: "Family", enabled: true, status: "Synced", 
        access_mode: "Always", last_used: "2023-11-26T08:30:00"
    },
    "2": { 
        code: "5678", name: "Cleaner", enabled: true, status: "Scheduled Off",
        access_mode: "Recurring", weekdays: [0], daily_start_time: "09:00", daily_end_time: "12:00",
        last_used: null
    },
    "3": { 
        code: "", name: "Guest", enabled: false, status: "Unknown",
        access_mode: "Temporary", last_used: "2023-11-20T14:15:00"
    },
};

export const mockHistory: LogEntry[] = [
    { timestamp: "2023-11-26T08:30:00", action: "unlock", source: "keypad", user_id: 0 },
    { timestamp: "2023-11-26T08:29:00", action: "lock", source: "one_touch_lock", user_id: null },
    { timestamp: "2023-11-25T18:00:00", action: "lock", source: "auto_lock", user_id: null },
];

export class MockHass implements HomeAssistant {
    connection = null;
    slots = { ...mockSlots };
    history = [ ...mockHistory ];

    async callWS(msg: any): Promise<any> {
        console.log("Mock WS Call:", msg);
        
        return new Promise((resolve) => {
            setTimeout(() => {
                if (msg.type === 'z2m_lock_manager/get_slots') {
                    resolve({ slots: this.slots });
                } else if (msg.type === 'z2m_lock_manager/get_history') {
                    resolve({ history: this.history });
                } else if (msg.type === 'z2m_lock_manager/update_slot') {
                    const { slot_id, ...updates } = msg;
                    if (this.slots[slot_id]) {
                        this.slots[slot_id] = { ...this.slots[slot_id], ...updates };
                        this.slots[slot_id].status = "Pending";
                    }
                    resolve({});
                } else if (msg.type === 'z2m_lock_manager/add_user') {
                    // Find first empty slot
                    const emptySlotId = Object.keys(this.slots).find(id => this.slots[id].code === "");
                    if (emptySlotId) {
                         const { type, ...updates } = msg;
                         this.slots[emptySlotId] = { ...this.slots[emptySlotId], ...updates, status: "Pending" };
                         resolve({ slot_id: emptySlotId });
                    } else {
                        // In a real mock we might reject, but types say resolve
                        resolve({ error: "No slots available" });
                    }
                } else if (msg.type === 'z2m_lock_manager/delete_user') {
                    const { slot_id } = msg;
                    if (this.slots[slot_id]) {
                        this.slots[slot_id] = { 
                            code: "", name: `Slot ${slot_id}`, enabled: false, status: "Unknown",
                            access_mode: "Always", last_used: null
                        };
                    }
                    resolve({});
                }
            }, 500); // Simulate network delay
        });
    }
}
