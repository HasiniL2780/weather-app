import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import getBackground from "./utils/getBackground";
import "./App.css";

function App() {
  const API_KEY = "d1630f23deb537a12e4901a55654df18";

  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  async function fetchWeather(location) {
    try {
      const current = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );

      const currentData = await current.json();

      if (currentData.cod !== 200) {
        alert(currentData.message);
        return;
      }

      setWeather(currentData);

      const future = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
      );

      const futureData = await future.json();

      setForecast(futureData);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={`app ${getBackground(weather)}`}>
      <div className="overlay"></div>

      <div className="dashboard">

        <div className="left-panel">
          <SearchBar
            city={city}
            setCity={setCity}
            searchWeather={() => fetchWeather(city)}
          />

          <WeatherCard weather={weather} />
        </div>

        <div className="right-panel">
          <h2>5 Day Forecast</h2>
          <Forecast forecast={forecast} />
        </div>

      </div>
    </div>
  );
}

export default App;