import { Button, Input, Space, Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import DataTable from "../../../components/data-table";
import PrintBill from "../print-bill-modal";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

export default function BillPage() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [bills, setBills] = useState();
  const [customer, setCustomer] = useState();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

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
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      ...getColumnSearchProps("customerName"),
    },
    {
      title: "Customer Phone",
      dataIndex: "customerPhone",
      key: "customerPhone",
      ...getColumnSearchProps("customerPhone"),
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      ...getColumnSearchProps("paymentType"),
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
      defaultSortOrder: "descend",
      sorter: (a, b) => a.totalPrice - b.totalPrice,
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
    <>
      <h1 className="font-bold text-center text-5xl">Bills</h1>
      {bills ? (
        <div>
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
      ) : (
        <Spin size="large" className="absolute top-1/3 left-1/2" />
      )}
    </>
  );
}
