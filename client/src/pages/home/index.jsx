import React from "react";
import CartTotals from "./components/cart/cart-totals";
import CategoryList from "./components/categories";
import ProductList from "./components/products/product-list";

export default function HomePage() {
  return (
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
  );
}
