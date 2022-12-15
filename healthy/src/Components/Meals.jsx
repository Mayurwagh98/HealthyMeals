import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "antd";
import { Collapse } from "antd";
import { Pagination, Button } from "antd";
import ReactPaginate from "react-paginate";
import { Loader } from "./Loading";

let Meals = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let getMeals = async () => {
    await axios
      .get(`https:/www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((res) => {
        data = res.data.meals;
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
  
  let handleOrder = () =>{
    console.log("hi")
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Meals</h1>
      {loading ? (
        <Loader />
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
                      description={`₹ ${Math.floor(Math.random() * 1000) + 1}`} //adding 1 because to display price from 1 to 1000 (as a whole number)
                      style={{ textAlign: "center" }}
                    />
                    <Button
                      type="primary"
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "block",
                        marginTop: "10px",
                      }}
                      onClick={handleOrder}
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
