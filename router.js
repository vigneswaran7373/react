import Home from "./componets/home";
import About from "./componets/about";
import React from "react";
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";

function Router() {
  return (
    <>
      <BrowserRouter>
        <ul>
             <li> <Link to ='/' >Home</Link></li>
             <li> <Link to ='/about' >about</Link></li> 
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;