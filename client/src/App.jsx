import React from "react";
import Categories from "./components/categories";
import Header from "./components/header";
import ProductList from "./components/products/product-list";

function App() {
  return (
    <div>
      <Header />
      <div className="home px-6 flex justify-between gap-6">
        <div className="categories flex-1">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <ProductList />
        </div>
        <div className="cart-total">Cart Total</div>
      </div>
    </div>
  );
}

export default App;
