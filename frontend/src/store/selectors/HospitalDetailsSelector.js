import { selectorFamily } from "recoil";
import axios from "axios";

export const hospitalDetailsSelector = selectorFamily({
  key: "hospitalDetailsSelector",
  get: (hospitalIds) => async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/hospitals/details", { ids: hospitalIds });
      return response.data.hospitals;
    } catch (error) {
      console.error("Error fetching hospital details:", error);
      throw error;
    }
  },
});
