import { useRecoilValueLoadable } from "recoil";
import { citiesListAtom } from "../store/atoms/CityAtom";
import { Cities } from "./Cities";

export function CityList({ city }) {
  const citiesLoadable = useRecoilValueLoadable(citiesListAtom);

  switch (citiesLoadable.state) {
    case "loading":
      return <div>Loading cities...</div>;

    case "hasValue":
      const cities = citiesLoadable.contents;
      const filteredCities = city
        ? cities.filter((c) => c.name.toLowerCase() === city.toLowerCase())
        : cities;

      return (
        <div>
          <h3>{city ? `Results for "${city}"` : "All Cities"}</h3>
          <ul>
            {filteredCities.length > 0 ? (
              filteredCities.map((c) => (
                <li key={c._id}>
                  <Cities requiredCity={c} />
                </li>
              ))
            ) : (
              <li>No results found for "{city}".</li>
            )}
          </ul>
        </div>
      );

    case "hasError":
      return <div>Error loading cities: {citiesLoadable.contents.message}</div>;

    default:
      return null;
  }
}
