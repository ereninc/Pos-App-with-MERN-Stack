import React, { useEffect, useState } from "react";
import StatisticCard from "../components/card-components";
import { Area } from "@ant-design/charts";
import { Pie } from "@ant-design/plots";

export default function StatisticsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  const data2 = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];

  const config2 = {
    appendPadding: 10,
    data: data2,
    angleField: "value",
    colorField: "type",
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
        content: "AntV\nG2Plot",
      },
    },
  };

  return (
    <div>
      <h1 className="font-bold text-center text-5xl">Statistics</h1>
      <div className="p-6 main">
        <div className="welcome">
          <h2>
            Welcome,{" "}
            <span className="font-bold text-green-600 text-xl">admin</span>
          </h2>
        </div>
        <div className="statistic-cards grid md:grid-cols-4 mt-8 sm:grid-cols-2 gap-6 w-full">
          <StatisticCard
            title={"Total Clients"}
            img={
              "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
            }
            value={"100"}
          />

          <StatisticCard
            title={"Total Income"}
            img={"https://cdn-icons-png.flaticon.com/512/4599/4599850.png"}
            value={"$100"}
          />

          <StatisticCard
            title={"Total Sells"}
            img={"https://cdn-icons-png.flaticon.com/512/2361/2361914.png"}
            value={"1200"}
          />

          <StatisticCard
            title={"Total Products"}
            img={
              "https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png"
            }
            value={"800"}
          />
        </div>
      </div>
      <div className="charts flex justify-between gap-2 p-6 lg:flex-row pb-24 flex-col items-center">
        <div className="area-chart lg:w-1/2 lg:h-full h-72 flex-1">
          <Area {...config} />
        </div>
        <div className="circle-chart lg:w-1/2 lg:h-full h-72 flex-1">
          <Pie {...config2} />
        </div>
      </div>
    </div>
  );
}
