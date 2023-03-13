import { Button } from "antd";
import React, { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import PrintBill from "../print-bill-modal";

export default function BillPage() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/bills/get-all-bills",
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setBills(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBills();
  }, []);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // const DATA = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];

  const COLS = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Customer Phone",
      dataIndex: "customerPhone",
      key: "customerName",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <Button type="primary" onClick={showModal}>
            Print Bill
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-center text-5xl">Bills</h1>
      <div className="p-6">
        <DataTable dataSource={bills} columns={COLS} />
      </div>
      {isModalVisible && (
        <PrintBill
          isModalOpen={isModalVisible}
          onOk={showModal}
          onCancel={showModal}
        />
      )}
    </div>
  );
}
