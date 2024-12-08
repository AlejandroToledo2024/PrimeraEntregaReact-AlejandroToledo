import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()
const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState(carritoInicial)
    
    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    const addItem = (productToAdd, cantidad) => {
        if (!isInCart(productToAdd.id)) {
          
          setCart((prev) => [...prev, { ...productToAdd, cantidad }]);
          console.log("Producto agregado:", cart);
        } else {
          
          setCart((prev) =>
            prev.map((item) =>
              item.id === productToAdd.id
                ? { ...item, cantidad: item.cantidad + cantidad }
                : item
            )
          );
          console.log("Cantidad actualizada:", cart);
        }
      };
    
    const removeItem = (id) =>{
        const cartUpdated = cart.filter( prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])    
    }
    
    const getTotal = () => {
      let accu = 0;
      cart.forEach((item) => {
        accu += item.quantity * item.price;
      });
      return accu;
    };

    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach( produc => {
            accu += produc.quantity
        })
        return accu
    };
    
    const totalQuantity = getTotalQuantity()

    useEffect (()=>{
    
      localStorage.setItem("cart" , JSON.stringify(cart))
    },[cart])
    
    const obj = {
      cart,
      isInCart,
      addItem,
      removeItem,
      clearCart,
      totalQuantity,
      getTotal
    }; 

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}