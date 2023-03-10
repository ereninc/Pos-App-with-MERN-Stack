import React from "react";
import ProductListContainer from "../../../../../containers/home-containers/product-list-container";
import { CategoryProvider } from "../../../../../contexts/category-contexts";

export default function ProductList() {
  return (
    <CategoryProvider>
      <ProductListContainer />
    </CategoryProvider>
  );
}
