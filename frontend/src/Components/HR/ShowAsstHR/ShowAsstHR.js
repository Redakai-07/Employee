import React, { useState, useEffect, useCallback } from "react";
import "./ShowAsstHR.css";
import { Dropdown, Space, Table } from "antd";
import profile from "../../../Resources/profile.svg";
import { useNavigate } from "react-router-dom";
import { delAsstHr, getAsstHrs } from "../../../API/Hr";
import { DeleteOutlined } from "@ant-design/icons";

const ShowAsstHR = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getAsstHr = useCallback(async () => {
    try {
      const hr = localStorage.getItem("hrId");
      const response = await getAsstHrs(hr, navigate);
      const assthrData = response.map((assthr, index) => ({
        key: index.toString(),
        id: assthr.id,
        email: assthr.email,
        action: "View Details",
      }));
      setData(assthrData);
    } catch (error) {
      console.error("Error fetching HRs:", error);
    }
  }, [navigate]);

  // Fetch data on component load
  useEffect(() => {
    getAsstHr();
  }, [getAsstHr]);
  // Delete AsstHR from database
    const handleDelete = async (id) => {
        console.log(id);
        const response=await delAsstHr(id,navigate);
        if(response.success){
        alert("AsstHR deleted successfully!");
        const updatedData = data.filter((assthr) => assthr.id !== id);
        setData(updatedData);
      }
        else
        {
        console.log("Error deleting HR");
        alert("Failed to delete HR.");
      }
    };

  // Drop down values
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
 
  // table headings
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
          {/* Delete Icon with click event */}
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];
  return (
    <div className="showAsstHR-body">
      <div className="profile">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <p onClick={(e) => e.preventDefault()}>
            <Space>
              <img src={profile} alt="" />
            </Space>
          </p>
        </Dropdown>
      </div>
      <div className="heading">List of Assistant HRs</div>
      <div className="table">
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          size="middle"
        />
      </div>
    </div>
  );
};

export default ShowAsstHR;
