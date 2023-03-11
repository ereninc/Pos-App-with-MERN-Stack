import React, { useState } from "react";
import { Button, Form, Input, message, Table } from "antd";
import { useProducts } from "../../../../../contexts/product-contexts";

export default function EditProducts() {
  const [editingRow, setEditingRow] = useState({});
  const products = useProducts();

  const columns = [
    {
      title: "Products Title",
      dataIndex: "title",
      width: "8%",
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
    // try {
    //   fetch("http://localhost:5000/api/categories/update-category", {
    //     method: "PUT",
    //     body: JSON.stringify({ ...values, categoryId: editingRow._id }),
    //     headers: { "Content-type": "application/json; charset=UTF-8" },
    //   });
    //   message.success("Category name changed.");
    //   setEditingRow({});
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onDelete = (id) => {
    // try {
    //   fetch("http://localhost:5000/api/categories/delete-category", {
    //     method: "DELETE",
    //     body: JSON.stringify({ categoryId: id }),
    //     headers: { "Content-type": "application/json; charset=UTF-8" },
    //   });
    //   message.success("Category deleted.");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Table
          bordered="true"
          dataSource={products}
          columns={columns}
          rowKey={"_id"}
          scroll={{ x: 1000, y: 600 }}
        />
      </Form>
    </>
  );
}
