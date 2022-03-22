import { storiesOf } from "@storybook/react";
import PlantList from "../components/PlantList";

storiesOf("PlantList", module)
  .add("With a title", () => <PlantList title="Cool list of plants" />)
  .add("Without a title", () => <PlantList />);
