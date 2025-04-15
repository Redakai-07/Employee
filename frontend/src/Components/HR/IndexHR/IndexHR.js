import React from "react";
import "./IndexHR.css";
import img from "../../../Resources/index-ceo-background.png";
import profile from "../../../Resources/profile.svg";
import { Dropdown, Space, Button } from "antd";
import { useNavigate } from 'react-router-dom'

const IndexHR = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: <a href="/update"><b>Update</b></a>,
      key: "0",
    },
    {
      label: <a href="/login"><b>Log out</b></a>,
      key: "1",
    },
  ];

  const registerAsst = () => {
    navigate('/hr-register')
  }
  const showAsstHR = () => {
    navigate('/showAsstHr');
  }

  const showEmp = () =>{
    navigate('/submit')
  }
  return (
    <>
      <div className="IndexHr-body">
        <div className="img">
          <img src={img} alt="What should I do text" />
        </div>
        <div className="profile">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <p onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={profile} alt="" />
              </Space>
            </p>
          </Dropdown>
        </div>
        <div className="index-hr-buttons">
          <Button onClick={registerAsst}><b>Register Asst HR</b></Button>
          <br />
          <Button onClick={showAsstHR}><b>Show Asst HR</b></Button>
          <br />
          <Button onClick={showEmp}><b>Submit Employees</b></Button>
        </div>
      </div>
    </>
  );
};

export default IndexHR;
