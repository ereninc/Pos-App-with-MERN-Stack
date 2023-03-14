import React, { useEffect, useState } from "react";
import CategoryItem from "../../../pages/home/components/categories/category-item";
import EditCategoryItem from "../../../pages/home/components/categories/category-item/edit-category-item";
import NewCategoryItem from "../../../pages/home/components/categories/category-item/new-category-item";

export default function CategoriesContainer({
  categories,
  setCategories,
  products,
  setFilteredProducts,
}) {
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    if (currentCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === currentCategory)
      );
    }
  }, [products, setFilteredProducts, currentCategory]);

  return (
    <ul className="categories-list flex gap-4 md:flex-col overflow-auto max-h-[calc(100vh-112px)] md:pb-6 min-w-[145px]">
      {categories.map((cat) => {
        return (
          <CategoryItem
            key={cat._id}
            cat={cat}
            onClick={() => setCurrentCategory(cat.title)}
            className={`${
              cat.title === currentCategory
                ? "bg-orange-600 hover:bg-orange-500 px-10 py-10 sm:min-w-[280px] sm:max-h-[60px] md:min-w-[140px] text-white cursor-pointer  transition:all duration-300 text-center flex justify-center items-center"
                : "bg-gray-600 hover:bg-gray-500 px-10 py-10 sm:min-w-[280px] sm:max-h-[60px] md:min-w-[140px] text-white cursor-pointer  transition:all duration-300 text-center flex justify-center items-center"
            }`}
          />
        );
      })}
      <NewCategoryItem categories={categories} setCategories={setCategories} />
      <EditCategoryItem categories={categories} setCategories={setCategories} />
    </ul>
  );
}
