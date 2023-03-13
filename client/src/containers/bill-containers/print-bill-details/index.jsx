import React from "react";

export default function BillDetails({ customer }) {
  // console.log(customer);
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="bill-to">
        <h3 className="text-xl font-bold text-slate-700">Bill To</h3>
        <p className="text-xs text-slate-500">{customer.customerName}</p>
        <p className="text-xs text-slate-500">1234 Main St</p>
        <p className="text-xs text-slate-500">Anytown, USA 12345</p>
      </div>

      <div className="bill-from">
        <h3 className="text-xl font-bold text-slate-700">Bill From</h3>
        <p className="text-xs text-slate-500">ex-Store</p>
        <p className="text-xs text-slate-500">1234 Main St</p>
        <p className="text-xs text-slate-500">Anytown, USA 12345</p>
      </div>

      <div className="number-date flex flex-col gap-4">
        <div className="bill-date">
          <h3 className="text-xl font-bold text-slate-700">Bill Date</h3>
          <p className="text-xs text-slate-500">
            {customer.createdAt.substring(0, 10)}
          </p>
        </div>

        <div className="bill-number">
          <h3 className="text-xl font-bold text-slate-700">Bill Number</h3>
          <p className="text-xs text-slate-500">123456789</p>
        </div>
      </div>

      <div className="terms-due flex flex-col gap-4">
        <div className="terms">
          <h3 className="text-xl font-bold text-slate-700">Terms</h3>
          <p className="text-xs text-slate-500">Due on Receipt</p>
        </div>

        <div className="due">
          <h3 className="text-xl font-bold text-slate-700">Due</h3>
          <p className="text-xs text-slate-500">
            {customer.createdAt.substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
}
