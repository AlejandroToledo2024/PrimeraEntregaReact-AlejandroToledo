import "./App.css";
import Navbar from "./componentes/Navbar.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer.jsx";
import'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
          
