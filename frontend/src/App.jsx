import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { CityModule } from "./components/CityModule";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cities" element={<RecoilRoot><CityModule /></RecoilRoot>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
