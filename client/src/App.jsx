import React from "react";
import Header from "./components/header";
import HomePage from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
