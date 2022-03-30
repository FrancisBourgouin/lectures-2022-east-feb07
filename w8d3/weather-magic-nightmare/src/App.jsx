import "./App.scss";
import CityForm from "./components/CityForm";
import CurrentWeather from "./components/CurrentWeather";
import CityList from "./components/CityList";
import { useState } from "react";
import axios from "axios";

// 09fd719b4b698ec0260e424f83378e3d
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityHistory, setCityHistory] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeatherData = (city) => {
    const apiKey = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    return axios.get(url);
  };

  const updateCurrentCity = (city) => {
    setCurrentCity(city);
    fetchWeatherData(city)
      .then((res) => {
        setCityHistory([city, ...cityHistory]);
        setCurrentWeather(res.data);
      })
      .catch((err) => {
        setCurrentWeather(null);
      });
  };

  const buttonUpdateCity = (city) => {
    setCurrentCity(city);
    fetchWeatherData(city)
      .then((res) => {
        setCurrentWeather(res.data);
      })
      .catch((err) => {
        setCurrentWeather(null);
      });
  };

  return (
    <div className="App">
      <h1>☀️🌦️ Super weather yeah! ⚡⛅</h1>
      <CityForm onSubmit={updateCurrentCity} />
      <CityList cityHistory={cityHistory} buttonUpdateCity={buttonUpdateCity} />
      {currentWeather && (
        <CurrentWeather city={currentCity} currentWeather={currentWeather} />
      )}
    </div>
  );
}

export default App;
