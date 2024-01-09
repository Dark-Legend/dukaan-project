import React from "react";
import Header from "./Header";
import Card from "./Card";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex justify-start items-start flex-col w-full h-screen bg-[rgba(0,0,0,0.1)] overflow-y-auto">
      <Header />
      <Card />
      <Table />
    </div>
  );
};

export default Dashboard;
