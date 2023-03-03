import React from "react";

export default function CartTotalDetails() {
  return (
    <div className="totals flex flex-col gap-2">
      <div className="flex justify-between">
        <span>Before Taxes</span>
        <span>$90.00</span>
      </div>
      <div className="flex justify-between">
        <span>Tax (%10)</span>
        <span className="text-red-600">+$9.00</span>
      </div>
      <div className="flex justify-between">
        <b>Total</b>
        <b>$99.00</b>
      </div>
    </div>
  );
}
