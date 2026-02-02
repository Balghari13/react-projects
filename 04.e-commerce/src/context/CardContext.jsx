import { createContext, useContext, useState } from "react";
import { initialProducts } from "../data/product";
import { useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const products = initialProducts;
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity:1 }];
      }
    });
  };

  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (!existingItem) return prevCart;
    

    if (removeAll || existingItem.quantity === 1) {
      return prevCart.filter((item) => item.id !== productId);
    } else {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    }
    });
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const cartTotal = useMemo(() =>
    cart.reduce((total, item) => total + item.price*item.quantity, 0),[cart]
  );

  // console.log('my cart = ', cart);
  

  return (
    <CartContext.Provider value={{ products, cart, addToCart,removeFromCart, clearCart,cartCount,cartTotal }} >{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
