import React, { useEffect, useState } from "react";
import ProductItem from "../../../pages/home/components/products/product-item";
import EditProductItem from "../../../pages/home/components/products/product-item/edit-product-item";
import NewProductItem from "../../../pages/home/components/products/product-item/new-product-item";

export default function ProductListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products/get-all-products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="product-wrapper grid gap-4 grid-cols-card overflow-auto max-h-[calc(100vh-112px)] pb-6">
      {products.map((pd) => {
        return (
          <ProductItem
            key={pd._id}
            _id={pd._id}
            productName={pd.title}
            productPrice={pd.price}
            productImage={pd.img}
          />
        );
      })}
      <NewProductItem products={products} setProducts={setProducts} />
      <EditProductItem products={products} setProducts={setProducts} />
    </div>
  );
}
