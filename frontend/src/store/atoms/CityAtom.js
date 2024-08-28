import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const citiesAtomFamily = atomFamily({
  key: "citiesAtomFamily",
  default: selectorFamily({
    key: "citiesSelectorFamily",
    get:
      (city) =>
      async ({ get }) => {
        try {
          const res = await axios.get(
            "http://localhost:3000/cities?city=" + city
          );
          return res.data;
        } catch (error) {
          console.error("Error fetching city data:", error);
          return null;
        }
      },
  }),
});
