import { Table } from "antd";
import React from "react";

export default function DataTable({ dataSource, columns }) {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      bordered
      scroll={{
        x: 960,
        // y: 200,
      }}
    />
  );
}
