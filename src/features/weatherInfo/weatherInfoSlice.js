import {createSlice} from "@reduxjs/toolkit";

const weatherInfoSlice = createSlice({
    name: 'weatherInfo',
    initialState: {},
    reducers: {
        changeWeatherInfo: (state, action) => {
            return {
                ...state,
                country: action.payload.country,
                city: action.payload.city,
                temp: action.payload.temp,
                pressure: action.payload.pressure,
                sunset: action.payload.sunset
            }
        }
    }
})

export const {changeWeatherInfo} = weatherInfoSlice.actions;
export default weatherInfoSlice.reducer;