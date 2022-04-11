import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios.get("/api/urls").then((res) => setUrls(res.data));
  }, []);

  const parsedUrls = urls.map((url) => (
    <p>
      {url.short_url} - {url.long_url}
    </p>
  ));
  return (
    <div className="App">
      <h1>Super url shortener!</h1>
      {parsedUrls}
    </div>
  );
}

export default App;
