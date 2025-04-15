import React from "react";
import "./IndexCeo.css";
import img from "../../../Resources/index-ceo-background.png";
import profile from "../../../Resources/profile.svg";
import { Dropdown, Space, Button } from "antd";
import { useNavigate } from 'react-router-dom'

const Index = () => {
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

  const register = () => {
    navigate('/ceo-register')
  }
  const showHR = () => {
    navigate('/showHr');
  }
  return (
    <>
      <div className="IndexCeo-body">
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
        <div className="index-ceo-buttons">
          <Button onClick={register}><b>Register HR</b></Button>
          <br />
          <Button onClick={showHR}><b>Show HR</b></Button>
        </div>
      </div>
    </>
  );
};

export default Index;
