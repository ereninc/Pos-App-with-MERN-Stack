import React from "react";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function EditProductItem() {
  const navigate = useNavigate();

  return (
    <div
      className="product-item border-2 hover:shadow-lg cursor-pointer transition-all duration-300 select-none flex items-center justify-center text-4xl text-white bg-yellow-400 hover:bg-yellow-300 hover:text-slate-400 h-[188px]"
      onClick={() => {
        navigate("/products");
      }}
    >
      <EditOutlined />
    </div>
  );
}
