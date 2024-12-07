const Weather = ({weather, message}) => {

    return (
        <div className={'infoWeath'}>
            {!message &&
                <> {/*это фрагмент Fragment'*/}
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
};

export default Weather;