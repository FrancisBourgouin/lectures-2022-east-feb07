export default function CityHistoryListItem(props) {
  const { city, updateCurrentCity } = props;
  return (
    <li>
      <button onClick={updateCurrentCity}>{city}</button>
    </li>
  );
}
