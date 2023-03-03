import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import BillPage from "./pages/bills/bill";
import ClientsPage from "./pages/clients/client";
import StatisticsPage from "./pages/statistics/statistic";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/bills" element={<BillPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
