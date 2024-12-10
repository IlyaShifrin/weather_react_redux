import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchWeatherInfo} from "../features/api/weatherInfoAction.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        dispatch(fetchWeatherInfo(city));
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