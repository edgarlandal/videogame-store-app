import React, { useState } from "react";
import DataContext from "./dataContext";

function GlobalContext(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const setNewsProducts = (prods) => {
    setProducts(prods);
  };

  const setNewsCart = (prods) => {
    setCart(prods);
  };

  return (
    <DataContext.Provider
      value={{
        products: products,
        setProducts: setNewsProducts,
        cart: cart,
        setCart: setNewsCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalContext;
