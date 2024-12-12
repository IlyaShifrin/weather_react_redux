import {createSlice} from "@reduxjs/toolkit";

const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: {},
    reducers: {
        changeWeatherInfo: (state, action) => action.payload
    }
})

export const {changeWeatherInfo} = weatherInfoSlice.actions;
export default weatherInfoSlice.reducer;