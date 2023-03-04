import React from "react";
import { Carousel } from "antd";

export default function CarouselSection() {
  return (
    <div className="bg-blue-500 h-full">
      <Carousel dotPosition="bottom" className="h-screen">
        <div className="!flex flex-col justify-center items-center h-full mt-[25%]">
          <img
            src="images/carousel/statistic.svg"
            alt="statistics"
            className="w-[600px] h-[500px]"
          />
          <h3 className="text-4xl text-white text-center">Statistics</h3>
          <p className="text-slate-200 text-center text-xl">
            Your all statistics with charts
          </p>
        </div>

        <div className="!flex flex-col justify-center items-center h-full mt-[25%]">
          <img
            src="images/carousel/admin.svg"
            alt="admin panel"
            className="w-[600px] h-[500px]"
          />
          <h3 className="text-4xl text-white text-center">Admin Panel</h3>
          <p className="text-slate-200 text-center text-xl">
            Control everything..
          </p>
        </div>

        <div className="!flex flex-col justify-center items-center h-full mt-[25%]">
          <img
            src="images/carousel/responsive.svg"
            alt="responsive"
            className="w-[600px] h-[500px]"
          />
          <h3 className="text-4xl text-white text-center">Responsive Design</h3>
          <p className="text-slate-200 text-center text-xl">
            Use it in every device, in everywhere..
          </p>
        </div>

        <div className="!flex flex-col justify-center items-center h-full mt-[25%]">
          <img
            src="images/carousel/customer.svg"
            alt="customer"
            className="w-[600px] h-[500px]"
          />
          <h3 className="text-4xl text-white text-center">Customer</h3>
          <p className="text-slate-200 text-center text-xl">
            Find new customers, be in contact with them.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
