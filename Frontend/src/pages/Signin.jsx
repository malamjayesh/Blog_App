import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setErrorMessage("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signin",
        values
      );

      if (res.status === 200) {
        alert("Signin successful!");
        navigate("/blogadd");
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/login1.jpg')" }}
    >
      <div className="bg-indigo-900 bg-opacity-50 p-8 rounded-lg max-w-sm w-full">
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          Sign In
        </h2>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label={
              <span className="text-white">
                <MdEmail color="orange" size={20} />
              </span>
            }
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label={
              <span className="text-white">
                <RiLockPasswordFill color="orange" size={20} />
              </span>
            }
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          {errorMessage && (
            <Alert
              message={errorMessage}
              type="error"
              showIcon
              className="mb-4"
            />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
export default Signin;
