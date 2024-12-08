import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const {  addItem  } = useContext(CartContext);
  console.log(item);

   
    
    
    




  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            cantidad > 1 && setCantidad(cantidad - 1);
          }}
          className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-red-600 hover:shadow-md transition-all duration-300"
        >
          -
        </button>

        <p>{cantidad}</p>

        <button
          onClick={() => { 
             cantidad < item.stock && setCantidad(cantidad + 1);
          }}
          className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-red-600 hover:shadow-md transition-all duration-300"
        >
          +
        </button>
      </div>

      <button
        onClick={() => addItem(item, cantidad)}
        className="w-full max-w-xs px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-red-600 hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
