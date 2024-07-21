import { createSlice } from '@reduxjs/toolkit';
import { getUsers, setUsers as setUsersInStorage } from '../utilities/localStorage';

const userSlice = createSlice({
    name: 'users',
    initialState: getUsers('users'), 
    reducers: {
        
        addUser: (state, action) => {
            const newUser = action.payload;
            state.push(newUser); 
            setUsersInStorage('users', JSON.stringify(state)); 
        },
        
        deleteUser: (state, action) => {
            return state.filter(user => user.username !== action.payload.username); 
        }
    }
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
