import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, message } from "antd";
import { Cor } from "./Slider";

let Home = () => {
  let [homeData, setHomeData] = useState([]);
  let [homeData2, setHomeData2] = useState([]);
  let [loading, setLoading] = useState(true);
  // ---------------------- Loading ---------------------------------
  const [messageApi, contextHolder] = message.useMessage();
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
  // --------------------------- Getting the Data-----------------------------------
  let getData = async () => {
    await axios
      .get(`https:/www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
      .then((res) => {
        homeData = res.data.meals;
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setHomeData(homeData);
        console.log(homeData);
      })
      .catch((e) => {
        console.log(e);
      });

    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        homeData2 = res.data.categories;
        setHomeData2(homeData2);
        console.log(homeData2);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const { Meta } = Card;

  return (
    <>
      {contextHolder}
      <div className="logo_div">
        <img
          src="https://user-images.githubusercontent.com/69896733/209149712-53ed17eb-c85b-4939-bf2e-07b66553a960.png"
          alt="image_logo"
          className="logo_img"
        />
      </div>
      <div>
        <Cor />
      </div>
      <h1 style={{ textAlign: "center" }}>Famous Meals</h1>
      {loading ? (
        // <Loader />
        openMessage()
      ) : (
        <div className="home_meals">
          {homeData.map((item, index) => {
            return (
              <Card
                hoverable
                style={{
                  width: 220,
                  margin: "auto",
                }}
                key={index}
                cover={<img alt="example" src={item.strMealThumb} />}
              >
                <Meta
                  title={item.strMeal}
                  // description="www.instagram.com"
                />
              </Card>
            );
          })}
        </div>
      )}

      <h1 style={{ textAlign: "center" }}>Today's Special</h1>
      {loading ? (
        // <Loader />
        openMessage()
      ) : (
        <div className="home_meals">
          {homeData2.map((item, index) => {
            return (
              // <div className="home_meals_divs">
              //     <img src={item.strMealThumb} alt="images" />
              //     <h3 style={{textAlign:"center"}}>{item.strMeal}</h3>
              // </div>
              <Card
                hoverable
                style={{
                  width: 220,
                  margin: "auto",
                }}
                key={index}
                cover={<img alt="example" src={item.strCategoryThumb} />}
              >
                <Meta
                  title={item.strCategory}
                  // description="www.instagram.com"
                />
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export { Home };
