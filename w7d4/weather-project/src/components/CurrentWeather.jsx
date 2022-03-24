export default function CurrentWeather(props) {
  const { weatherData } = props;
  return (
    <section>
      <h1>{weatherData.name}</h1>
      <p>{weatherData.main.temp}K</p>
      <p>{weatherData.weather[0].description}</p>
    </section>
  );
}
