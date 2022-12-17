// import React, { useState } from "react";
// import { Card, Collapse, Button } from "antd";

// let Order = () => {
//   let OrderedDetails = JSON.parse(localStorage.getItem("CartDetails")) || [];
//   let [displayOrder, setDisplayOrder] = useState([...OrderedDetails]);

//   const { Meta } = Card;

//   const { Panel } = Collapse;

//   let handleQty = (val, item) => {
//     item = { ...item };
//     if (val === "Add") {
//       item.qty++;
//     } else if (val === "Sub") {
//       item.qty--;
//     }

//     localStorage.setItem("CartDetails", JSON.stringify([...OrderedDetails]));
//     setDisplayOrder([...OrderedDetails]);
//   };
//   // ----------------------- Delete Item-------------------------------------------

//   let handleDelete = (index) => {
//     OrderedDetails.splice(index, 1);

//     localStorage.setItem("CartDetails", JSON.stringify(OrderedDetails));

//     setDisplayOrder([...OrderedDetails]);
//   };

//   // let sum = 0
//   // for(let x of OrderedDetails){

//   //   sum += x.qty * x.price
//   // }

//   return (
//     <>
//       <h1>Total</h1>
//       {/* <h1>Hi</h1> */}
//       <div className="Order_div">
//         {OrderedDetails.map((item, index) => {
//           return (
//             <Card
//               hoverable
//               style={{
//                 width: 220,
//               }}
//               className="Order_divs"
//               key={index}
//               cover={<img alt="example" src={item.strMealThumb} />}
//             >
//               <Panel header={item.strMeal} key="0">
//                 <Meta
//                   // description={Math.round(item.idMeal / 100) + 1}
//                   style={{ textAlign: "center" }}
//                   />
//               </Panel>
//                   {/* <h3>{item.price}</h3> */}
//               <Button onClick={() => handleQty("Add", item)}>+</Button>
//               <h3>{item.qty}</h3>
//               <Button
//                 onClick={() => handleQty("Sub", item)}
//                 disabled={item.qty == 1}
//               >
//                 -
//               </Button>
//               <Button type="primary" onClick={() => handleDelete(index)}>
//                 Delete
//               </Button>
//             </Card>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export { Order };
import React, { useState } from "react";
import { Card, Collapse, Button } from "antd";

let Order = () => {
  let OrderedDetails = JSON.parse(localStorage.getItem("CartDetails")) || [];
  let [displayOrder, setDisplayOrder] = useState([...OrderedDetails]);

  const { Meta } = Card;

  const { Panel } = Collapse;
// -------------------------------- Quantity ----------------------------------
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

  let handleDelete = (index) => {
    OrderedDetails.splice(index, 1);

    localStorage.setItem("CartDetails", JSON.stringify(OrderedDetails));

    setDisplayOrder([...OrderedDetails]);
  };
  // --------------------------- Total ---------------------------------------------------
  let sum = 0;
  for (let x of OrderedDetails) {
    sum += x.qty * x.price;
  }

  return (
    <>
      <h1>Total:- {sum}</h1>
      <div className="Order_div">
        {OrderedDetails.map((item, index) => {
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
              <Collapse defaultActiveKey={["1"]}>
                <Panel header={item.strMeal} key="0">
                  <Meta
                    description={Math.round(item.idMeal / 100) + 1}
                    style={{ textAlign: "center" }}
                  />
                  <div style={{ display: "flex", marginTop: "5px" }}>
                    <Button onClick={() => handleQty("Add", item)}>+</Button>
                    <h3>{item.qty}</h3>
                    <Button
                      onClick={() => handleQty("Sub", item)}
                      disabled={item.qty == 1}
                    >
                      -
                    </Button>
                  </div>

                  <Button type="primary" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </Panel>
              </Collapse>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export { Order };
