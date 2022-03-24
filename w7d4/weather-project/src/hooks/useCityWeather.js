import { useEffect, useState } from "react";
import { fetchWeatherData } from "../helpers/weatherHelpers";

export default function useCityWeather(defaultCity) {
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const [cityList, setCityList] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (currentCity) {
      fetchWeatherData(currentCity)
        .then((res) => setWeatherData(res.data))
        .catch(() => setWeatherData(null));
    }
  }, []);

  const updateCurrentCity = (cityName) => {
    if (typeof cityName !== "string") {
      return;
    }
    if (!cityList.includes(cityName)) {
      setCityList([...cityList, cityName]);
    }
    setCurrentCity(cityName);

    fetchWeatherData(cityName)
      .then((res) => setWeatherData(res.data))
      .catch(() => setWeatherData(null));
  };

  return { currentCity, cityList, weatherData, updateCurrentCity };
}
