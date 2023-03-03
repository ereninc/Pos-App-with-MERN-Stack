import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import CartTotalDetails from "../cart-total-details";

export default function CheckoutModal(props) {
  const handleOk = () => {
    props.onOk();
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <Modal
      title="Create Bill"
      open={props.showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical">
        <Form.Item label="Client Name">
          <Form.Item
            name="firstName"
            noStyle
            rules={[
              {
                required: true,
                message: "Please input first name!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Client Phone Number">
          <Form.Item
            name="phoneNumber"
            noStyle
            rules={[
              {
                required: true,
                message: "Please input number!",
              },
            ]}
          >
            <Input placeholder="+3304534135" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Cash or Credit">
          <Form.Item
            name="paymentType"
            noStyle
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
        </Form.Item>
      </Form>
      <div className="border p-4 rounded-lg">
        <CartTotalDetails />
      </div>
      <Button
        type="primary"
        size="large"
        className="w-full mt-4"
        onClick={() => {
          // setIsModalOpen(true);
        }}
      >
        Create Bill
      </Button>
    </Modal>
  );
}
