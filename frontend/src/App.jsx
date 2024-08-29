import { Cities } from "./components/Cities";
import { CityList } from "./components/CityList";
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>

        {city === "" ? <CityList /> : search && <Cities requiredCity={city} />}
      </div>
    </RecoilRoot>
  );
}

export default App;
