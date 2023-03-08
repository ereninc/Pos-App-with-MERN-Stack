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
      //   setTimeout(() => {
      //     window.location.reload(true);
      //   }, 1000);
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
        className="bg-green-600 hover:bg-green-500 px-10 py-10 sm:min-w-[80px] sm:max-h-[60px] md:min-w-[140px] text-white cursor-pointer  transition:all duration-300 text-center flex justify-center items-center"
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
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                handleOk();
              }}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
