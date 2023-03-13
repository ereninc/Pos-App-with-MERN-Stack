import { Button, Form, Input, message, Modal, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../../redux/cartSlice";
import CartTotalDetails from "../cart-total-details";
import { useNavigate } from "react-router-dom";

export default function CheckoutModal(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleOk = () => {
    props.onOk();
  };

  const handleCancel = () => {
    props.onCancel();
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await fetch("http://localhost:5000/api/bills/add-bill", {
        method: "POST",
        body: JSON.stringify({
          // ...values,
          customerName: values.firstName,
          customerPhone: values.phoneNumber,
          paymentType: values.paymentType,
          cartItems: cart.cartItems,
          subTotal: cart.subTotal,
          tax: cart.taxes,
          totalPrice: (
            cart.subTotal +
            (cart.subTotal * cart.taxes) / 100
          ).toFixed(2),
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      console.log(res);
      if (res.ok) {
        message.success("Created");
        dispatch(clearCart());
        form.resetFields();
        handleOk();
        setTimeout(() => {
          navigate("/bills");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      message.error("There was an error..");
    }
  };

  return (
    <Modal
      title="Create Bill"
      open={props.showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
