import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "antd";
import { Collapse } from "antd";
import { Button } from "antd";
import ReactPaginate from "react-paginate";
// import { Loader } from "./Loading";
import { message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

let Meals = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [sortHtoL, setSortHtoL] = useState([]);
  let [sortLtoH, setSortLtoH] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  // --------------------------- Loading ---------------------------------------
  const key = "updatable";

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }, 1000);
  };

  let getMeals = async () => {
    await axios
      .get(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((res) => {
        data = res.data.meals;
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMeals();
  }, []);

  const { Meta } = Card;

  const { Panel } = Collapse;

  const onChange = (key) => {
    console.log(key);
  };

  //   ------------------ Pagination -----------------------------------------
  const perpage = 8;
  const [currPage, setCurrPage] = useState(0);
  let handleFetch = ({ selected: selectedPage }) => {
    setCurrPage(selectedPage);
  };
  const pageCount = Math.ceil(data.length / perpage);
  const offset = currPage * perpage; //offset = 0, 10, 20......
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Meal Added",
    });
  };
  const fail = () => {
    messageApi.open({
      type: "error",
      content: "You Need to Login First",
    });
  };

  let qty = 1;

  let handleOrder = (item) => {
    let user = JSON.parse(localStorage.getItem("LoginDetails"));

    let price = Math.round(item.idMeal / 100) + 1;
    if (user) {
      let Itemarr = JSON.parse(localStorage.getItem("CartDetails")) || [];
      item = { ...item, qty, price };
      console.log(item);
      Itemarr.push(item);
      localStorage.setItem("CartDetails", JSON.stringify(Itemarr));
      // setMsg(true)
      success();
    } else {
      // alert(`Login First`);
      // navigation.navigate("/login")
      fail();
    }
    // item = {...item, }
  };

  // -------------------- Sorting --------------------

  let handleSortLtH = () => {
    sortHtoL = data.sort((a, b) => {
      return a.idMeal - b.idMeal;
    });
    setSortLtoH([...sortLtoH]);
    console.log(sortHtoL);
  };
  let handleSortHtL = () => {
    sortLtoH = data.sort((a, b) => {
      return b.idMeal - a.idMeal;
    });
    setSortHtoL([...sortHtoL]);
    console.log(sortLtoH);
  };
  const items = [
    {
      key: "1",
      label: "Price High to Low",
      onClick: handleSortHtL,
    },
    {
      key: "2",
      label: "Price Low to High",
      onClick: handleSortLtH,
    },
  ];

  return (
    <>
      {contextHolder}
      <h1 style={{ textAlign: "center" }}>Meals</h1>
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
        }}
      >
        <Typography.Link
          style={{
            border: "2px solid red",
            padding: "5px",
            borderRadius: "5px",
            
          }}
        >
          <Space>
            Sort Based On Price
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
      {/* <Button onClick={() => handleSortHtL()}>Sort H to L</Button>
      <Button onClick={() => handleSortLtH()}>Sort L to H</Button> */}

      {loading ? (
        // <Loader />
        openMessage()
      ) : (
        <div className="meals_div">
          {data.slice(offset, offset + perpage).map((item, index) => {
            return (
              <Card
                hoverable
                style={{
                  width: 220,
                }}
                className="card"
                key={index}
                cover={<img alt="example" src={item.strMealThumb} />}
              >
                <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                  <Panel header={item.strMeal} key="0">
                    <Meta
                      // title={item.strMeal}
                      //adding 1 because to display price from 1 to 1000 (as a whole number)
                      //                       description={Math.floor(Math.random() * 1000) + 1}
                      description={`₹${Math.round(item.idMeal / 100) + 1}`}
                      style={{ textAlign: "center" }}
                    />

                    {/* <Button onClick={() => handleQty("Add", item)}>+</Button>
                    <h3>{qty}</h3>
                    <Button onClick={() => handleQty("Sub", item)}>-</Button>  */}

                    <Button
                      type="primary"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                        marginTop: "10px",
                      }}
                      onClick={() => handleOrder(item)}
                    >
                      Order
                    </Button>
                  </Panel>
                </Collapse>
              </Card>
            );
          })}
        </div>
      )}

      <ReactPaginate
        previousLabel={"<- Prev"}
        nextLabel={"Next ->"}
        pageCount={pageCount}
        onPageChange={handleFetch}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination_link_disabled"}
        activeClassName={"pagination_link_active"}
      />

      {/* <Pagination defaultCurrent={1} total={data.length} onShowSizeChange={}/> */}
    </>
  );
};

export { Meals };
