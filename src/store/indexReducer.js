import { createSlice } from '@reduxjs/toolkit';
import { getIndex, setIndex as setIndexInStorage } from '../utilities/localStorage';


const initialState = getIndex('index');

const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {
        
        setIndex: (state, action) => {
            const newIndex = action.payload;
            state[0] = newIndex; 
            
            setIndexInStorage('index', JSON.stringify(state)); 
        },
        
        resetIndex: (state) => {
            state[0] = -1; 
            setIndexInStorage('index', JSON.stringify(state)); 
        },
       
        changeLoggedIndex: (state, action) => {
            const newIndex = action.payload;
            state[0] = newIndex;
            setIndexInStorage('index', JSON.stringify(state));
        }
    }
});

export const { setIndex, resetIndex, changeLoggedIndex } = indexSlice.actions;
export default indexSlice.reducer;
