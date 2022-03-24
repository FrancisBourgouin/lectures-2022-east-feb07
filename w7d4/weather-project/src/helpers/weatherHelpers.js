import axios from "axios";

export const fetchWeatherData = (cityName) => {
  const apiKey = "09fd719b4b698ec0260e424f83378e3d";
  const apiPath = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  return axios.get(apiPath);
};
