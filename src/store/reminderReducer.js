import { createSlice } from '@reduxjs/toolkit';
import { getRemindersLocal, setRemindersLocal } from '../utilities/localStorage';

const reminderSlice = createSlice({
    name: 'reminders',
    initialState: getRemindersLocal('reminders'), 
    reducers: {
        addReminder: (state, action) => {
            const newReminder = action.payload;
            state.push(newReminder); 
            setRemindersLocal('reminders', JSON.stringify(state));
        },
        deleteReminder: (state, action) => {
            
            return state.filter(reminder => reminder.id !== action.payload.id);
        }
    }
});

export const { addReminder, deleteReminder } = reminderSlice.actions;
export default reminderSlice.reducer;
