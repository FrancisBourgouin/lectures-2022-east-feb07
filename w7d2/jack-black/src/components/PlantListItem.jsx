import { calculateDayDifference } from "../helpers/timeHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isDry = calculateDayDifference(lastWatered) > wateringInterval;

  const style = {
    border: "0.2em solid black",
    borderColor: isDry ? "red" : "green",
  };
  return (
    <article style={style}>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>Last watered on: {lastWatered}</p>
    </article>
  );
}
