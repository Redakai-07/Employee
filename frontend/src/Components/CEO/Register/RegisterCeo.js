import React from "react";
import "./RegisterCeo.css";
import profile from "../../../Resources/profile.svg";
import { Button, Dropdown, Form, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { createHr } from "../../../API/Ceo";

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async(values) => {
    await createHr(values.email,values.password,navigate);
  };
  const items = [
    {
      label: (
        <a href="/update">
          <b>Update</b>
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="/login">
          <b>Log out</b>
        </a>
      ),
      key: "1",
    },
  ];
  return (
    <>
      <div className="registerCeo-body">
        <div className="profile">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <p onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={profile} alt="" />
              </Space>
            </p>
          </Dropdown>
        </div>
        <div className="heading">Register a HR</div>
        <div className="form">
          {/* HR Registration Form */}
          <Form
            form={form}
            onFinish={onFinish}
            name="register"
            layout="vertical"
            scrollToFirstError
          >
            {/* Email */}
            <Form.Item
              className="input"
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Email is required !" },
                { type: "email", message: "Enter a valid Email !" },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Password */}
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            {/* Confirm Password */}
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
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
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <br />
            {/* Register Submit Button */}
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
