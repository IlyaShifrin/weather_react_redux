import {combineReducers} from "redux";
import {weatherInfoReducer} from "./weatherInfoReducer.js";
import {messageReducer} from "./messageReducer.js";

export const rootReducer = combineReducers({
    weatherInfo: weatherInfoReducer, message: messageReducer
})