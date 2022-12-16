import React, { useState } from "react";
import { Card, Collapse, Button } from "antd";

let Order = () => {
  let OrderedDetails = JSON.parse(localStorage.getItem("OrderedItem"));
  const { Meta } = Card;

  const { Panel } = Collapse;
  return (
    <>
      {/* <h1>Hi</h1> */}
      <div className="Order_div">
        {OrderedDetails.map((item, index) => {
          return (
            <Card
              hoverable
              style={{
                width: 220,
              }}
              className="Order_divs"
              key={index}
              cover={<img alt="example" src={item.strMealThumb} />}
            >
              <Panel header={item.strMeal} key="0">
                <Meta
                  // title={item.strMeal}
                  //adding 1 because to display price from 1 to 1000 (as a whole number)
                  //   description={`₹ ${Math.floor(Math.random() * 1000) + 1}`}
                  style={{ textAlign: "center" }}
                />

              </Panel>
                <Button onClick={() => handleQty("Add")}>+</Button>
                <h3>0</h3>
                <Button onClick={() => handleQty("Sub")}>-</Button>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export { Order };
