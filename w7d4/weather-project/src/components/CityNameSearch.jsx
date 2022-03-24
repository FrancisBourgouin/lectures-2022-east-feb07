import { useState } from "react";

export default function CityNameSearch(props) {
  const originalFormData = {
    cityName: "",
  };
  const [formData, setFormData] = useState(originalFormData);

  const { cityName } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(cityName);
    setFormData(originalFormData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="cityName" onChange={handleChange} value={cityName} />
      <button>SEARCH</button>
    </form>
  );
}
