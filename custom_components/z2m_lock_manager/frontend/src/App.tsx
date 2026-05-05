import React, { useEffect, useState } from 'react';
import { HomeAssistant, Slots, LogEntry, LockStates } from './types';
import {
    Container, Typography, Paper, List, ListItem,
    ListItemText, ListItemSecondaryAction, Switch,
    Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions,
    FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, Box, Divider, Fab,
    Alert, AlertTitle, IconButton, InputAdornment
} from '@mui/material';

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Wrapper for HA Web Component to safely pass complex objects
const HaMenuButton = ({ hass, narrow }: { hass: any, narrow: boolean }) => {
    const ref = React.useRef<any>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.hass = hass;
            ref.current.narrow = narrow;
        }
    }, [hass, narrow]);
    return React.createElement('ha-menu-button', { ref });
};

const App = ({ hass, narrow }: { hass: HomeAssistant, narrow: boolean }) => {
    const [slots, setSlots] = useState<Slots>({});
    const [lockStates, setLockStates] = useState<LockStates>({});
    const [history, setHistory] = useState<LogEntry[]>([]);
    const [editingSlot, setEditingSlot] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);

    // Edit State
    const [editName, setEditName] = useState("");
    const [editCode, setEditCode] = useState("");
    const [editMode, setEditMode] = useState("Always");
    const [editStartDate, setEditStartDate] = useState("");
    const [editEndDate, setEditEndDate] = useState("");
    const [editStartTime, setEditStartTime] = useState("");
    const [editEndTime, setEditEndTime] = useState("");
    const [editWeekdays, setEditWeekdays] = useState<number[]>([]);
    const [showCode, setShowCode] = useState(false);

    useEffect(() => {
        if (hass) {
            fetchSlots();
            fetchHistory();

            const interval = setInterval(fetchHistory, 30000);

            let unsub: (() => void) | undefined;
            hass.connection.subscribeEvents(() => {
                fetchSlots();
                fetchHistory();
            }, "z2m_lock_manager_updated").then((unsubFunc: () => void) => {
                unsub = unsubFunc;
            });

            return () => {
                clearInterval(interval);
                if (unsub) unsub();
            };
        }
    }, [hass]);

    const fetchSlots = async () => {
        try {
            const result = await hass.callWS({ type: 'z2m_lock_manager/get_slots' });
            setSlots(result?.slots || {});
            setLockStates(result?.lock_state || {});
        } catch (e) {
            console.error("Failed to fetch slots. Error details:", e);
        }
    };

    const fetchHistory = async () => {
        try {
            const result = await hass.callWS({ type: 'z2m_lock_manager/get_history' });
            setHistory(result.history);
        } catch (e) {
            console.error("Failed to fetch history", e);
        }
    };

    const handleToggle = async (slotId: string, enabled: boolean) => {
        const newSlots = { ...slots };
        if (newSlots[slotId]) {
            newSlots[slotId].enabled = enabled;
        }
        setSlots(newSlots);

        await hass.callWS({
            type: 'z2m_lock_manager/update_slot',
            slot_id: slotId,
            enabled: enabled
        });
        fetchSlots();
    };

    const importFromLock = async (slotId: string) => {
        await hass.callWS({
            type: 'z2m_lock_manager/import_from_lock',
            slot_id: slotId
        });
        fetchSlots();
    };

    const writeToLock = async (slotId: string) => {
        await hass.callWS({
            type: 'z2m_lock_manager/force_sync_to_lock',
            slot_id: slotId
        });
        fetchSlots();
    };

    const openAdd = () => {
        setIsAdding(true);
        setEditingSlot(null); // No specific slot yet
        setEditName("");
        setEditCode("");
        setEditMode("Always");
        setEditStartDate("");
        setEditEndDate("");
        setEditStartTime("");
        setEditEndTime("");
        setEditWeekdays([]);
    };

    const openEdit = (slotId: string) => {
        const s = slots[slotId];
        setIsAdding(false);
        setEditingSlot(slotId);
        setEditName(s.name);
        setEditCode(s.code);
        setEditMode(s.access_mode || "Always");
        setEditStartDate(s.start_date || "");
        setEditEndDate(s.end_date || "");
        setEditStartTime(s.daily_start_time || "");
        setEditEndTime(s.daily_end_time || "");
        setEditWeekdays(s.weekdays || []);
    };

    const closeDialog = () => {
        setEditingSlot(null);
        setIsAdding(false);
        setShowCode(false);
    }

    const saveEdit = async () => {
        const payload = {
            name: editName,
            code: editCode,
            access_mode: editMode,
            start_date: editStartDate || null,
            end_date: editEndDate || null,
            daily_start_time: editStartTime || null,
            daily_end_time: editEndTime || null,
            weekdays: editWeekdays,
            enabled: isAdding ? true : (editingSlot ? slots[editingSlot].enabled : true)
        };

        if (isAdding) {
            await hass.callWS({
                type: 'z2m_lock_manager/add_user',
                ...payload
            });
        } else if (editingSlot) {
            await hass.callWS({
                type: 'z2m_lock_manager/update_slot',
                slot_id: editingSlot,
                ...payload
            });
        }

        closeDialog();
        fetchSlots();
    };

    const deleteUser = async () => {
        if (!editingSlot) return;
        if (confirm("Are you sure you want to delete this user? This will clear the code from the lock.")) {
            await hass.callWS({
                type: 'z2m_lock_manager/delete_user',
                slot_id: editingSlot
            });
            closeDialog();
            fetchSlots();
        }
    }

    const toggleWeekday = (dayIndex: number) => {
        if (editWeekdays.includes(dayIndex)) {
            setEditWeekdays(editWeekdays.filter(d => d !== dayIndex));
        } else {
            setEditWeekdays([...editWeekdays, dayIndex].sort());
        }
    };

    const formatTime = (iso: string | null | undefined) => {
        if (!iso) return "Never";
        return new Date(iso).toLocaleString();
    }

    // Filter active slots
    const activeSlots = Object.entries(slots || {}).filter(([_, slot]) => slot && slot.code !== "" && slot.code !== null);
    const totalSlots = Object.keys(slots || {}).length;

    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef}>
            <style>{`
                .header {
                    background-color: var(--app-header-background-color, var(--primary-color));
                    color: var(--app-header-text-color, white);
                    border-bottom: var(--app-header-border-bottom, none);
                }
                .toolbar {
                    height: var(--header-height, 56px);
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    padding: 0 16px;
                    font-weight: 400;
                    box-sizing: border-box;
                }
                .main-title {
                    margin: 0 0 0 24px;
                    line-height: 20px;
                    flex-grow: 1;
                }
            `}</style>
            <div className="header">
                <div className="toolbar">
                    <HaMenuButton hass={hass} narrow={narrow} />
                    <div className="main-title">Lock Manager</div>
                </div>
            </div>
            <Container maxWidth="md" style={{ marginTop: '20px', minHeight: '100vh', padding: '20px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h4">Users</Typography>
                    <Button variant="contained" color="primary" onClick={openAdd}>
                        Add User
                    </Button>
                </Box>

                <Box mb={4}>
                    <Typography variant="subtitle1" gutterBottom>
                        Using {activeSlots.length} of {totalSlots} slots
                    </Typography>
                    <Paper>
                        <List>
                            {activeSlots.length === 0 && <ListItem><ListItemText primary="No users configured." /></ListItem>}
                            {activeSlots.map(([id, slot]) => (
                                <ListItem key={id} divider sx={{ flexDirection: 'column', alignItems: 'stretch' }}>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                                        <ListItemText
                                            primary={`${id}. ${slot.name}`}
                                            secondary={
                                                <span>
                                                    Status: <b>{slot.status}:</b> {slot.sync_state} | Mode: {slot.access_mode} <br />
                                                    Last Used: {formatTime(slot.last_used)}
                                                </span>
                                            }
                                        />
                                        <Box>
                                            <Button onClick={() => openEdit(id)}>Edit</Button>
                                            <Switch
                                                edge="end"
                                                checked={!!slot?.enabled}
                                                onChange={(e) => handleToggle(id, e.target.checked)}
                                            />
                                        </Box>
                                    </Box>
                                    {slot.sync_state === 'mismatch' && (
                                        <Box mt={1} mb={1}>
                                            <Alert severity="warning">
                                                <AlertTitle>Sync Mismatch</AlertTitle>
                                                HA expected code: {slot.code || "None"} ({slot.enabled ? "Enabled" : "Disabled"}). <br />
                                                Lock actual code: {lockStates[id]?.code || "None"} ({lockStates[id]?.enabled ? "Enabled" : "Disabled"}).
                                                <Box mt={1}>
                                                    <Button variant="outlined" color="inherit" size="small" sx={{ mr: 1 }} onClick={() => importFromLock(id)}>Import from Lock</Button>
                                                    <Button variant="contained" color="warning" size="small" onClick={() => writeToLock(id)}>Write to Lock</Button>
                                                </Box>
                                            </Alert>
                                        </Box>
                                    )}
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom>Activity Log</Typography>
                    <Paper style={{ maxHeight: '300px', overflow: 'auto' }}>
                        <List dense>
                            {history.length === 0 && <ListItem><ListItemText primary="No recent activity" /></ListItem>}
                            {(history || []).map((entry, index) => {
                                let primary = (entry?.action || "unknown").toUpperCase().replace(/_/g, " ");
                                if (entry?.user_id !== null && entry?.user_id !== undefined) {
                                    // Z2M user_id is 0-indexed, HA slots are 1-indexed
                                    const slotId = String(entry.user_id + 1);
                                    const name = slots[slotId]?.name || `User ${entry.user_id + 1}`;

                                    if (entry.action === "pin_code_deleted") {
                                        if (!slots[slotId] || slots[slotId].code === "") {
                                            primary = `${name} deleted`;
                                        } else {
                                            primary = `${name} PIN Disabled`;
                                        }
                                    } else if (entry.action === "pin_code_added") {
                                        primary = `${name} PIN Enabled`;
                                    } else {
                                        primary += ` by ${name}`;
                                    }
                                } else if (entry?.source) {
                                    primary += ` (${entry.source})`;
                                }

                                return (
                                    <ListItem key={index} divider>
                                        <ListItemText
                                            primary={primary}
                                            secondary={formatTime(entry.timestamp)}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Paper>
                </Box>

                <Dialog 
                    open={isAdding || !!editingSlot} 
                    onClose={closeDialog} 
                    fullWidth
                    container={containerRef.current}
                >
                    <DialogTitle>{isAdding ? "Add User" : `Edit Slot ${editingSlot}`}</DialogTitle>
                    <DialogContent dividers>
                        <TextField
                            margin="dense" label="Name" fullWidth
                            value={editName} onChange={(e) => setEditName(e.target.value)}
                        />
                        <TextField
                            margin="dense" label="Code" fullWidth type={showCode ? "text" : "password"}
                            value={editCode} onChange={(e) => setEditCode(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowCode(!showCode)}
                                            edge="end"
                                        >
                                            {React.createElement('ha-icon', { icon: showCode ? "mdi:eye-off" : "mdi:eye" })}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <Box mt={2}>
                            <FormControl fullWidth>
                                <InputLabel>Access Mode</InputLabel>
                                <Select 
                                    value={editMode} 
                                    label="Access Mode" 
                                    onChange={(e) => setEditMode(e.target.value)}
                                    MenuProps={{ container: containerRef.current }}
                                >
                                    <MenuItem value="Always">Always Active</MenuItem>
                                    <MenuItem value="Recurring">Recurring (Weekly)</MenuItem>
                                    <MenuItem value="Temporary">Temporary (Date Range)</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {editMode === 'Temporary' && (
                            <Box mt={2}>
                                <TextField
                                    label="Start Date" type="datetime-local" fullWidth margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    value={editStartDate} onChange={(e) => setEditStartDate(e.target.value)}
                                />
                                <TextField
                                    label="End Date" type="datetime-local" fullWidth margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    value={editEndDate} onChange={(e) => setEditEndDate(e.target.value)}
                                />
                            </Box>
                        )}

                        {editMode === 'Recurring' && (
                            <Box mt={2}>
                                <Typography variant="subtitle2">Days of Week</Typography>
                                <FormGroup row>
                                    {WEEKDAYS.map((day, index) => (
                                        <FormControlLabel
                                            key={day}
                                            control={<Checkbox checked={editWeekdays.includes(index)} onChange={() => toggleWeekday(index)} />}
                                            label={day}
                                        />
                                    ))}
                                </FormGroup>
                                <Box display="flex" gap={2} mt={2}>
                                    <TextField
                                        label="Start Time" type="time" fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        value={editStartTime} onChange={(e) => setEditStartTime(e.target.value)}
                                    />
                                    <TextField
                                        label="End Time" type="time" fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        value={editEndTime} onChange={(e) => setEditEndTime(e.target.value)}
                                    />
                                </Box>
                            </Box>
                        )}

                    </DialogContent>
                    <DialogActions>
                        {!isAdding && (
                            <Button onClick={deleteUser} style={{ marginRight: 'auto', color: 'red' }}>
                                Delete
                            </Button>
                        )}
                        <Button onClick={closeDialog}>Cancel</Button>
                        <Button onClick={saveEdit} variant="contained" color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
};

export default App;
