import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Space, Table, Tag } from "antd";

export default function EditCategoryItem({ categories }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState({});

  const showModal = () => {
    setIsEditModalOpen(true);
  };

  const handleOk = () => {
    setIsEditModalOpen(false);
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
  };

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, item) => {
        return (
          <Form.Item className="mb-0" name="title">
            {item._id === editingRow._id ? (
              <Input defaultValue={item.title} />
            ) : (
              <p>{item.title}</p>
            )}
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, item) => {
        return (
          <div className="flex justify-center items-center">
            <Button
              type="text"
              primary
              className="text-blue-500 hover:!text-blue-500"
              onClick={() => {
                setEditingRow(item);
                console.log(editingRow);
              }}
            >
              Edit
            </Button>
            <Button type="text" htmlType="submit">
              Save
            </Button>
            <Button
              type="text"
              danger
              onClick={() => {
                onDelete(item._id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values, categoryId: editingRow._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Category name changed.");
      setEditingRow({});
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = (id) => {
    try {
      fetch("http://localhost:5000/api/categories/delete-category", {
        method: "DELETE",
        body: JSON.stringify({ categoryId: id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Category deleted.");
    } catch (error) {
      console.log(error);
    }
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
        <Form onFinish={onFinish}>
          <Table
            bordered
            dataSource={categories}
            columns={columns}
            rowKey={"_id"}
          />
        </Form>
      </Modal>
    </>
  );
}
