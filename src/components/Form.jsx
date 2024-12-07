import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";
import {changeMessage, changeWeatherInfo} from "../actions/userAction.js";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getWeather = city => {
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

    const getCity = e => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;