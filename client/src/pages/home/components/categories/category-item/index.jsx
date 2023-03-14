import React from "react";

export default function CategoryItem({ cat, onClick, className }) {
  return (
    <li onClick={onClick} key={cat._id} className={className}>
      <p>{cat.title}</p>
    </li>
  );
}
