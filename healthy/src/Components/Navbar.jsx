import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { CommonDrawer } from "./Drawer";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
import { Badge, Space } from "antd";

const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Pages",
      "g1",
      null,
      [getItem("Home", "/"), getItem("Meals", "/meals")],
      "group"
    ),
    // getItem(
    //   "Item 2",
    //   "g2",
    //   null,
    //   [getItem("Option 3", "3"), getItem("Option 4", "4")],
    //   "group"
    // ),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem(<CommonDrawer />, ""),
    getItem("Login", "/login"),
    getItem(<Badge size="middle">Cart</Badge>, "/order"),

    // getItem("Sort", "sub3", null, [
    //   getItem("High to Low", "7"),
    //   getItem("Low to High", "8"),
    // ]),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

let Navbar = () => {
  let navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", navigate(e.key));
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
        // position:"fixed",
        // zIndex: 30,
        // overflowY:"auto"
        // border:"1px solid red"
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export { Navbar };
