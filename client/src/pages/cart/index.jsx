import { Button, Card, Table } from "antd";
import React from "react";

export default function CartPage() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div className="px-6">
      <Table dataSource={dataSource} columns={columns} bordered />
      <div className="cart-total flex justify-end">
        <Card
          // size="small"
          title="Cart Total"
          // extra={<a href="/">More</a>}
          // style={{ width: 300 }}
          className="w-64"
        >
          <div className="totals flex flex-col gap-2">
            <div className="flex justify-between">
              <span>Before Taxes</span>
              <span>$90.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (%10)</span>
              <span className="text-red-600">+$9.00</span>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>$99.00</b>
            </div>
          </div>
          <Button type="primary" size="large" className="w-full mt-4">
            Checkout
          </Button>
        </Card>
      </div>
    </div>
  );
}
