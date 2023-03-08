import React from "react";
import CategoriesContainer from "../../../../containers/home-containers/category-containers";
import { CategoryProvider } from "../../../../contexts/category-contexts";

export default function CategoryList() {
  return (
    <CategoryProvider>
      <CategoriesContainer />
    </CategoryProvider>
  );
}
