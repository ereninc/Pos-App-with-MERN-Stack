import React, { useRef, useState } from "react";
import DataTable from "../../components/data-table";
import CartTotal from "./components/cart-total";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, message, Space } from "antd";
import { addProduct, clearCart, removeProduct } from "../../redux/cartSlice";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const dispatch = useDispatch();

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
      title: "Product Image",
      dataIndex: "img",
      key: "img",
      width: 4,
      render: (_, item) => {
        return (
          <img
            src={item.productImage}
            alt="Product"
            className="w-16 h-16 object-cover"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      ...getColumnSearchProps("productName"),
    },
    {
      title: "Category",
      dataIndex: "productCategory",
      key: "productCategory",
      ...getColumnSearchProps("productCategory"),
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      key: "productPrice",
      render: (_, item) => {
        return <p>${item.productPrice}</p>;
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.quantity - b.quantity,
      render: (_, item) => {
        return (
          <div className="cart-item__quantity flex-1" key={item._id}>
            <div className="cart-item__quantity--buttons flex flex-row justify-center  gap-1">
              <Button
                type="primary"
                size="small"
                icon={<PlusCircleOutlined />}
                className="cart-item__quantity--button flex justify-center items-center text-white"
                onClick={() => dispatch(addProduct(item))}
              ></Button>
              <div className="cart-item__quantity--number font-bold">
                {item.quantity}
              </div>
              <Button
                type="primary"
                size="small"
                icon={<MinusCircleOutlined />}
                className="cart-item__quantity--button flex justify-center items-center text-white"
                onClick={() => {
                  if (item.quantity === 1) {
                    if (window.confirm("Remove from cart?")) {
                      dispatch(removeProduct(item));
                    }
                  } else dispatch(removeProduct(item));
                }}
              ></Button>
            </div>
          </div>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        a.productPrice * a.quantity - b.productPrice * b.quantity,
      render: (_, item) => {
        return <p>${item.productPrice * item.quantity}</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <Button
            danger="true"
            type="text"
            onClick={() => {
              if (cart.cartItems.length > 0) {
                if (window.confirm("Are you sure?")) {
                  dispatch(clearCart());
                  message.success("Cart is empty.");
                }
              }
            }}
          >
            Remove
          </Button>
        );
      },
    },
  ];

  return (
    <div className="px-6">
      <DataTable dataSource={cart.cartItems} columns={columns} />
      <CartTotal />
    </div>
  );
}
