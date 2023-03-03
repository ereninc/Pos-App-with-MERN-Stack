import { Button, Input, Modal, Select } from "antd";
import React from "react";
import { Form } from "react-router-dom";
import CartTotalDetails from "../../cart/components/cart-total-details";

export default function PrintBill(props) {
  return (
    <Modal
      title="Print Bill"
      open={props.isModalOpen}
      footer={false}
      onCancel={props.onCancel}
      onOk={props.onOk}
    >
      Bill
    </Modal>
  );
}
