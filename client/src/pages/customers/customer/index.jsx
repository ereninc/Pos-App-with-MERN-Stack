import React, { useEffect, useState } from "react";
import DataTable from "../../../components/data-table";

export default function CustomersPage() {
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

  const COLS = [
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
      title: "Shopping Date",
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
  ];

  return (
    <div>
      <h1 className="font-bold text-center text-5xl">Customers</h1>
      <div className="p-6">
        <DataTable dataSource={bills} columns={COLS} />
      </div>
    </div>
  );
}
