import React, { useState, useEffect } from "react";

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Координати Києва
  const lat = 50.45;
  const lon = 30.52;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await response.json();
        setWeather(data.current_weather);
        setLoading(false);
      } catch (error) {
        console.error("Помилка завантаження погоди:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="page fade-in">
      <h1>🏙 Моє місто — Київ</h1>
      
      <div className="city-info">
        <p>
          Київ — це неймовірне місто, яке поєднує в собі глибоку історію та сучасні технології. 
          Тут завжди є що досліджувати: від старовинних вуличок до сучасних ІТ-хабів.
        </p>
      </div>

      <div className="weather-widget">
        <h2>Поточна погода (API) ⛅</h2>
        {loading ? (
          <p>Отримуємо дані з супутників...</p>
        ) : weather ? (
          <div className="weather-data">
            <p><strong>Температура:</strong> {weather.temperature}°C</p>
            <p><strong>Швидкість вітру:</strong> {weather.windspeed} км/год</p>
            <p><strong>Координати:</strong> Широта {lat}, Довгота {lon}</p>
          </div>
        ) : (
          <p>Не вдалося завантажити погоду.</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;