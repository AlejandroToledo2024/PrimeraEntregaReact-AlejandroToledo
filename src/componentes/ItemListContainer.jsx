import { useEffect, useState } from "react";

import { getProducts } from "../data/asyncMock.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../data/asyncMock.js";

// eslint-disable-next-line react/prop-types

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  // console.log(id);
  useEffect(() => {
   if (id){ (getProductsByCategory({id}).then(data=> setProducts(data))); }
   else {(getProducts().then((data) => setProducts(data)))}
    
  }, [id]);
  
  return (
    <div className="w-full">
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
