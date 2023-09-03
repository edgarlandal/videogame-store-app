import React, { useEffect, useState } from "react";
import ProductComponent from "../components/ProductComponent";
import DataService from "../services/dataServices";

function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = new DataService();
    const aux = data.getProducts();
    setProducts(aux);
  }, []);

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center align-middle">
      <div className=" text-center">
        {products.map((product, i) => (
          <ProductComponent key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
