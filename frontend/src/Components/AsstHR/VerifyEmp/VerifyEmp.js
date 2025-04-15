import React, { useCallback, useEffect, useState } from "react";
import "./VerifyEmp.css";
import { Button, Dropdown, Modal, Space, Table } from "antd";
import profile from "../../../Resources/profile.svg";
import { useNavigate } from "react-router-dom";
import { getEmpV, verifyEmp } from "../../../API/AsstHr";
import { employee } from "../../../API/Emp";
import {CheckCircleOutlined, FileFilled} from '@ant-design/icons'

const VerifyEmp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [empDetails, setEmpDetails] = useState(null);



  // Fetch employees on component load
    const getEmps = useCallback(async () => {
      try {
        const response = await getEmpV(navigate);
        const empData = response.map((emp, index) => ({
          key: index.toString(),
          id: emp.id,
          name: emp.fName + " " + emp.lName,
        }));
        setData(empData);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }, [navigate]);
  
    useEffect(() => {
      getEmps();
    }, [getEmps]);
  

// Fetch employee details and show modal
  const handleView = async (id) => {
    try {
      const empData = await employee(id);
      setEmpDetails(empData);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching employee details:", error);
    }
  };

  // Submit employee and remove from table
    const handleVerify = async (id) => {
      try {
        const response = await verifyEmp(id,navigate);
        if (response.success) {
          alert("Employee verified successfully!");
          const updatedData = data.filter((emp) => emp.id !== id);
          setData(updatedData);
        } else {
          alert("Failed to Verify employee.");
        }
      } catch (error) {
        console.error("Error verifying employee:", error);
      }
    };

    

  // Close the modal
  const handleModalClose = () => {
    setModalVisible(false);
    setEmpDetails(null);
  };

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

  // table headings
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
      title: "View",
      dataIndex: "view",
      render: (_, record) => (
        <FileFilled onClick={() => handleView(record.id)}/> 
      ),
    },
    {
      title: "Verify",
      dataIndex: "verify",
      render: (_, record) => (
        <CheckCircleOutlined onClick={() => handleVerify(record.id)}/>
      ),
    },
  ];
  return (
    <div className="verifyEmp-body">
      <div className="profile">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <p onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={profile} alt="" />
              </Space>
            </p>
          </Dropdown>
        </div>
      <div className="heading">List of Employees</div>
      <div className="table">
        <Table pagination={false} columns={columns} dataSource={data} size="middle" />
      </div>
      {/* Modal to show employee details */}
      <Modal
        title="Employee Details"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        {empDetails ? (
          <div>
            <p>
              <b>ID:</b> {empDetails.id}
            </p>
            <p>
              <b>Name:</b> {empDetails.fName} {empDetails.lName}
            </p>
            <p>
              <b>Email:</b> {empDetails.email}
            </p>
            <p>
              <b>Alternate Email:</b> {empDetails.altEmail}
            </p>
            <p>
              <b>Mobile No:</b> {empDetails.mobile}
            </p>
            <p>
              <b>Alternate Mobile:</b> {empDetails.altMobile}
            </p>
          </div>
        ) : (
          <p>Loading details...</p>
        )}
      </Modal>
    </div>
  );
};

export default VerifyEmp;
