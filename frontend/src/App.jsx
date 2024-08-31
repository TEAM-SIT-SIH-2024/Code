import {Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import SignUP from "./components/SignUp";
import Home from "./components/Home";
import OPDQueue from "./components/OpdQueue";
import Help from "./components/Help";
import AdminLogin from "./components/AdminLogin";
import AdminSignUp from "./components/AdminSignUp";

function App() {
  return <>
  
 {/* <Help></Help> */}

 {/*<Home></Home>*/}
  {/*<OPDQueue></OPDQueue>*/}
  {/* {<SignUP></SignUP>} */}
  {/* <Login></Login> */}
 {/* <AdminLogin></AdminLogin>*/}
 <AdminSignUp></AdminSignUp>

  <Routes>
    {/* <Route path="/" element={<Login></Login>}/> */}
    {/* <Route path="/SignUp" element={<SignUP/>}/> */}
  </Routes>
  </>;
}


export default App;
