import React from "react";
import { useSelector } from "react-redux";

export default function CartTotalDetails() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="totals flex flex-col gap-2">
      <div className="flex justify-between">
        <span>Before Taxes</span>
        <span>${cart.subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax (%{cart.taxes})</span>
        <span className="text-red-600">
          +${(cart.subTotal * (cart.taxes / 100)).toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between">
        <b>Total</b>
        <b>
          ${(cart.subTotal + cart.subTotal * (cart.taxes / 100)).toFixed(2)}
        </b>
      </div>
    </div>
  );
}
