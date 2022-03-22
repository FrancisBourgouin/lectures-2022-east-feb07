import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const wellWatered = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-03-20",
  wateringInterval: 7,
};

const notWellWatered = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-02-20",
  wateringInterval: 7,
};

storiesOf("PlantList Item", module)
  .add("Well watered", () => <PlantListItem {...wellWatered} />)
  .add("Not well watered", () => <PlantListItem {...notWellWatered} />);
