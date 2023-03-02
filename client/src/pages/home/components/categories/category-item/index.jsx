import React from "react";

export default function CategoryItem({ cat }) {
  return (
    <li
      key={cat.id}
      className="bg-gray-600 px-10 py-10 text-white cursor-pointer hover:bg-gray-500 transition:all duration-300 text-center"
    >
      {cat.name}
    </li>
  );
}
