import { createContext } from "react";

const DataContext = createContext({
  products: [],
  setProducts: () => {},
  cart:[],
  setCart: () => {},
});

export default DataContext;