import React from "react";
import { EditOutlined } from "@ant-design/icons";

export default function EditCategoryItem() {
  return (
    <div className="bg-yellow-600 hover:bg-yellow-500 px-10 py-10 sm:min-w-[80px] sm:max-h-[60px] md:min-w-[140px] text-white cursor-pointer  transition:all duration-300 text-center flex justify-center items-center">
      <EditOutlined />
    </div>
  );
}
