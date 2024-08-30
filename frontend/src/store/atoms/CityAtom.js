import { atomFamily, selectorFamily,atom, selector } from "recoil";
import axios from "axios";

export const citiesAtomFamily = atomFamily({
  key: "citiesAtomFamily",
  default: selectorFamily({
    key: "citiesSelectorFamily",
    get: (city) => async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/user/cities?city=${city}`
        );

        if (res.status === 404) {
          return { error: "City not found", hospitals: [] };
        }

        return res.data.city;
      } catch (error) {
        console.error("Error fetching city data:", error);
        return { error: "Error fetching data", hospitals: [] };
      }
    },
  }),
});

export const citiesListAtom = atom({
  key: "citiesListAtom",
  default: selector({
    key: "citiesListSelector",
    get: async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/cities");

        if (res.status === 404) {
          return { error: "No cities found", cities: [] };
        }

        return res.data.cities;
      } catch (error) {
        console.error("Error fetching cities:", error);
        return { error: "Error fetching data", cities: [] };
      }
    },
  }),
});
