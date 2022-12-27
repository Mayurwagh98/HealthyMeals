import React, { useState } from "react";
import { Button, Drawer, Input, Select, Space, Result } from "antd";
import { message, Progress } from "antd";

const { Option } = Select;
let Payment = () => {
  const [open, setOpen] = useState(false);
  let [flag, setFlag] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // -------------------- Payment Progress------------------------------------
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Payment In Progress..........",
      duration: 3,
      className: "payment_progress",
    });
  };
  let successAlert = () => {
    openMessage();

    setTimeout(() => {
      setFlag(true);
    }, 3000);
    // setLoading(false);
  };
  return (
    <>
      {/* <h1>Payment</h1> */}

      {contextHolder}
      <Button
        type="primary"
        onClick={showDrawer}
        style={{ display: "block", margin: "auto", marginTop:"10px" }}
      >
        Proceed To Pay
      </Button>
      <Drawer
        title="Payment Details"
        width={700}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button type="primary" onClick={successAlert}>
              Pay
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <form>
          {flag && (
            <Result
              status="success"
              title="Payment Successfull!"
              subTitle="Thanks for Ordering"
            />
          )}

          <label>
            Name
            <Input placeholder="Enter Name" />
            <br />
            <br />
            Email
            <Input placeholder="Enter Email" />
            <br />
            <br />
            Mobile
            <Input placeholder="Enter Mobile Number" />
            <br />
            <br />
            Address
            <Input placeholder="Enter Your Address" />
          </label>
        </form>
      </Drawer>
    </>
  );
};

export { Payment };
