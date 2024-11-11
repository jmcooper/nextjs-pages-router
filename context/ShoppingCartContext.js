import { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}