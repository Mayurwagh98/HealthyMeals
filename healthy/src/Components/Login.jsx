import React, { useState, useHistory } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { message } from "antd";

let Login = () => {
  let [loginformData, setloginformData] = useState({
    loginFname: "",
    loginEmail: "",
    loginPass: "",
  });
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login Successfull!",
    });
  };
  const fail1 = () => {
    messageApi.open({
      type: "error",
      content: "User Already Logged In!",
    });
  };
  const fail2 = () => {
    messageApi.open({
      type: "error",
      content: "You Need To Signup First!",
    });
  };
  let navigate = useNavigate();

  let signupData = JSON.parse(localStorage.getItem("Formdata")) || [];
  let user = JSON.parse(localStorage.getItem("LoginDetails"));

  let handleLoginform = (event) => {
    let { name, value } = event.target;
    setloginformData({
      ...loginformData,
      [name]: value,
    });
  };
  let loginFormSubmit = (event) => {
    event.preventDefault();

    let flag = false;
    for (let x of signupData) {
      if (x.email === loginformData.loginEmail) {
        flag = true;
      }
    }
    if (flag) {
      if (user) {
        // alert(`User already logged`);
        fail1();
        setloginformData({ loginFname: "", loginEmail: "", loginPass: "" });
      } else {
        localStorage.setItem("LoginDetails", JSON.stringify(loginformData));

        setloginformData({ loginFname: "", loginEmail: "", loginPass: "" });
        // alert(`Login Successfull`);
        success();
        navigation.navigate("/meals");
      }
    } else {
      // alert(`Sigup first`);
      fail2();
      setloginformData({ loginFname: "", loginEmail: "", loginPass: "" });
    }
  };

  return (
    <>
      {contextHolder}
      <h1 className="login_heading">Login page</h1>
      <div className="Login_div">
        <form>
          <Input
            size="large"
            placeholder="Enter Name"
            prefix={<UserOutlined />}
            type="text"
            name="loginFname"
            value={loginformData.loginFname}
            onChange={handleLoginform}
          />
          <br />
          <br />
          <Input
            placeholder="Enter email"
            type="text"
            name="loginEmail"
            value={loginformData.loginEmail}
            onChange={handleLoginform}
          />
          <br />
          <br />

          <Space direction="horizontal">
            <Input.Password
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

          <Button type="primary" onClick={loginFormSubmit} className="login_btn">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export { Login };
