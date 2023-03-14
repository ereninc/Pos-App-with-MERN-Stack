import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import BillPage from "./pages/bills/bill";
import CustomersPage from "./pages/customers/customer";
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
            <Route
              path="/home"
              element={
                <RouterControl>
                  <HomePage />
                </RouterControl>
              }
            />
            <Route
              path="/cart"
              element={
                <RouterControl>
                  <CartPage />
                </RouterControl>
              }
            />
            <Route
              path="/bills"
              element={
                <RouterControl>
                  <BillPage />
                </RouterControl>
              }
            />
            <Route
              path="/customers"
              element={
                <RouterControl>
                  <CustomersPage />
                </RouterControl>
              }
            />
            <Route
              path="/statistics"
              element={
                <RouterControl>
                  <StatisticsPage />
                </RouterControl>
              }
            />
            <Route
              path="/products"
              element={
                <RouterControl>
                  <ProductsPage />
                </RouterControl>
              }
            />
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export const RouterControl = ({ children }) => {
  if (localStorage.getItem("setUser")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
