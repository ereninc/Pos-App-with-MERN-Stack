import React from "react";
import ProductListContainer from "../../../../../containers/home-containers/product-list-container";

export default function ProductList({
  products,
  setProducts,
  filteredProducts,
  searchKeyword,
}) {
  return (
    <ProductListContainer
      products={products}
      setProducts={setProducts}
      filteredProducts={filteredProducts}
      searchKeyword={searchKeyword}
    />
  );
}
