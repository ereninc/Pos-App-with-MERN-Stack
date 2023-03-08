import React from "react";

export default function CategoryItem({ cat }) {
  return (
    <li
      key={cat._id}
      className="bg-gray-600 hover:bg-gray-500 px-10 py-10 sm:min-w-[280px] sm:max-h-[60px] md:min-w-[140px] text-white cursor-pointer  transition:all duration-300 text-center flex justify-center items-center"
    >
      <p>{cat.title}</p>
    </li>
  );
}
