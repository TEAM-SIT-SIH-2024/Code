import { useRecoilValueLoadable } from "recoil";
import { citiesAtomFamily } from "../store/atoms/CityAtom";

export function Cities({ requiredCity }) {
  const cityLoadable = useRecoilValueLoadable(citiesAtomFamily(requiredCity));

  switch (cityLoadable.state) {
    case "loading":
      return <div>Loading city data...</div>;

    case "hasValue":
      const city = cityLoadable.contents;

      return (
        <div>
          <h3>{city.name.toUpperCase()}</h3>
          <div>This city currently has {city.hospitals.length} hospitals</div>
          <button>View</button>
        </div>
      );

    case "hasError":
      return <div>Error loading city data: {cityLoadable.contents.message}</div>;

    default:
      return null;
  }
}
