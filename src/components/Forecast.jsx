function Forecast({ forecast }) {
  if (!forecast) return null;

  const daily = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-grid">

      {daily.slice(0, 5).map((day, index) => (

        <div key={index} className="forecast-card">

          <h3>
            {new Date(day.dt_txt).toLocaleDateString(
              "en-US",
              { weekday: "short" }
            )}
          </h3>

          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt=""
          />

          <h2>{Math.round(day.main.temp)}°</h2>

        </div>

      ))}

    </div>
  );
}

export default Forecast;