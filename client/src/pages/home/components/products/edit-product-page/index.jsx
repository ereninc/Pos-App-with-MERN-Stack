import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Modal, Select } from "antd";
import DataTable from "../../../../../components/data-table";

export default function EditProducts() {
  const [editingItem, setEditingItem] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "api/products/get-all-products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL +
            "api/categories/get-all-categories",
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
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

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
      key: "title",
      width: "8%",
      render: (_, item) => {
        return <p>{item.title}</p>;
      },
    },
    {
      title: "Products Image",
      dataIndex: "img",
      key: "img",
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
      key: "price",
      width: "8%",
      render: (_, item) => {
        return <p>${item.price}</p>;
      },
    },
    {
      title: "Products Category",
      dataIndex: "category",
      key: "category",
      width: "8%",
      render: (_, item) => {
        return <p>{item.category}</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
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
      fetch(process.env.REACT_APP_SERVER_URL + "api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Product updated.");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          }
          return item;
        })
      );
      setEditingItem({});
      handleOk();
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = (id) => {
    try {
      fetch(process.env.REACT_APP_SERVER_URL + "api/products/delete-product", {
        method: "DELETE",
        body: JSON.stringify({ productId: id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      setProducts(products.filter((item) => item._id !== id));
      message.success("Product deleted.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DataTable dataSource={products} columns={columns} />
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
