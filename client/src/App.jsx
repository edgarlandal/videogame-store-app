import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CatalogPage from "./pages/CatalogPage";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
