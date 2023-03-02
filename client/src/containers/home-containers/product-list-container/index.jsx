import React from "react";
import ProductItem from "../../../pages/home/components/products/product-item";

export default function ProductListContainer() {
  return (
    <div className="product-wrapper grid gap-4 grid-cols-card overflow-auto max-h-[calc(100vh-112px)] pb-6">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}
