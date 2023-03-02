import React from "react";
import CategoryList from "./pages/home/components/categories";
import Header from "./components/header";
import ProductList from "./pages/home/components/products/product-list";
import CartTotals from "./pages/home/components/cart/cart-totals";

function App() {
  return (
    <div>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-6">
        <div className="categories-wrapper flex-1">
          <CategoryList />
        </div>
        <div className="products-wrapper flex-[8]">
          <ProductList />
        </div>
        <div className="cart-wrapper min-w-[250px] -mr-6 -mt-6 border-l md:pb-0 pb-24">
          <CartTotals />
        </div>
      </div>
    </div>
  );
}

export default App;
