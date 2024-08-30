import { CityList } from "./CityList";
import { useRecoilState } from "recoil";
import {  SearchCityAtom } from "../store/atoms/SearchCityAtom";



export function CityModule() {
    const [city, setCity] = useRecoilState(SearchCityAtom);
  
    return (
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
  
        <CityList city={city}/>
      </div>
    );
  }
  
