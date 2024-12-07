import {CHANGE_MESSAGE} from "../actions/userAction.js";

const defaultState = {
    message: 'Enter city name'
}

export const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return {...state, message: action.payload};
        default:
            return state;
    }
}