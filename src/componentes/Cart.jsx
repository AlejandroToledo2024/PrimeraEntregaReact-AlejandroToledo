import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"; // Importa useNavigate para la redirección
import BotonPago from "./complementos/BotonPago";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  
  

 
  const total = cart.reduce((acc, product) => acc + product.price * product.cantidad, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      
      {cart.length === 0 ? (
        <Link to={"/"}>
            <p>Tu carrito esta vacío</p>
        <button
           // Redirige a la ruta principal
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Ir a Tienda
        </button>
        </Link>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h2 className="text-lg font-medium">{product.nombre}</h2>
                <p className="text-gray-600">Precio: ${product.price}</p>
                <p className="text-gray-600">Cantidad: {product.cantidad}</p>
                <p className="text-gray-800 font-semibold">
                  Subtotal: ${product.price * product.cantidad}
                </p>
              </div>
              <button
                onClick={() => removeItem(product.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold">
              Total: ${total}
            </h3>
            <button
              onClick={clearCart}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Vaciar carrito
            </button>
            <div className="mt-6 flex justify-between">
        <Link to={"/"}>
        <button
           // Redirige a la ruta principal
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Seguir comprando
        </button>
        </Link>
        <Link to={"/checkout"}>
       <BotonPago/>
        </Link>
      </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
