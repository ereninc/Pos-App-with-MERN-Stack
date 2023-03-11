import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import BillPage from "./pages/bills/bill";
import ClientsPage from "./pages/clients/client";
import StatisticsPage from "./pages/statistics/statistic";
import RegisterPage from "./pages/auth/register";
import AuthLayout from "./pages/auth/components/auth";
import LoginPage from "./pages/auth/login";
import ProductsPage from "./pages/home/components/products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route element={<AuthLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/bills" element={<BillPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
