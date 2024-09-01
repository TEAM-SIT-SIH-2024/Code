import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { CityModule } from "./components/CityModule";
import { HospitalRoute } from "./components/HospitalRoute";
import { AdminSignin, AdminSignup, UserSignin, UserSignup } from "./components/Login";
import { OPDQueue } from "./components/opdQ";
import { Admission } from "./components/Admission";
import { RecoilRoot } from "recoil";
import { Hospitals } from "./components/Hospitals";
import { Appointment } from "./components/Appointment";
import {Support} from "./components/Support";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cities" element={<CityModule />} />
          <Route path="/cities/hospitals" element={<Hospitals />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/Admin" element={<HospitalRoute />} />
          <Route path="/Admin/signin" element={<AdminSignin />} />
          <Route path="/Admin/signup" element={<AdminSignup />} />
          <Route path="/User/signin" element={<UserSignin />} />
          <Route path="/User/signup" element={<UserSignup />} />
          <Route path="/Admin/opdQueue" element={<OPDQueue />} />
          <Route path="/Admin/Admission" element={<Admission />} />
          <Route path="/Support" element={<Support/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
