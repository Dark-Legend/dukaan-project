import React from "react";
import arrowIcon from "../images/arrow.png";

const Card = () => {
  return (
    <div className="flex items-center w-full mt-2 p-10 flex-col">
      <div className="bg-[rgba(255,255,255,0.6)] w-full p-2.5">
        <div className="flex justify-between items-center w-full">
          <p className="font-semibold text-2xl">Overview</p>
          <div className="bg-white flex items-center gap-2.5 p-2 rounded-lg border border-[rgba(0,0,0,0.3)] cursor-pointer">
            <p>Last Month</p>
            <img src={arrowIcon} alt="" className="w-5 h-5" />
          </div>
        </div>
        <section className="flex items-center gap-5 mt-6 mb-10 flex-col lg:flex-row">
          <div className="w-full bg-white flex flex-col items-start p-2.5 gap-5 h-[150px] shadow-md lg:w-1/2">
            <p className="text-2xl">Online Orders</p>
            <p className="font-bold text-3xl">231</p>
          </div>
          <div className="w-full bg-white flex flex-col items-start p-2.5 gap-5 h-[150px] shadow-md lg:w-1/2">
            <p className="text-2xl">Amount recevied</p>
            <p className="font-bold text-3xl">&#8377; 23,92,312.19</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
