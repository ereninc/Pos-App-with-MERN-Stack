import React from "react";
import { EditOutlined } from "@ant-design/icons";

export default function EditCategoryItem() {
  return (
    <div className="bg-yellow-600 px-10 py-10 min-w-[145px] flex items-center justify-center  text-white cursor-pointer hover:bg-yellow-500 transition:all duration-300 text-center text-2xl min-h-[120px] h-[120px] max-h-[120px]">
      <EditOutlined />
    </div>
  );
}
