import React from "react";
import ProductItem from "../../../pages/home/components/products/product-item";
import EditProductItem from "../../../pages/home/components/products/product-item/edit-product-item";
import NewProductItem from "../../../pages/home/components/products/product-item/new-product-item";

export default function ProductListContainer({
  products,
  setProducts,
  filteredProducts,
}) {
  return (
    <div className="product-wrapper grid gap-4 grid-cols-card overflow-auto max-h-[calc(100vh-112px)] pb-6">
      {filteredProducts.map((pd) => {
        return (
          <ProductItem
            key={pd._id}
            _id={pd._id}
            productName={pd.title}
            productPrice={pd.price}
            productImage={pd.img}
            productCategory={pd.category}
          />
        );
      })}
      <NewProductItem products={products} setProducts={setProducts} />
      <EditProductItem products={products} setProducts={setProducts} />
    </div>
  );
}
