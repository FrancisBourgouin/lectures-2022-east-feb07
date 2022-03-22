// const plants = [plant, plant];
import PlantListItem from "./PlantListItem";

import { plantData } from "../data/plantData";

export default function PlantList(props) {
  const parsedPlants = plantData.map((plant) => (
    <PlantListItem key={plant.id} {...plant} />
  ));

  return <main>{parsedPlants}</main>;
}
