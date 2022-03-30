export default function CurrentWeather(props) {
  const { city, currentWeather } = props;
  return (
    <div className="CurrentWeather">
      <>
        <h1>Current weather for {city}</h1>
        <p>It is currently X deg</p>
        <p>And the weather looks like something</p>
      </>
    </div>
  );
}
