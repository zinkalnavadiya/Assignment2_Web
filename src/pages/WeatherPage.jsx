import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=AIzaSyC6zIRmbnNC9ZcZDJG5t7SJo2mhjyMIiyE&units=metric`)
      .then(res => setWeather(res.data));
  }, []);

  return (
    <div>
      <h2>Weather</h2>
      {weather ? (
        <p>{weather.name}: {weather.main.temp}°C</p>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default WeatherPage;
