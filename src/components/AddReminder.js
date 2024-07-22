import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReminder } from '../store/reminderReducer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/AddReminder.css';

const AddReminder = () => {
    const dispatch = useDispatch();
    const [medicationId, setMedicationId] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [status, setStatus] = useState('');

    const handleAddReminder = () => {
        const newReminder = { medicationId, reminderTime, status };
        dispatch(addReminder(newReminder));
        setMedicationId('');
        setReminderTime('');
        setStatus('');
    };

    return (
        <div className="add-reminder-container">
            <h2>Add Reminder</h2>
            <div className="add-reminder-form">
                <TextField
                    label="Medication ID"
                    variant="outlined"
                    value={medicationId}
                    onChange={(e) => setMedicationId(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Reminder Time"
                    variant="outlined"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Status"
                    variant="outlined"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddReminder}
                    fullWidth
                    className="add-reminder-button"
                >
                    Add Reminder
                </Button>
            </div>
        </div>
    );
};

export default AddReminder;
