import { BrowserRouter,Routes,Route } from "react-router-dom";
import Error from "./pages/Error"
const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Error/>}/>
      {/*<Route path="/ErrorPage" element={<ErrorPage/>}/>*/}
      <Route path="/Error" element={<Error/>}/>
      {/*<Route path="/NoPage" element={<NoPage/>}/>
      <Route path="*" element={<NoPage/>}/>
      */}
    </Routes>
    </BrowserRouter>
   </div>
  )
};

export default App;