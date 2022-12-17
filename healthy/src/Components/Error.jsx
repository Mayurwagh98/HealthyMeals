import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

let Error = () => {
  let navigate = useNavigate();
  let goBackHome = () => {navigate("/")};
  return (
    <>
      {/* <h1>error</h1> */}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={goBackHome}>
            Back Home
          </Button>
        }
      />
    </>
  );
};

export { Error };
