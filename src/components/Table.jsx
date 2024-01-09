import React from "react";
import searchIcon from "../images/search.png";
import sortIcon from "../images/Sort.png";
import downloadicon from "../images/download.png";
import triangleIcon from "../images/Triangle-Icon.png";

const obj = [
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
  {
    orderId: "#281209",
    orderDats: "7 July, 2023",
    orderAmount: "&#8377;1,278.23",
    transactionAmount: "&#8377;22",
  },
];

const pageNum = ["1", "2", "3", "4", "5"];

const Table = () => {
  return (
    <div className="p-10 w-full border-2">
      <div className="bg-[rgba(255,255,255,0.8)] p-2.5 w-full flex flex-col gap-5">
        <p className="font-semibold text-2xl">Transaction | This Month</p>
        <div className="flex justify-between items-center">
          <div className="flex p-3 rounded-lg items-center gap-2.5 border border=[rgba(0,0,0,0.5)] w-[300px]">
            <img src={searchIcon} alt="" className="w-5 h-5" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search by order ID..."
              className="border-0 outline-none w-full"
            />
          </div>
          <section className="flex items-center gap-3">
            <div className="border border-[rgba(0,0,0,0.4)] flex items-center gap-2 p-2 w-[80px] rounded-md cursor-pointer">
              <p>Sort</p>
              <img src={sortIcon} alt="" className="w-5 h-5" />
            </div>
            <div className="border border-[rgba(0,0,0,0.4)] p-2 rounded-md cursor-pointer">
              <img src={downloadicon} alt="" className="w-5 h-5" />
            </div>
          </section>
        </div>
        <section className="w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-[rgba(86,86,86,0.1)] w-full rounded-sm">
                <th className=" text-left p-3 rounded-md">Order ID</th>
                <th className="flex justify-center items-center gap-2 text-center p-3 rounded-md">
                  Order date
                  <img src={triangleIcon} alt="" className="w-5 h-5" />
                </th>
                <th className=" text-right p-3 rounded-md">Order Amount</th>
                <th className=" text-right p-3 rounded-md">Transaction fees</th>
              </tr>
            </thead>
            <tbody>
              {obj?.map((val, index) => {
                const length = obj.length - 1 === index;

                return (
                  <tr
                    className={`p-2.5 ${
                      length ? "" : "border-b border-[rgba(0,0,0,0.2)]"
                    } `}
                  >
                    <td className="text-[#146EB4] p-2.5 text-left">
                      {val.orderId}
                    </td>
                    <td className=" text-center">{val.orderDats}</td>
                    <td className=" text-right">{val.orderAmount}</td>
                    <td className=" text-right">{val.transactionAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <section className="w-full flex justify-center items-center gap-5">
          <div className="flex items-center gap-2.5">&#11164; Previous</div>
          <div className="flex items-center gap-6">
            {pageNum?.map((val, index) => {
              return (
                <div
                  className={`border border-[rgba(0,0,0,0.1)] h-[40px] w-[40px] rounded-md flex items-center justify-center cursor-pointer ${
                    index === 0 && "bg-[#146EB4] text-white"
                  } `}
                >
                  {val}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2.5">Next &#11166;</div>
        </section>
      </div>
    </div>
  );
};

export default Table;
