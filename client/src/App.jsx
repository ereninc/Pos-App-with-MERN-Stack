import React from "react";
import Categories from "./components/categories";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <div className="home px-6 flex justify-between gap-6">
        <div className="categories flex-1">
          <Categories />
        </div>
        <div className="products flex-[8]">Products</div>
        <div className="cart-total">Cart Total</div>
      </div>
    </div>
  );
}

export default App;
