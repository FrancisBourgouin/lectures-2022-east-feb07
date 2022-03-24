import { useState } from "react";

import useCityWeather from "./hooks/useCityWeather";

import CityHistoryList from "./components/CityHistoryList";
import CityNameSearch from "./components/CityNameSearch";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import Spy from "./components/Spy";

import "./App.css";

function App() {
  const { currentCity, cityList, weatherData, updateCurrentCity } =
    useCityWeather("Montréal");
  const [spyDiscovered, setSpyDiscovered] = useState(false);

  const [count, setCount] = useState(1);

  const megaCount = () => {
    setCount(count + 1); // 2 (THAT WILL BE THE NEXT VALUE ON THE NEXT RENDER)
    setCount((prevState) => prevState + 1); // 3
    setCount((prevState) => prevState + 1); // 3
    setCount((prevState) => prevState + 1); // 3
    setCount((prevState) => prevState + 1); // 3
    setCount((prevState) => prevState + 1); // 3
    setCount((prevState) => prevState + 1); // 3
    setCount((prevState) => prevState + 1); // 3
  };
  return (
    <div className="App">
      <button onClick={megaCount}>count {count}</button>

      <Header />
      <main>
        <CityNameSearch onSubmit={updateCurrentCity} />
        <CityHistoryList cityList={cityList} updateCurrentCity={updateCurrentCity} />
        {weatherData && <CurrentWeather weatherData={weatherData} />}
        {!spyDiscovered && (
          <Spy
            currentCity={currentCity}
            discover={() => setSpyDiscovered(!spyDiscovered)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
