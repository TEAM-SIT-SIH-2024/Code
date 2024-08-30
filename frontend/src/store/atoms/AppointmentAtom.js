import { atom } from "recoil";

export const selectedHospitalAtom = atom({
  key: "selectedHospitalAtom",
  default: null,
});

export const appointmentDetailsAtom = atom({
  key: "appointmentDetailsAtom",
  default: {
    name: "",
    purpose: "",
    time: "",
    phone: "",
  },
});
