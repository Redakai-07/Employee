import React from "react";
import "./IndexAsstHR.css";
import img from "../../../Resources/index-ceo-background.png";
import profile from "../../../Resources/profile.svg";
import { Dropdown, Space, Button } from "antd";
import { useNavigate } from 'react-router-dom'

const IndexAsstHR = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: <a href="/login"><b>Log out</b></a>,
      key: "1",
    },
  ];

  const register = () => {
    navigate('/asst-register')
  }
  const showManager = () => {
    navigate('/show-manager');
  }
  const verify = () =>{
    navigate('/verify');
  }
  return (
    <>
      <div className="IndexAsst-body">
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
        <div className="index-asst-buttons">
          <Button onClick={register}><b>Register a Manager</b></Button>
          <br />
          <Button onClick={showManager}><b>Show Managers</b></Button>
          <br />
          <Button onClick={verify}><b>Verify Employees</b></Button>
        </div>
      </div>
    </>
  );
};

export default IndexAsstHR;
