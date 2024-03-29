const mongoose = require("mongoose");

const BillSchema = mongoose.Schema(
  {
    customerName: { type: String, require: true },
    customerPhone: { type: String, require: true },
    paymentType: { type: String, require: true },
    cartItems: { type: Array, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalPrice: { type: Number, require: true },
  },
  { timestamps: true }
);

const Bill = mongoose.model("bills", BillSchema);
module.exports = Bill;
