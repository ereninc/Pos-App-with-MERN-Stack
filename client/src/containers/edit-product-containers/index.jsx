import React from "react";
import { useProducts } from "../../contexts/product-contexts";
import EditProducts from "../../pages/home/components/products/edit-product-page";

export default function EditProductsContainer() {
  const products = useProducts();

  console.log(products);
  return (
    <div className="px-6">
      <h1 className="text-4xl text-center font-bold mb-4">Products</h1>
      <EditProducts />
    </div>
  );
}
