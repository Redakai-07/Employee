import React, { useState, useEffect, useCallback } from "react";
import "./Manager.css";
import { Dropdown, Space, Table,  Modal, Input, Form, Descriptions } from "antd";
import profile from "../../Resources/profile.svg";
import { useNavigate } from "react-router-dom";
import { getEmp, delEmp, editEmp } from "../../API/Manager";
import { employee } from "../../API/Emp";
import {DeleteFilled, FileFilled} from '@ant-design/icons'
import {EditFilled} from '@ant-design/icons'

const Manager = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [form] = Form.useForm();

  // Fetch Employees from API
  const fetchEmployees = useCallback(async () => {
    const response = await getEmp(navigate);
    if (response) {
      const employeeData = response.map((emp, index) => ({
        key: index.toString(),
        id: emp.id,
        name: `${emp.fName} ${emp.lName}`,
        email: emp.email,
        isVerified: emp.isVerified
      }));
      setData(employeeData);
    }
  },[navigate]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Handle Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      await delEmp(id, navigate);
      fetchEmployees();
    }
  };

  // Handle Edit Button
  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    console.log(employee.isVerified);
    console.log(employee)
    if(employee.isVerified){
      return alert("Employee is already Verified !!");
    }
    form.setFieldsValue({
      fName: employee.name.split(" ")[0], 
      lName: employee.name.split(" ")[1] || "", 
      email: employee.email,
      altEmail: employee.altEmail,
      mobile: employee.mobile,
      altMobile: employee.altMobile
    });
    setEditModalOpen(true);
  };

  // Handle Edit Submission
  const handleEditSubmit = async (values) => {
    if (currentEmployee) {
      const updatedData = { ...currentEmployee, ...values };
      const response = await editEmp(updatedData.id,updatedData.fName,updatedData.lName,updatedData.email,updatedData.altEmail,updatedData.mobile,updatedData.altMobile, navigate);
      if (response.success) {
        alert("Employee updated successfully!");
        setEditModalOpen(false);
        fetchEmployees();
      } else {
        alert("Failed to update employee.");
      }
    }
  };

  // Handle View (Fetch Employee Details)
  const handleView = async (id) => {
    const empData = await employee(id);
    if (empData) {
      setCurrentEmployee(empData);
      setViewModalOpen(true);
    }
  };

  // Table columns with buttons
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Space size="middle">
          <FileFilled onClick={() => handleView(record.id)}/> 
          <EditFilled onClick={() => handleEdit(record)}/>
           <DeleteFilled onClick={() => handleDelete(record.id)}/>
        </Space>
      ),
    },
  ];

  // Drop-down items
  const items = [
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
    <div className="verifyEmp-body">
      <div className="profile">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <p onClick={(e) => e.preventDefault()}>
            <Space>
              <img src={profile} alt="Profile" />
            </Space>
          </p>
        </Dropdown>
      </div>
      <div className="heading">List of Employees</div>
      <div className="table">
        <Table pagination={false} columns={columns} dataSource={data} size="middle" />
      </div>

      {/* Edit Employee Modal */}
      <Modal
        title="Edit Employee"
        open={editModalOpen}
        onCancel={() => setEditModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form className="editForm" form={form} layout="vertical" onFinish={handleEditSubmit}>
          <Form.Item name="fName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="lName" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ type: "email", message: "Enter valid email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="altEmail" label="Alternate Email" rules={[{ type: "email", message: "Enter valid email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile No" rules={[{ pattern: /^[6-9]\d{9}$/, message: "Enter valid Mobile Number" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="altMobile" label="Alternate Mobile No" rules={[{ pattern: /^[6-9]\d{9}$/, message: "Enter valid Mobile Number" }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* View Employee Modal */}
      <Modal
        title="Employee Details"
        open={viewModalOpen}
        onCancel={() => setViewModalOpen(false)}
        footer={null}
      >
        {currentEmployee && (
          <Descriptions bordered column={1}>
            <Descriptions.Item label="ID">{currentEmployee.id}</Descriptions.Item>
            <Descriptions.Item label="First Name">{currentEmployee.fName}</Descriptions.Item>
            <Descriptions.Item label="Last Name">{currentEmployee.lName}</Descriptions.Item>
            <Descriptions.Item label="Email">{currentEmployee.email}</Descriptions.Item>
            <Descriptions.Item label="Alt Email">{currentEmployee.altEmail}</Descriptions.Item>
            <Descriptions.Item label="Mobile">{currentEmployee.mobile}</Descriptions.Item>
            <Descriptions.Item label="Alt Mobile">{currentEmployee.altMobile}</Descriptions.Item>
            <Descriptions.Item label="Verified">{currentEmployee.isVerified ? "Yes" : "No"}</Descriptions.Item>
            <Descriptions.Item label="Submitted">{currentEmployee.isSubmitted ? "Yes" : "No"}</Descriptions.Item>
            <Descriptions.Item label="Role">{currentEmployee.role}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default Manager;
