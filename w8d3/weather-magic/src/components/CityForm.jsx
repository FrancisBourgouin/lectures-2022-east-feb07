import { useState } from "react";

export default function CityForm(props) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(city);

    setCity("");
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setCity(value);
  };
  // input[type="text"]
  // input[data-testid="text"]
  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter a city name"
        value={city}
        onChange={handleChange}
      />
      <button>Fetch weather!</button>
    </form>
  );
}
