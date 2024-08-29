import {Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import SignUP from "./components/SignUp";
import Home from "./components/Home";
import OPDQueue from "./components/OpdQueue";
function App() {
  return <>
  {/*<Login></Login>*/}
  {/*<SignUP></SignUP>*/}
 <Home></Home>
  {/*<OPDQueue></OPDQueue>*/}
  <Routes>
    {/*<Route path="/" element={<Login/>}/>*/}
    {/*<Route path="/SignUp" element={<SignUP/>}/>*/}
   

   
  </Routes>
  </>;
}

export default App;
