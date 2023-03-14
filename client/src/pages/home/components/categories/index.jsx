import React from "react";
import CategoriesContainer from "../../../../containers/home-containers/category-containers";

export default function CategoryList({
  categories,
  setCategories,
  products,
  setFilteredProducts,
}) {
  return (
    <CategoriesContainer
      categories={categories}
      setCategories={setCategories}
      products={products}
      setFilteredProducts={setFilteredProducts}
    />
  );
}
