import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMedication } from '../store/medicationReducer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/AddMedication.css';


const AddMedication = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [dose, setDose] = useState('');
    const [time, setTime] = useState('');

    const handleAddMedication = () => {
        const newMedication = { name, dose, time };
        dispatch(addMedication(newMedication));
        setName('');
        setDose('');
        setTime('');
    };

    return (
        <div className="add-medication-container">
            <h2>Add Medication</h2>
            <div className="add-medication-form">
                <TextField
                    label="Medication Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Dose"
                    variant="outlined"
                    value={dose}
                    onChange={(e) => setDose(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Time"
                    variant="outlined"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddMedication}
                    fullWidth
                    className="add-medication-button"
                >
                    Add Medication
                </Button>
            </div>
        </div>
    );
};

export default AddMedication;
