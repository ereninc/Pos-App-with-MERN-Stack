import React from "react";
import StatisticCard from "../components/card-components";

export default function StatisticsPage() {
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
    </div>
  );
}
