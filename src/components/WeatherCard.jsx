function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">

      <div className="main-weather">

        <div>

          <h1>{Math.round(weather.main.temp)}°</h1>

          <h2>{weather.name}</h2>

          <p>{weather.weather[0].description}</p>

        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt=""
        />

      </div>

      <div className="details">

        <div className="detail-card">
          <span>💧</span>
          <h3>{weather.main.humidity}%</h3>
          <small>Humidity</small>
        </div>

        <div className="detail-card">
          <span>🌬️</span>
          <h3>{weather.wind.speed}</h3>
          <small>Wind</small>
        </div>

        <div className="detail-card">
          <span>🌡️</span>
          <h3>{weather.main.feels_like}°</h3>
          <small>Feels Like</small>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;