import React from "react";
import DataTable from "../../components/data-table";
import CartTotal from "./components/cart-total";
import { useDispatch, useSelector } from "react-redux";
import { Button, message } from "antd";
import { addProduct, clearCart, removeProduct } from "../../redux/cartSlice";
// import { clearCart } from "../../../../redux/cartSlice";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    },
    {
      title: "Category",
      dataIndex: "productCategory",
      key: "productCategory",
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
