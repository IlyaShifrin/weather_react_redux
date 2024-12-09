import {CHANGE_WEATHER_INFO} from "../actions/userAction.js";

// const defaultState = {
//     country: '',
//     city: '',
//     temp: '',
//     pressure: '',
//     sunset: ''
// }

export const weatherInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_WEATHER_INFO:
            return {
                ...state,
                country: action.payload.country,
                city: action.payload.city,
                temp: action.payload.temp,
                pressure: action.payload.pressure,
                sunset: action.payload.sunset
            }
        default:
            return state;
    }
}