import React from "react";
import QuantityPickerComponent from "./QuantityPickerComponent";

function ProductComponent({ product }) {
  return (
    <div className="inline-block w-80 h-auto rounded-xl shadow-xl bg-white m-4 p-10">
      <img src={product.src} alt="..." className="w-34 rounded-md shadow-2xl" />
      <h1 className="py-2">{product.title}</h1>
      <label>
        Price :<span className=" font-bold"> {product.price}</span>
      </label>
      <QuantityPickerComponent />
    </div>
  );
}

export default ProductComponent;
