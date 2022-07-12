export default function WeatherCard({data: {name, weather}}) {

    return(
        <div className="weather-card">
            <h2>{name}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather" />
            <p>{weather[0].description}</p>
        </div>
    )
}