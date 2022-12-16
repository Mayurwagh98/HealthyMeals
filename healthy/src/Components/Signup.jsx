import React, { useState } from "react";
import { CommonDrawer } from "./Drawer";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Space, message } from "antd";

let Signup = () => {
  let [formData, setformData] = useState({
    fname: "",
    email: "",
    pass: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Signup Successful!",
    });
  };
  const fail = () => {
    messageApi.open({
      type: "error",
      content: "User exists",
    });
  };

  let handleForm = (event) => {
    let { name, value } = event.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  let submitForm = (event) => {
    event.preventDefault();
    let localData = JSON.parse(localStorage.getItem("Formdata")) || [];
    let flag = false;
    for (let x of localData) {
      if (x.email === formData.email) {
        flag = true;
      }
    }
    if (flag) {
      // alert(`User already exists`);
      fail();
    } else {
      localData.push(formData);
      console.log(formData);
      localStorage.setItem("Formdata", JSON.stringify(localData));
      // alert(`Registration Successfull!`);
      success();

      setformData({ fname: "", email: "", pass: "" });
    }
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      {contextHolder}
      <div
        style={{
          //   border: "1px solid red",
          width: "50%",
          marginRight: "auto",
          marginLeft: "auto",
          display: "block",
        }}
      >
        <form onSubmit={submitForm}>
          <h1 style={{ textAlign: "center" }}>Singup</h1>
          <br />
          {/* <
           
            placeholder="Enter name"
            style={{padding:"20px", width:"60%", marginBottom:"10px" }}
          /> */}

          {/* <input
            type="text"
            value={formData.email}
            required={true}
            name="email"
            onChange={handleForm}
            placeholder="Enter email"
          /> */}
          <Input
            size="large"
            placeholder="Enter name"
            prefix={<UserOutlined />}
            type="text"
            value={formData.fname}
            required={true}
            name="fname"
            onChange={handleForm}
          />
          <br />
          <br />
          <Input
            type="text"
            value={formData.email}
            required={true}
            name="email"
            onChange={handleForm}
            placeholder="Enter email"
          />
          {/* <input
            type="password"
            value={formData.pass}
            required={true}
            name="pass"
            onChange={handleForm}
            placeholder="Enter password"
          /> */}
          <br />
          <br />
          <Space direction="horizontal">
            <Input.Password
              value={formData.pass}
              required={true}
              name="pass"
              onChange={handleForm}
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
            <Button
              style={{
                width: 80,
              }}
              onClick={() => setPasswordVisible((prevState) => !prevState)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </Button>
          </Space>
          <br />
          <br />

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export { Signup };
