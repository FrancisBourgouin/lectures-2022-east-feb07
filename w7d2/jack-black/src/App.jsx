import logo from "./logo.svg";
import "./App.css";
import PlantList from "./components/PlantList";

function App() {
  const [plants, setPlants] = useState([]);

  const addPlant = (plantData) => {
    setPlants([...plants, plantData]);
  };
  return (
    <div className="App">
      <header>
        <h1>SUPER PLANT APP WITH STORYBOOK</h1>
      </header>
      <PlantList />
    </div>
  );
}

export default App;
