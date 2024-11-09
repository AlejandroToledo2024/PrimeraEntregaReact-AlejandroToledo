import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findProductsId } from "../data/asyncMock";

function ItemDetailContainer() { 
  const [product, setProduct]= useState({})
  const {id} = useParams()
  useEffect(() => {
    findProductsId(id).then(data => {setProduct(data); console.log(data)})
   
  }, [])
  
  
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src= {product.image} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">
                {product?.description}
              </p>
              <p className="card-text">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailContainer;
