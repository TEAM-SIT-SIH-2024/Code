import { useRecoilValue } from "recoil";
import { citiesAtomFamily } from "../store/atoms/CityAtom";

export function Cities({ requiredCity }) {
  const city = useRecoilValue(citiesAtomFamily(requiredCity));
  return (
    <div>
      <h3>{city.name}</h3>
      <div>This city currently has {city.hospitals.length} Hospitals</div>
      <button>view</button>
    </div>
  );
}
