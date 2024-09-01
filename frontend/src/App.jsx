import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { CityModule } from "./components/CityModule";
import { HospitalRoute } from "./components/HospitalRoute";
import { AdminSignin, AdminSignup } from "./components/Login";
import { OPDQueue } from "./components/opdQ";
import { Admission } from "./components/Admission";
import { RecoilRoot } from "recoil";
import { Hospitals } from "./components/Hospitals";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cities" element={<CityModule />} />
          <Route path="/cities/hospitals" element={<Hospitals />} />
          <Route path="/Admin" element={<HospitalRoute />} />
          <Route path="/Admin/signin" element={<AdminSignin />} />
          <Route path="/Admin/signup" element={<AdminSignup />} />
          <Route path="/Admin/opdQueue" element={<OPDQueue />} />
          <Route path="/Admin/Admission" element={<Admission />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
