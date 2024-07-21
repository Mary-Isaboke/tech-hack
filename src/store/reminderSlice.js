import { createSlice } from '@reduxjs/toolkit';
import { getRemindersLocal, setRemindersLocal } from '../utilities/localStorage';

const reminderSlice = createSlice({
    name: 'reminders',
    initialState: getRemindersLocal('reminders') || [], 
    reducers: {
        addReminder: (state, action) => {
            state.push(action.payload);
            setRemindersLocal('reminders', JSON.stringify(state));
        },
        deleteReminder: (state, action) => {
            return state.filter(reminder => reminder.username !== action.payload.username && reminder.text !== action.payload.text);
        }
    }
});

export const { addReminder, deleteReminder } = reminderSlice.actions;
export default reminderSlice.reducer;
