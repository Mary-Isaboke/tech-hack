// store/medicationReducer.js
const initialState = [
    { name: 'Paracetamol', dose: '500mg', time: '8:00 AM' },
    { name: 'Amoxicillin', dose: '250mg', time: '12:00 PM' },
    { name: 'Ibuprofen', dose: '200mg', time: '6:00 PM' },
    { name: 'Metformin', dose: '500mg', time: '8:00 AM' },
    { name: 'Lipitor', dose: '10mg', time: '9:00 PM' }
];

// Action Types
const ADD_MEDICATION = 'ADD_MEDICATION';

// Action Creators
export const addMedication = (medication) => ({
    type: ADD_MEDICATION,
    payload: medication
});

// Reducer
const medicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEDICATION:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default medicationReducer;
