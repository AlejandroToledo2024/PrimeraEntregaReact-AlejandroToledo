import "./App.css";
import Navbar from "./componentes/Navbar.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./componentes/contacto.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./componentes/Cart.jsx";



function App() {
 

    return (
      <CartProvider>
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:id"
                element={<ItemListContainer />}
              ></Route>
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/carrito" element={<Cart />} />
           
            </Routes>
          </BrowserRouter>
        </>
      </CartProvider>
    );
  };


export default App;
