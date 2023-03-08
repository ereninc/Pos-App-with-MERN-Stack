import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";

export default function NewCategoryItem() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("SUBMITTED", values);
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Category added successfully!");
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    setIsAddModalOpen(true);
  };

  const handleOk = () => {
    setIsAddModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-green-600 px-10 py-10 min-w-[145px] flex items-center justify-center  text-white cursor-pointer hover:bg-green-500 transition:all duration-300 text-center text-2xl min-h-[120px] h-[120px] max-h-[120px]"
        onClick={showModal}
      >
        <PlusOutlined />
      </div>
      <Modal
        title="Create new category.."
        open={isAddModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            label="Category Name"
            name="title"
            rules={[
              {
                required: true,
                message: "Enter category name!",
              },
            ]}
          >
            <Input placeholder="Enter category name." />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit" onClick={handleOk}>
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
