import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";
import CartTotalDetails from "../cart-total-details";

export default function CheckoutModal(props) {
  const handleOk = () => {
    props.onOk();
  };

  const handleCancel = () => {
    props.onCancel();
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Modal
      title="Create Bill"
      open={props.showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Client Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input first name!",
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Client Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input number!",
            },
          ]}
        >
          <Input placeholder="+3304534135" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Cash or Credit"
          name="paymentType"
          rules={[
            {
              required: true,
              message: "Please select payment type!",
            },
          ]}
        >
          <Select placeholder="Payment type">
            <Select.Option value="cash">Cash</Select.Option>
            <Select.Option value="credit">Credit</Select.Option>
          </Select>
        </Form.Item>
        <div className="border p-4 rounded-lg">
          <CartTotalDetails />
        </div>
        <Button
          type="primary"
          size="large"
          className="w-full mt-4"
          htmlType="submit"
        >
          Create Bill
        </Button>
      </Form>
    </Modal>
  );
}
