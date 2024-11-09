import Item from "./item"

function ItemList ({products}) {
  return (
    <div className="flex flex-wrap w-full justify-evenly gap-x-6 bg-red-600 ">
      {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}



export default ItemList;
