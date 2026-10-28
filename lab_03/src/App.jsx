import { useState,useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather.js';
import './App.css';
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(
    () => typeof navigator === "undefined" || navigator.onLine
  );

  const search = async (e) => {
  e.preventDefault();
  if (!query.trim()) return; // puste pole - nic nie robimy
    setLoading(true);
    setError('');
  try {
    const data = await fetchWeather(query);
    setWeather(data);
    console.log(data);
    console.log(weather);
    setQuery(''); // czyścimy pole po udanym wyszukiwaniu
  }  catch (err) {
    setWeather(null);
    setError(err.message);
  } finally {
    setLoading(false);
  }
 };

useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);



 return (
  <div className="main-container">
    <form onSubmit={search}>
      <input
       type="text"
       className="search"
       placeholder="Wpisz miasto..."
       value={query}
       onChange={(e) => setQuery(e.target.value)}
      />
    </form>
 {!isOnline && (
        <div  className="message error">
          Brak połączenia — pokazuję ostatnio pobrane dane.
        </div>
      )}


      {loading && <p className="message">Pobieranie danych...</p>}
      {error && <p className="message error">{error}</p>}
      {weather && (
 <div className="city">
  <h2 className="city-name">
    <span>{weather.name}</span>
    <sup>{weather.sys.country}</sup>
  </h2>
     <span className="city-temp">
      { Math.round(weather.main.temp) } &deg;C
    </span>
    <div className="info">
       <img className="city-icon" alt="Ikona pogody" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
       <p>{weather.weather[0].description}</p>
       <span><small>Ciśnienie: {weather.main.pressure} hPa</small></span>
       <span><small>Wilgotność: {weather.main.humidity}%</small></span>
       {weather.wind.gust && <span><small>Wiatr: {weather.wind.gust} m/s</small></span> }
       {weather.wind.deg && <span><small>Kierunek wiatru: {weather.wind.deg} &deg;</small></span> }
       <span><small> {new Date(weather.dt * 1000).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}</small></span>
       </div>
 </div>
  )}
  </div>
  );
  }
export default App;