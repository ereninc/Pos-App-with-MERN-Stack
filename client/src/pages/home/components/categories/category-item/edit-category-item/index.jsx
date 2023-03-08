import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useCategories } from "../../../../../../contexts/category-contexts";

export default function EditCategoryItem() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const categories = useCategories();

  const showModal = () => {
    setIsEditModalOpen(true);
  };

  const handleOk = () => {
    setIsEditModalOpen(false);
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-yellow-600 hover:bg-yellow-500 px-10 py-10 sm:min-w-[80px] sm:max-h-[60px] md:min-w-[140px] text-white cursor-pointer  transition:all duration-300 text-center flex justify-center items-center"
        onClick={showModal}
      >
        <EditOutlined />
      </div>
      <Modal
        title="Edit categories.."
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Table bordered />
        </Form>
      </Modal>
    </>
  );
}
