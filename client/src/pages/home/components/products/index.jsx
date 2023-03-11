import React from "react";
import EditProductsContainer from "../../../../containers/edit-product-containers";
import { ProductProvider } from "../../../../contexts/product-contexts";

export default function ProductsPage() {
  return (
    <ProductProvider>
      <EditProductsContainer />
    </ProductProvider>
  );
}
