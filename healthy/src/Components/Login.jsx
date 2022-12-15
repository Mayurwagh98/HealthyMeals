import React, { useState, useHistory } from "react";
import { useNavigate } from "react-router-dom";

let Login = () => {
  let [loginformData, setloginformData] = useState({
    loginFname: "",
    loginEmail: "",
    loginPass: "",
  });
  let navigate = useNavigate()

  let signupData = JSON.parse(localStorage.getItem("Formdata"));
  // let loginDetails = JSON.parse(localStorage.getItem("LoginDetails")) || [];
  let loginDetails = JSON.parse(localStorage.getItem("LoginDetails"));

  // console.log(signupData)

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
      // loginDetails.push(loginformData);

      localStorage.setItem("LoginDetails", JSON.stringify(loginformData));

      // console.log(loginDetails);
      setloginformData({ loginFname: "", loginEmail: "", loginPass: "" });
      alert(`Login Successfull`);
      navigation.navigate('/order')
    } else {
      alert(`Register first`);
    }

    // setloginformData(<Navigate to="/product"/>)
  };

  return (
    <>
      <h1 style={{ marginTop: "200px" }}>Login page</h1>
      <div>
        <form onSubmit={loginFormSubmit}>
          <input
            type="text"
            placeholder="enter your name"
            name="loginFname"
            value={loginformData.loginFname}
            onChange={handleLoginform}
          />
          <input
            type="text"
            placeholder="enter your email"
            name="loginEmail"
            value={loginformData.loginEmail}
            onChange={handleLoginform}
          />
          <input
            type="password"
            placeholder="enter password"
            name="loginPass"
            value={loginformData.loginPass}
            onChange={handleLoginform}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export { Login };