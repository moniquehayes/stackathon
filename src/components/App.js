import React from "react";
import Navbar from "./NavBar";
import AppRoutes from "../store/AppRoutes";
import Cities from "./Home";


function App() {
  return (
    <div>
       <Navbar/>
      {/* <AppRoutes />  */}
      <Cities />
    </div>
  );
}

export default App;
