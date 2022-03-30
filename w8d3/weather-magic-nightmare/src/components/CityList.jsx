export default function CityList(props) {
  const { cityHistory, buttonUpdateCity } = props;

  const parsedCityHistory =
    cityHistory &&
    cityHistory.map((city) => (
      <button onClick={() => buttonUpdateCity(city)} key={city}>
        {city}
      </button>
    ));
  return (
    <section className="CityList">
      <h1>List of previously searched cities</h1>
      <h2>Previous cities will be shown here</h2>
      {parsedCityHistory}
    </section>
  );
}
