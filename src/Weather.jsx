import { useState } from "react";
import React from 'react';
import './weather.css';
import axios from 'axios';

function Weather() {
  const [text, setText] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  function handleInputChange(event) {
    setText(event.target.value);
  }

  async function handleW() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${text}`);

      setWeatherData(response.data);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch weather data. Please check the city name.");
      setWeatherData(null); // Clear previous weather data
    }
  }

  return (
    <div id="container">
      <div id="w-app">
        <input
          type="text"
          value={text} onChange={handleInputChange} placeholder="Enter city name"
        />
        <button onClick={handleW}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
