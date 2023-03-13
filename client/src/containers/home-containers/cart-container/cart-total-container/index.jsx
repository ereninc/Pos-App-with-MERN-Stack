import { Button, message } from "antd";
import React from "react";
import { ShoppingCartOutlined, ClearOutlined } from "@ant-design/icons";
import CartItem from "../../../../pages/home/components/cart/cart-item";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartTotalContainer() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart h-full flex flex-col mr-6 md:mr-0 md:max-w-[300px] md:min-w-[300px]">
      <h2 className="bg-blue-600 px-6 py-4 text-white text-xl text-center tracking-wide">
        Products in cart
      </h2>
      <div className="cart-items px-6 py-4 flex flex-col gap-y-2 overflow-auto max-h-[calc(100vh-390px)] pb-6 min-w-[100px]">
        {cart.cartItems.length > 0 ? (
          cart.cartItems.map((item) => {
            return <CartItem item={item} key={item._id} />;
          })
        ) : (
          <p>Cart is empty.</p>
        )}
      </div>
      <div className="cart-total mt-auto">
        <div className="cart-total-item flex justify-between px-6 py-2 border-t">
          <b>Before Taxes</b>
          <span>${cart.subTotal.toFixed(2)}</span>
        </div>
        <div className="cart-total-item flex justify-between px-6 py-2 border-b">
          <b>Tax (%{cart.taxes})</b>
          <span className="text-red-600">
            +${(cart.subTotal * (cart.taxes / 100)).toFixed(2)}
          </span>
        </div>
        <div className="cart-total-item flex justify-between px-6 py-2 border-b">
          <b className="text-green-500">Total</b>
          <span>
            ${(cart.subTotal + cart.subTotal * (cart.taxes / 100)).toFixed(2)}
          </span>
        </div>
        <div className="buttons flex flex-col justify-center gap-2 m-4">
          <Button
            type="primary"
            size="large"
            className=" text-white w-full flex items-center justify-center"
            icon={<ShoppingCartOutlined />}
            onClick={() => {
              navigate("/cart");
            }}
          >
            Checkout
          </Button>

          <Button
            type="primary"
            danger
            size="large"
            className=" text-white w-full flex items-center justify-center"
            icon={<ClearOutlined />}
            onClick={() => {
              if (cart.cartItems.length > 0) {
                if (window.confirm("Are you sure?")) {
                  dispatch(clearCart());
                  message.success("Cart is empty.");
                }
              }
            }}
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
