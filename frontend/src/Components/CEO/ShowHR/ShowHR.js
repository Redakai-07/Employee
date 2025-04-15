import React,{useState,useEffect} from "react";
import "./ShowHR.css";
import { Dropdown, Space, Table } from "antd";
import profile from "../../../Resources/profile.svg";
import { delHr, getHrs } from "../../../API/Ceo";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ShowHR = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getHr = async () => {
    try {
      const response = await getHrs();
        const hrData = response.map((hr, index) => ({
          key: index.toString(),
          id: hr.id,
          email: hr.email,
          action: "View Details",
        }));
        setData(hrData);
      
      }
    catch (error) {
      console.error("Error fetching HRs:", error);
    }
  };



  // Delete HR from database
  const handleDelete = async (id) => {
    
      const response=await delHr(id,navigate);
      if(response.success){
      alert("HR deleted successfully!");
      const updatedData = data.filter((hr) => hr.id !== id);
      setData(updatedData);
    }
      else
      {
      console.log("Error deleting HR");
      alert("Failed to delete HR.");
    }
  };

  // Fetch data on component load
  useEffect(() => {
    getHr();
  }, []);

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
    <div className="showHR-body">
      <div className="profile">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <p onClick={(e) => e.preventDefault()}>
            <Space>
              <img src={profile} alt="" />
            </Space>
          </p>
        </Dropdown>
      </div>
      <div className="heading">List of HRs</div>
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

export default ShowHR;
