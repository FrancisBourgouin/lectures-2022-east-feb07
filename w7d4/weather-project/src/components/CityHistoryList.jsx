import CityHistoryListItem from "./CityHistoryListItem";

export default function CityHistoryList(props) {
  const { cityList, updateCurrentCity } = props;

  const parsedCityButtons =
    Array.isArray(cityList) &&
    cityList.map((city) => (
      <CityHistoryListItem
        key={city}
        city={city}
        updateCurrentCity={() => updateCurrentCity(city)}
      />
    ));

  const title = cityList.length
    ? "Previously searched cities"
    : "Cities searched will be appended below";

  return (
    <section>
      <h1>{title}</h1>

      <ul>{parsedCityButtons}</ul>
    </section>
  );
}
