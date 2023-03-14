import React, { useContext, useEffect, useState } from "react";
import CartTotals from "./components/cart/cart-totals";
import CategoryList from "./components/categories";
import ProductList from "./components/products/product-list";
import { Context } from "../../contexts/Context";
import { Spin } from "antd";

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  const { searchKeyword, setSearchKeyword } = useContext(Context);
  // console.log(searchKeyword);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL +
            "api/categories/get-all-categories",
          {
            method: "GET",
          }
        );
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "api/products/get-all-products"
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
    <>
      {products && categories ? (
        <div className="home px-6 flex md:flex-row flex-col justify-between gap-6">
          <div className="categories-wrapper flex-1">
            <CategoryList
              categories={categories}
              setCategories={setCategories}
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
          <div className="products-wrapper flex-[8]">
            <ProductList
              products={products}
              setProducts={setProducts}
              filteredProducts={filteredProducts}
              searchKeyword={searchKeyword}
            />
          </div>
          <div className="cart-wrapper min-w-[250px] -mr-6 -mt-6 border-l md:pb-0 pb-24">
            <CartTotals />
          </div>
        </div>
      ) : (
        <Spin size="large" className="absolute top-1/3 left-1/2" />
      )}
    </>
  );
}
