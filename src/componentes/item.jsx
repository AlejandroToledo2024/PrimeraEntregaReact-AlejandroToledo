import { Link } from "react-router-dom";

export default function Item({ product}) {
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
  <div className="max-w-[720px] mx-auto">
    <div className="relative flex flex-col text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-96 border-solid border-4 border-blue-700 hover:shadow-2xl transition duration-300">
      
     
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-72">
        <img
          src={product.image}
          alt="Imagen del producto"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-6">
       
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-blue-700">{product.nombre}</h3>
          <p className="text-lg font-semibold text-red-700">${product.price}</p>
        </div>

       
        <p className="text-sm text-gray-600 mb-4">
          {product?.description || "Sin descripción disponible."}
        </p>

        <p className="text-sm font-semibold text-gray-700">
          <span className="text-red-600">STOCK:</span> {product.stock}
        </p>
      </div>

      
      <div className="p-6 pt-0 flex flex-col gap-4">
        <Link
          to={`/item/${product.id}`}
          className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-800 transition duration-300"
        >
          Ver más
        </Link>
        
      </div>
    </div>
  </div>
</div>

    </>
  );
}
