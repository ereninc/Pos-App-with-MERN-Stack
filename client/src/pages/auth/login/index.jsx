import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarouselSection from "../components/carousel";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const user = await res.json();

      if (res.status === 200) {
        localStorage.setItem(
          "setUser",
          JSON.stringify({
            username: user.username,
            email: user.email,
          })
        );
        message.success("Login successful!");
        setIsLoading(true);
        setTimeout(() => {
          navigate("/home");
          setIsLoading(false);
        }, 2000);
      } else if (res.status === 404) {
        message.error("User not found");
      } else if (res.status === 403) {
        message.error("Wrong password");
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
          <Form
            layout="vertical"
            initialValues={{ remember: false }}
            onFinish={onFinish}
          >
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
            {/* <Form.Item
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
            </Form.Item> */}
            <Form.Item name="remember" valuePropName="checked">
              <div className="flex flex-row justify-between">
                <Checkbox>Remember me</Checkbox>
                <Link className="text-blue-500 font-bold">
                  Forgot password?
                </Link>
              </div>
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
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="login-text-area flex justify-end gap-2">
            <span>Don't have an account?</span>
            <Link to="/register" className="text-blue-500 font-bold">
              Register now
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
