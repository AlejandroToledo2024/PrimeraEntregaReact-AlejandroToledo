import { useState } from "react";

import "./App.css";
import Navbar from "./componentes/Navbar.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"} /> 
    </>
  );
}

export default App;
