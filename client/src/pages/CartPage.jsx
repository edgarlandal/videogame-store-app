import React from "react";

function CartPage() {
  return (
    <div className=" h-screen bg-slate-300 flex justify-center align-middle items-center">
      <div className=" rounded-lg bg-white m-2 p-2 shadow-lg w-100 flex justify-center items-">
        <img
          className="w-60 rounded-sm m-2 shadow-2xl"
          src="../../img/games/God_of_War.webp"
          alt="game"
        />
        <div className="p-2 m-2 flex col justify-center items-center">
          <h1 className=" font-semibold text-lg px-2 +">Title</h1>
          <p>Description</p>
        </div>
        <p>
          Quantity : <span>1</span>
        </p>
      </div>
    </div>
  );
}

export default CartPage;
