import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";

function NavBarComponent() {
  return (
    <nav className=" bg-slate-700 h-20 flex justify-around items-center shadow-2xl">
      <div className=" flex justify-center items-center text-white text-2xl align-middle">
        <div className=" flex justify-center items-center hover:text-slate-400">
          <FontAwesomeIcon className=" px-2" icon={faHome} />
          <Link className=" px-2 text-2xl" to={"/"}>Home</Link>
        </div>
      </div>
      <div className=" flex justify-between max-md:hidden items-center">
        <div>
          <input
            className=" rounded-lg p-2 mx-2 shadow-lg border-slate-500"
            placeholder="Seach"
          ></input>
        </div>
        <div>
          <button className=" bg-slate-500 p-2 rounded-lg border border-blue-100 text-white mx-2 hover:bg-slate-800 hover:shadow-xl">
            Search
          </button>
        </div>
        <div className="p-2">
          <Link
            className=" text-white hover:bg-slate-400 font-bold text-2xl rounded-lg p-2"
            to={"/cart"}
          >
            <FontAwesomeIcon icon={faCartShopping} className=" px-1"/>
          </Link>
        </div>
      </div>
    </nav>
  );
}
``;

export default NavBarComponent;
