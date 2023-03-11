import { Button } from "antd";
import React from "react";
import { ShoppingCartOutlined, ClearOutlined } from "@ant-design/icons";
import CartItem from "../../../../pages/home/components/cart/cart-item";
import { useSelector } from "react-redux";

export default function CartTotalContainer() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="cart h-full flex flex-col mr-6 md:mr-0">
      <h2 className="bg-blue-600 px-6 py-4 text-white text-xl text-center tracking-wide">
        Products in cart
      </h2>
      <div className="cart-items px-6 py-4 flex flex-col gap-y-2 overflow-auto max-h-[calc(100vh-390px)] pb-6 min-w-[100px]">
        {cartItems.map((item) => {
          return <CartItem item={item} key={item._id} />;
        })}
      </div>
      <div className="cart-total mt-auto">
        <div className="cart-total-item flex justify-between px-6 py-2 border-t">
          <b>Before Taxes</b>
          <span>$90.00</span>
        </div>
        <div className="cart-total-item flex justify-between px-6 py-2 border-b">
          <b>Tax (%10)</b>
          <span className="text-red-600">+$9.00</span>
        </div>
        <div className="cart-total-item flex justify-between px-6 py-2 border-b">
          <b className="text-green-500">Total</b>
          <span>$99.00</span>
        </div>
        <div className="buttons flex flex-col justify-center gap-2 m-4">
          <Button
            type="primary"
            size="large"
            className=" text-white w-full flex items-center justify-center"
            icon={<ShoppingCartOutlined />}
          >
            Checkout
          </Button>

          <Button
            type="primary"
            danger
            size="large"
            className=" text-white w-full flex items-center justify-center"
            icon={<ClearOutlined />}
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
