import { useEffect, useState } from "react";
import { getDocs, query, collection, where } from "firebase/firestore";

import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

import { db } from "../data/service/firebase/config.js";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const collectionRef = id
      ? query(collection(db, "Productos"), where("categorias", "==", id))
      : collection(db, "Productos");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="w-full">
      <ItemList products={products} />
    </div>
  );
}
export default ItemListContainer;
