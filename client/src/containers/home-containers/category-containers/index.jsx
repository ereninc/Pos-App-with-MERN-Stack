import React, { useEffect, useState } from "react";
import CategoryItem from "../../../pages/home/components/categories/category-item";
import EditCategoryItem from "../../../pages/home/components/categories/category-item/edit-category-item";
import NewCategoryItem from "../../../pages/home/components/categories/category-item/new-category-item";
// import { useCategories } from "../../../contexts/category-contexts";

export default function CategoriesContainer() {
  // const categories = useCategories();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/categories/get-all-categories",
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

  return (
    <ul className="categories-list flex gap-4 md:flex-col overflow-auto max-h-[calc(100vh-112px)] md:pb-6 min-w-[145px]">
      {categories.map((cat) => {
        return <CategoryItem key={cat._id} cat={cat} />;
      })}
      <NewCategoryItem categories={categories} setCategories={setCategories} />
      <EditCategoryItem categories={categories} setCategories={setCategories} />
    </ul>
  );
}
