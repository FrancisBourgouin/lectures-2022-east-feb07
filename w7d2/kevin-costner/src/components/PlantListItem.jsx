// const plant = {
//   id: "",
//   type: "",
//   name: "",
//   lastWatered: "",
//   wateringInterval: 0,
// };
import { calculateDayDifference } from "../helpers/timeHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isDry = calculateDayDifference(lastWatered) > wateringInterval;

  return (
    <article style={{ color: isDry ? "red" : "green" }}>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>Last watered on: {lastWatered}</p>
    </article>
  );
}
