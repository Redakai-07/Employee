import React, { useCallback, useEffect, useState } from "react";
import "./ShowManager.css";
import { Dropdown, Space, Table, message } from "antd";
import profile from "../../../Resources/profile.svg";
import { useNavigate } from "react-router-dom";
import { delManagerById, getManagers } from "../../../API/AsstHr";
import { DeleteOutlined } from "@ant-design/icons";

const ShowManager = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch Managers
  const getManager = useCallback(async () => {
    try {
      const response = await getManagers(navigate);
      const managerData = response.map((manager, index) => ({
        key: index.toString(),
        id: manager.id,
        email: manager.email,
      }));
      setData(managerData);
    } catch (error) {
      console.error("Error fetching Managers:", error);
      message.error("Failed to fetch Managers.");
    }
  }, [navigate]);

  // Delete Manager
  const handleDelete = async (id) => {
    const asstHrId = localStorage.getItem("asstHrId");

    if (!asstHrId) {
      message.error("Assistant HR ID is missing. Please log in again.");
      navigate("/login");
      return;
    }

    try {
      const response = await delManagerById(id, asstHrId, navigate);
      if (response.success) {
        message.success("Manager deleted successfully!");
        setData((prevData) => prevData.filter((manager) => manager.id !== id));
      } else {
        message.error("Failed to delete Manager.");
      }
    } catch (error) {
      console.error("Error deleting Manager:", error);
      message.error("Error occurred while deleting Manager.");
    }
  };

  // Fetch data on component load
  useEffect(() => {
    getManager();
  }, [getManager]);

  // Dropdown options
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

  // Table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size="middle">
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="showManager-body">
      <div className="profile">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <p onClick={(e) => e.preventDefault()}>
            <Space>
              <img src={profile} alt="Profile" />
            </Space>
          </p>
        </Dropdown>
      </div>
      <div className="heading">List of Managers</div>
      <div className="table">
        <Table pagination={false} columns={columns} dataSource={data} size="middle" />
      </div>
    </div>
  );
};

export default ShowManager;
