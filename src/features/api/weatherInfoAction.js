import {api_key, base_url} from "../../utils/constants.js";
import {changeMessage} from "../message/messageSlice.js";
import {changeWeatherInfo} from "../weatherInfo/weatherInfoSlice.js";

export const fetchWeatherInfo = city => {
    return dispatch => {
        dispatch(changeMessage('Pending...'));
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`, {})
            .then(result => result.json())
            .then(data => {
                dispatch(changeWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                }))
                dispatch(changeMessage(''));
            })
            .catch(e => {
                console.log(e);
                dispatch(changeMessage('Enter correct city name'));
            })
    }
}