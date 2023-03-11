import React from "react";
import EditProductsContainer from "../../../../containers/edit-product-containers";
import { CategoryProvider } from "../../../../contexts/category-contexts";
import { ProductProvider } from "../../../../contexts/product-contexts";

export default function ProductsPage() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <EditProductsContainer />
      </ProductProvider>
    </CategoryProvider>
  );
}
