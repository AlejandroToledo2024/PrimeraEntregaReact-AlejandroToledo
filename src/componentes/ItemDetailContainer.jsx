import {  useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findProductsId } from "../data/asyncMock";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";



function ItemDetailContainer() { 
  const {  agregarAlCarrito } = useContext (CartContext);
  const [product, setProduct]= useState({})
  const {id} = useParams()
  useEffect(() => {
    findProductsId(id).then(data => {setProduct(data);})
   
  }, [id])
  
  
  return (
    <>
      <div className="bg-white border border-blue-400 rounded-lg shadow-lg mb-6 overflow-hidden hover:shadow-xl transition duration-300">
  <div className="flex flex-col md:flex-row">
    
    <div className="md:w-1/3 bg-blue-100">
      <img
        src={product.image}
        alt={product.nombre}
        className="w-full h-full object-cover"
      />
    </div>

   
    <div className="md:w-2/3 p-6 flex flex-col justify-between">
      <h5 className="text-2xl font-bold text-blue-600 hover:text-red-500 transition duration-300">
        {product.nombre}
      </h5>
      <p className="text-gray-700 mt-2">
        {product?.description || "Sin descripción disponible."}
      </p>
      <p className="text-sm font-semibold text-gray-600 mt-4">
        <span className="text-red-600">STOCK:</span> {product.stock}
      </p>

      
      <div className="mt-6">
        <ItemCount 
        item = {product}
        agregarAlCarrito={agregarAlCarrito}/>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default ItemDetailContainer;
