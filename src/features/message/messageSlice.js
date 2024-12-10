import {createSlice} from "@reduxjs/toolkit";

const messageSlice = createSlice ({
    name: 'message',
    initialState: {message: 'Enter city name'},
    reducers: {
        changeMessage: (state, action) => action.payload
    }
})

export const {changeMessage} = messageSlice.actions;
export default messageSlice.reducer;