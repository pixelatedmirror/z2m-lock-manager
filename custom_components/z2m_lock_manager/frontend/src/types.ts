export interface Slot {
    code: string;
    name: string;
    status: string;
    enabled: boolean;
    last_used?: string | null;
    sync_state: string;
    
    // Scheduling
    access_mode: "Always" | "Recurring" | "Temporary";
    start_date?: string | null;
    end_date?: string | null;
    weekdays?: number[];
    daily_start_time?: string | null;
    daily_end_time?: string | null;
}

export interface Slots {
    [key: string]: Slot;
}

export interface LockState {
    code: string;
    enabled: boolean;
}

export interface LockStates {
    [key: string]: LockState;
}

export interface LogEntry {
    timestamp: string;
    action: string;
    source: string;
    user_id?: number | null;
}

export interface HomeAssistant {
    connection: any;
    callWS: (msg: any) => Promise<any>;
}
