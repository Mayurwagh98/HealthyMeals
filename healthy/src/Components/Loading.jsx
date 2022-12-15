import React from "react";
import { Space, Spin } from "antd";
const Loader = () => (
  <Space
    direction="horizontal"
    style={{
      width: "100%",
     
    }}
  >
    <Space>
      <Spin tip="Loading...." size="large">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
export { Loader };
