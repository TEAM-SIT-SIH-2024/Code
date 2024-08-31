import { RecoilRoot } from "recoil";
import { CityModule } from "./components/CityModule";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
    // <RecoilRoot>
    //   <CityModule />
    // </RecoilRoot>
  );
}

export default App;
