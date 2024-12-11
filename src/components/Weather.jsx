import {useSelector} from "react-redux";

const Weather = () => {
    const {country, city, temp, pressure, sunset} = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);
    return (
        <div className={'infoWeath'}>
            {!message &&
                <> {/*это фрагмент Fragment'*/}
                    <p>Location: {country}, {city}</p>
                    <p>Temp: {temp}</p>
                    <p>Pressure: {pressure}</p>
                    <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
};

export default Weather;