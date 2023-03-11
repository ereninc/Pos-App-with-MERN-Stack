import React, { useState } from "react";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import { useProducts } from "../../../../../contexts/product-contexts";
import { useCategories } from "../../../../../contexts/category-contexts";

export default function EditProducts() {
  const [editingItem, setEditingItem] = useState({});
  const products = useProducts();
  const categories = useCategories();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();

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
      title: "Products Title",
      dataIndex: "title",
      width: "8%",
      render: (_, item) => {
        return <p>{item.title}</p>;
      },
    },
    {
      title: "Products Image",
      dataIndex: "img",
      width: "4%",
      render: (_, item) => {
        return (
          <>
            <img
              src={item.img}
              alt="Product"
              className="w-full h-20 object-cover"
            />
          </>
        );
      },
    },
    {
      title: "Products Price",
      dataIndex: "price",
      width: "8%",
      render: (_, item) => {
        return <p>${item.price}</p>;
      },
    },
    {
      title: "Products Category",
      dataIndex: "category",
      width: "8%",
      render: (_, item) => {
        return <p>{item.category}</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, item) => {
        return (
          <div className="flex justify-center gap-4 items-center">
            <Button
              type="text"
              primary={"true"}
              className="text-blue-500 hover:!text-blue-500"
              onClick={() => {
                setEditingItem(item);
                showModal();
              }}
            >
              Edit
            </Button>
            <Button
              type="text"
              danger={"true"}
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
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product updated.");
      setEditingItem({});
      handleOk();
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = (id) => {
    try {
      fetch("http://localhost:5000/api/products/delete-product", {
        method: "DELETE",
        body: JSON.stringify({ productId: id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product deleted.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table
        bordered="true"
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{ x: 1000, y: 600 }}
      />
      <Modal
        title="Edit product.."
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
          <Form.Item
            label="Product Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Enter product title!",
              },
            ]}
          >
            <Input placeholder="Enter product name." />
          </Form.Item>
          <Form.Item
            label="Product Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Enter product price!",
              },
            ]}
          >
            <Input placeholder="Enter product price." />
          </Form.Item>
          <Form.Item
            label="Product ImageURL"
            name="img"
            rules={[
              {
                required: true,
                message: "Enter product image!",
              },
            ]}
          >
            <Input placeholder="https://imageSource.com/image1" />
          </Form.Item>
          <Form.Item
            label="Product Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Select product category!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
