import { useRecoilValueLoadable } from "recoil";
import { citiesListAtom } from "../store/atoms/CityAtom";
import { Cities } from "./Cities";

export function CityList() {
  const citiesLoadable = useRecoilValueLoadable(citiesListAtom);

  switch (citiesLoadable.state) {
    case "loading":
      return <div>Loading cities...</div>;

    case "hasValue":
      const cities = citiesLoadable.contents;
      return (
        <div>
          <h3>All Cities</h3>
          <ul>
            {cities.map((city) => (
              <li key={city._id}>
                <Cities requiredCity={city.name}></Cities>
              </li>
            ))}
          </ul>
        </div>
      );

    case "hasError":
      return <div>Error loading cities: {citiesLoadable.contents.message}</div>;

    default:
      return null;
  }
}
