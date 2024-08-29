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
        return res.data.city;
      } catch (error) {
        console.error("Error fetching city data:", error);
        return { hospitals: [] };
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
        return res.data.cities;
      } catch (error) {
        console.error("Error fetching cities:", error);
        return [];
      }
    },
  }),
});
