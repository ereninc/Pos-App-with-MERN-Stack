import { Button, Card } from "antd";
import React, { useState } from "react";
import CartTotalDetails from "../cart-total-details";
import CheckoutModal from "../checkout-modal";

export default function CartTotal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart-total flex justify-end">
      <Card title="Cart Total" className="w-64">
        <CartTotalDetails />
        <Button
          type="primary"
          size="large"
          className="w-full mt-4"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Checkout
        </Button>
      </Card>
      <CheckoutModal
        showModal={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
}
