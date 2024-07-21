import { configureStore } from "@reduxjs/toolkit";
import  indexReducer  from "./indexReducer";
import  reminderReducer  from "./reminderSlice";
import  userReducer from "./userReducer";
import medicationReducer from './medicationReducer';


export const store = configureStore({
    reducer: {
        reminderReducer: reminderReducer,
        userReducer: userReducer,
        medicationReducer: medicationReducer,
        indexReducer: indexReducer
    }
})
