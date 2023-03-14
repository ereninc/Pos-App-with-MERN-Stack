import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarouselSection from "../components/carousel";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/api/auth/register",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (res.ok) {
        message.success("Registered successfully!");
        setIsLoading(true);
        setTimeout(() => {
          navigate("/login");
          setIsLoading(false);
        }, 2000);
      }
    } catch (error) {
      message.error("Something went wrong!");
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-slate-400">
      <div className="flex flex-row justify-between h-full">
        <div className="sm:max-w-full md:max-w-[500px] bg-slate-100 flex flex-1  flex-col h-full justify-center px-20 min-w-[500px]">
          <h1 className="text-center text-5xl font-bold mb-6">Logo</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Password didnt match"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your e-mail address!",
                },
              ]}
            >
              <Input placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="w-full"
                width="100%"
                loading={isLoading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="login-text-area flex justify-end gap-2">
            <span>You have an account?</span>
            <Link to="/login" className="text-blue-500 font-bold">
              Login now
            </Link>
          </div>
        </div>
        <div className="bg-blue-500 flex-1 md:flex hidden xl:w-2/3 min-w-[800px] h-full">
          <div className="w-full h-full">
            <CarouselSection />
          </div>
        </div>
      </div>
    </div>
  );
}
