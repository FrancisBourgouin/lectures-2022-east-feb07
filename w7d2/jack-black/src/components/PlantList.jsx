import { plantData } from "../data/plantData";
import PlantListItem from "./PlantListItem";
import "./PlantList.css";

export default function PlantList(props) {
  const parsedPlants =
    Array.isArray(plantData) &&
    plantData.map((plant) => <PlantListItem key={plant.id} {...plant} />);
  return (
    <section className="PlantList">
      <h1>{props.title}</h1>
      {parsedPlants}
    </section>
  );
}
