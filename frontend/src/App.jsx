import {Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import SignUP from "./components/SignUp";
import Home from "./components/Home";
import OPDQueue from "./components/OpdQueue";
import Help from "./components/Help";
import HospitalAppointment from "./components/Appointment";

function App() {
  return <>
 
 {/*<Help></Help>*/}

 {/*<Home></Home>*/}
  {/*<OPDQueue></OPDQueue>*/}
  <HospitalAppointment></HospitalAppointment>
  <Routes>
    {/*<Route path="/" element={<Login/>}/>*/}
    {/*<Route path="/SignUp" element={<SignUP/>}/>*/}
   

   
  </Routes>
  </>;
}

export default App;
