import React from "react";

export default function CartTotalContainer() {
  return (
    <div className="cart h-full flex flex-col">
      <h2 className="bg-orange-600 px-6 py-4 text-white text-xl text-center tracking-wide">
        Products in cart
      </h2>
      <div className="cart-items">
        <div className="cart-item">Item</div>
      </div>
      <div className="cart-total mt-auto">
        <div className="cart-total-item flex justify-between px-6 py-2 border-t">
          <b>Before taxes</b>
          <span>$90.00</span>
        </div>
        <div className="cart-total-item flex justify-between px-6 py-2 border-b">
          <b>Tax</b>
          <span>$9.00</span>
        </div>
        <div className="cart-total-item flex justify-between px-6 py-2">
          <b>Total</b>
          <span>$99.00</span>
        </div>
      </div>
    </div>
  );
}
