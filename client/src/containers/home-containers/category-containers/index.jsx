import React from "react";
import CategoryItem from "../../../pages/home/components/categories/category-item";

export default function CategoriesContainer() {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Category 1",
    },
    {
      id: 3,
      name: "Category 2",
    },
    {
      id: 4,
      name: "Category 3",
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
    <ul className="categories-list flex gap-4 flex-col overflow-auto max-h-[calc(100vh-112px)] pb-6 min-w-[100px]">
      {categories.map((cat) => {
        return <CategoryItem key={cat.id} cat={cat} />;
      })}
    </ul>
  );
}
