import React, { useEffect, useState } from "react";
import StatisticCard from "../components/card-components";
import { Area } from "@ant-design/charts";
import { Pie } from "@ant-design/plots";
import { Spin } from "antd";

export default function StatisticsPage() {
  const [data, setData] = useState();
  const [products, setProducts] = useState();

  const user = JSON.parse(localStorage.getItem("setUser") !== null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/products/get-all-products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [products]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("http://localhost:5000/api/bills/get-all-bills")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const basicAreaChartConfig = {
    data,
    xField: "customerName",
    yField: "subTotal",
    xAxis: {
      range: [0, 1],
    },
  };

  const circleChartConfig = {
    appendPadding: 10,
    data: data,
    angleField: "subTotal",
    colorField: "customerName",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Total\nValue",
      },
    },
  };

  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.totalPrice + total, 0);
    return amount.toFixed(2);
  };

  return (
    <div>
      <h1 className="font-bold text-center text-5xl">Statistics</h1>
      {data && products ? (
        <div>
          <div className="p-6 main">
            <div className="welcome">
              <h2>
                Welcome,{" "}
                <span className="font-bold text-green-600 text-xl">
                  {user.username}
                </span>
              </h2>
            </div>
            <div className="statistic-cards grid md:grid-cols-4 mt-8 sm:grid-cols-2 gap-6 w-full">
              <StatisticCard
                title={"Total Clients"}
                img={"images/statistics-cards/clients.webp"}
                value={data?.length}
              />

              <StatisticCard
                title={"Total Income"}
                img={"images/statistics-cards/income.png"}
                value={`${totalAmount()}$`}
              />

              <StatisticCard
                title={"Total Sells"}
                img={"images/statistics-cards/saleCard.png"}
                value={data.length > 0 ? data.length : 0}
              />

              <StatisticCard
                title={"Total Products"}
                img={"images/statistics-cards/product.webp"}
                value={products?.length}
              />
            </div>
          </div>
          <div className="charts flex justify-between gap-2 p-6 lg:flex-row pb-24 flex-col items-center">
            <div className="area-chart lg:w-1/2 lg:h-full h-72 flex-1">
              <Area {...basicAreaChartConfig} />
            </div>
            <div className="circle-chart lg:w-1/2 lg:h-full h-72 flex-1">
              <Pie {...circleChartConfig} />
            </div>
          </div>
        </div>
      ) : (
        <Spin size="large" className="absolute top-1/3 left-1/2" />
      )}
    </div>
  );
}
