import React,{useState, useEffect} from "react";
import "./Employee.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Space } from "antd";
import { createEmp } from "../../API/Emp";

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const Employee = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const onFinish = async (values) =>{
    await createEmp(values.fName, values.lName, values.email, values.altEmail, values.mobile, values.altMobile, navigate);
    console.log(values)
  }
  return (
    <>
    <div className="emp-body">
      <nav className="navbar">
        <ul>
          <li onClick={home}>Home</li>
        </ul>
      </nav>
      <div className="emp">
        <div className="heading">
          <strong>
            Employee <br />
            Registration
          </strong>
        </div>
        <div className="form">
          <h1>Registration Details</h1>
            <br />
{/* Employee Form */}
          <Form
            form={form}
            onFinish={onFinish}
            name="register"
            layout="vertical"
            scrollToFirstError
          >

            {/* First Name */}
            <Form.Item className="input" name="fName" label="First Name" rules={[
                { required: true, message:"First Name is required !" },
                {pattern:/^[a-zA-Z]+$/, message:"Enter a Valid First Name !"}
                ]}>
              <Input />
            </Form.Item>
            {/* Last Name */}
            <Form.Item className="input" name="lName" label="Last Name" rules={[
                { required: true, message:"Last Name is required !" },
                {pattern:/^[a-zA-Z]+$/, message:"Enter a Valid Last Name !"}
                ]}>
              <Input />
            </Form.Item>
            {/* Email */}
            <Form.Item className="input" name="email" label="Email" rules={[
                { required: true, message:"Email is required !" },
                { type:"email", message:"Enter a valid Email !" }
                ]}>
              <Input />
            </Form.Item>
            {/* Alt Email */}
            <Form.Item className="input" name="altEmail" label="Alternate Email" rules={[
                { type:"email", message:"Enter a valid Alternate Email !" }
                ]}>
              <Input />
            </Form.Item>
            {/* Mobile */}
            <Form.Item className="input" name="mobile" label="Mobile No." rules={[
                { required: true, message:"Mobile No. is required !" },
                { pattern:/^[6-9]{1}[0-9]{9}$/ , message:"Emter a valid Mobile No."}
                ]}>
              <Input />
            </Form.Item>
            {/* Alt Mobile */}
            <Form.Item className="input" name="altMobile" label="Alternate Mobile No." rules={[
                { pattern:/^[6-9]{1}[0-9]{9}$/ , message:"Emter a valid Mobile No."}
                ]}>
              <Input />
            </Form.Item>
            {/* Buttons */}
            <Form.Item>
              <Space>
                <SubmitButton form={form}>Submit</SubmitButton>
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Employee;
