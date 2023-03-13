import { Button } from "antd";
import React, { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";
import PrintBill from "../print-bill-modal";

export default function BillPage() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [bills, setBills] = useState([]);
  const [customer, setCustomer] = useState();

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

  // console.log(customer);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Customer Phone",
      dataIndex: "customerPhone",
      key: "customerPhone",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      render: (text) => {
        return <span>{text.toUpperCase()}</span>;
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return (
          <span>
            {text.substring(0, 10)} / {text.substring(11, 16)}
          </span>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => {
        return <span>${text}</span>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        //text and item
        return (
          <Button
            type="text"
            onClick={() => {
              showModal();
              setCustomer(record);
            }}
            className="text-blue-500"
          >
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
        <DataTable dataSource={bills} columns={columns} />
      </div>
      {isModalVisible && (
        <PrintBill
          isModalOpen={isModalVisible}
          onOk={showModal}
          onCancel={showModal}
          customer={customer}
        />
      )}
    </div>
  );
}
