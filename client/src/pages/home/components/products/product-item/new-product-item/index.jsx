import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select } from "antd";
// import { useCategories } from "../../../../../../contexts/category-contexts";

export default function NewProductItem({ products, setProducts }) {
  // const categories = useCategories();
  const [categories, setCategories] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    try {
      fetch(process.env.REACT_APP_SERVER_URL + "/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product added successfully!");
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random() * 10 + 1,
          price: Number(values.price),
        },
      ]);
      form.resetFields();
      handleOk();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL +
            "/api/categories/get-all-categories",
          {
            method: "GET",
          }
        );
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

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
        className="product-item border-2 hover:shadow-lg cursor-pointer transition-all duration-300 select-none flex items-center justify-center text-4xl text-white bg-blue-400 hover:bg-blue-300 hover:text-slate-400 h-[188px]"
        onClick={showModal}
      >
        <PlusOutlined />
      </div>
      <Modal
        title="Add new product.."
        open={isAddModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
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
