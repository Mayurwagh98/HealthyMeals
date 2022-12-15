import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Select, Space } from "antd";
const { Option } = Select;
import { Signup } from "./Signup";

const CommonDrawer = (props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <p onClick={showDrawer} icon={<PlusOutlined />}>
        Signup
      </p>
      <Drawer
        title="Create a new account"
        width={700}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Signup />
      </Drawer>
    </>
  );
};

export { CommonDrawer };
