import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdAddIcCall } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        values
      );
      if (res.status === 201) {
        alert("Signup successful!");
        navigate("/signin");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/login1.jpg')" }}
    >
      <div className="bg-indigo-900 bg-opacity-50 p-8 rounded-lg max-w-sm w-full">
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <Form onFinish={handleSubmit} layout="horizontal" className="space-y-4">
          <Form.Item
            label={
              <span className="text-white text-lg">
                <FaUser color="orange" size={20} />
              </span>
            }
            name="name"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-white text-lg">
                <MdEmail color="orange" size={20} />
              </span>
            }
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="w-full p-3 rounded-md"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-white text-lg">
                <MdAddIcCall color="orange" size={20} />
              </span>
            }
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            ]}
          >
            <Input
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md"
            />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-white text-lg">
                <RiLockPasswordFill color="orange" size={20} />
              </span>
            }
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Enter your password"
              className="w-full p-3 rounded-md"
            />
          </Form.Item>
          {errorMessage && (
            <Alert message={errorMessage} type="error" showIcon />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-3 mt-4"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-400 hover:text-blue-500">
            Sign In
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
