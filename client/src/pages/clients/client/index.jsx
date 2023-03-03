import React from "react";
import DataTable from "../../../components/data-table";

export default function ClientsPage() {
  const DATA = [
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

  const COLS = [
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
    <div>
      <h1 className="font-bold text-center text-5xl">Clients</h1>
      <div className="p-6">
        <DataTable dataSource={DATA} columns={COLS} />
      </div>
    </div>
  );
}
