import { Cities } from "./components/Cities";
import { RecoilRoot } from "recoil";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <RecoilRoot>
      <div>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>

        {search && <Cities requiredCity={city} />}
      </div>
    </RecoilRoot>
  );
}

export default App;
