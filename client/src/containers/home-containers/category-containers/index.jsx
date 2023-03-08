import React from "react";
import CategoryItem from "../../../pages/home/components/categories/category-item";
import EditCategoryItem from "../../../pages/home/components/categories/category-item/edit-category-item";
import NewCategoryItem from "../../../pages/home/components/categories/category-item/new-category-item";

export default function CategoriesContainer() {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Tech",
    },
    {
      id: 3,
      name: "Home",
    },
    {
      id: 4,
      name: "Cosmetic",
    },
    {
      id: 5,
      name: "Category 4",
    },
    {
      id: 6,
      name: "Category 5",
    },
    {
      id: 7,
      name: "Category 6",
    },
    {
      id: 8,
      name: "Category 7",
    },
  ];

  return (
    <ul className="categories-list flex gap-4 md:flex-col overflow-auto max-h-[calc(100vh-112px)] md:pb-6 min-w-[145px]">
      {categories.map((cat) => {
        return <CategoryItem key={cat.id} cat={cat} />;
      })}
      <NewCategoryItem />
      <EditCategoryItem />
    </ul>
  );
}
