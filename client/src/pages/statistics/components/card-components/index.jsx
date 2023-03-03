import React from "react";

export default function StatisticCard({ title, img, value }) {
  return (
    <div className="card rounded-lg bg-slate-800 min-h-[96px]">
      <div className="card-content flex flex-row justify-center items-center mt-5">
        <div className="card-image flex-1 flex justify-center">
          <img src={img} alt="clients" className="w-12 h-12 object-cover " />
        </div>
        <div className="card-detail flex-1 flex flex-col justify-center items-left">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-white text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
}
