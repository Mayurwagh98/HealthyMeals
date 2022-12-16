import React, { useState } from "react";
import { Card, Collapse, Button } from "antd";

let Order = () => {
  let OrderedDetails = JSON.parse(localStorage.getItem("CartDetails")) || [];
  let [displayOrder, setDisplayOrder] = useState([...OrderedDetails]);


  const { Meta } = Card;

  const { Panel } = Collapse;

  let handleQty = (val, item) => {
    if (val === "Add") {
      item.qty++;
    } else if (val === "Sub") {
      item.qty--;
    }

    localStorage.setItem("CartDetails", JSON.stringify([...OrderedDetails]));
    setDisplayOrder([...OrderedDetails]);
  };
  // ----------------------- Delete Item-------------------------------------------

  let handleDelete = (index) =>{

    OrderedDetails.splice(index, 1)

    localStorage.setItem("CartDetails", JSON.stringify(OrderedDetails))

    setDisplayOrder([...OrderedDetails])
  }
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
                <Meta style={{ textAlign: "center" }} />
              </Panel>
              <Button onClick={() => handleQty("Add", item)}>+</Button>
              <h3>{item.qty}</h3>
              <Button
                onClick={() => handleQty("Sub", item)}
                disabled={item.qty == 1}
              >
                -
              </Button>
              <Button type="primary" onClick={() => handleDelete(index)}>Delete</Button>
            </Card>
            
          );
        })}
      </div>
    </>
  );
};

export { Order };
