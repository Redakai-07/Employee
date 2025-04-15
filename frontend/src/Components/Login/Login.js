import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./Login.css";
import Dropdown from "antd/es/dropdown/dropdown";
import { asstHrLogin, ceoLogin, hrLogin, managerLogin } from "../../API/Login";

const Login = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const onFinish = async (values) => {
    console.log(values);
    switch(values.type){
      case "1":
                const ceo_response=await ceoLogin(values.email,values.password);
                if(ceo_response.success)
                  navigate('/ceo-login');
                else
                  alert("Wrong Credentials");
                break;
      case "2":
                const hr_response=await hrLogin(values.email,values.password);
                if(hr_response.success)
                  navigate('/hr-login');
                else
                  alert("Wrong Credentials");
                break;
      case "3":
                const asst_response=await asstHrLogin(values.email,values.password);
                if(asst_response.success)
                  navigate('/asst-login');
                else
                  alert("Wrong Credentials");
                break;
      
      case '4':
                const manager_response=await managerLogin(values.email,values.password);
                if(manager_response.success)
                  navigate('/manager-login');
                else
                  alert("Wrong Credentials");
                break;  
      default:  alert("Page Not found !");
    }
  };

  return (
    <>
      <div className="login-body">
        <nav className="navbar">
          <ul>
            <li onClick={home}>Home</li>
          </ul>
        </nav>
        <div className="login">
          <div className="heading">
            <strong> Login </strong>
          </div>
          <div className="login-form">
            {/* Login Form */}
            <Form name="login" style={{ maxWidth: 360 }} onFinish={onFinish}>
              {/* Email  */}
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  { type: "email", message: "Enter valid Email !" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Email" />
              </Form.Item>

              {/* Password */}
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {/* Login type */}
              <Form.Item
                name="type"
                rules={[
                  { required: true, message: "Please select your login type!" },
                ]}
              >
                <Select
                  suffix={<Dropdown />}
                  placeholder="Login Type"
                >
                  <Select.Option value="1"><b><i>CEO</i></b></Select.Option>
                  <Select.Option value="2"><b><i>HR</i></b></Select.Option>
                  <Select.Option value="3"><i><b>Asst.HR</b></i></Select.Option>
                  <Select.Option value="4"><i><b>Manager</b></i></Select.Option>
                </Select>
              </Form.Item>
              {/* Login Button */}
              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
