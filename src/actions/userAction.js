export const CHANGE_WEATHER_INFO = 'CHANGE_WEATHER_INFO';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

export const changeWeatherInfo = ({country, city, temp, pressure, sunset}) => ({
    type: CHANGE_WEATHER_INFO,
    payload: {country, city, temp, pressure, sunset}
})

export const changeMessage = message => ({
    type: CHANGE_MESSAGE,
    payload: message
})