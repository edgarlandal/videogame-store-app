import React from "react";
import { useState } from "react";

function QuantityPickerComponent({}) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex justify-center align-middle items-center">
      <button
        className=" w-8 bg-blue-600 text-white m-2 p-2 rounded-lg shadow-sm hover:bg-blue-800"
        onClick={() => {
          setQuantity(quantity - 1);
        }}
      >
        -
      </button>
      <input
        className="w-10 h-11 text-center rounded-lg border border-blue-300 justify-center"
        value={quantity}
        disabled
      />
      <button
        className=" w-8 bg-blue-600 text-white m-2 p-2 rounded-lg shadow-sm hover:bg-blue-800"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPickerComponent;
