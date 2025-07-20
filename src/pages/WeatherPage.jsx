import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=d7281e2bd35f10eb5bf77458523a9e98&units=metric`
        );
        console.log("Weather API response:", res.data); 
        setWeather(res.data);
      } catch (err) {
        console.error("Weather API error:", err); 
        setError("Weather API error: " + err.message);
      }
    };
    
    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Weather</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather ? (
        <div>
          <p><strong>City:</strong> {weather.name}</p>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherPage;
