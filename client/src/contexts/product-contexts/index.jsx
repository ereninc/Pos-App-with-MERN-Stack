import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products/get-all-products",
          {
            method: "GET",
          }
        );
        const data = await res.json();
        data &&
          setProducts(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [products]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
