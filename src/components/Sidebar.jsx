import React from "react";
import avatarIcon from "../images/Image.svg";
import downArrow from "../images/Vector.svg";
import homeIcon from "../images/Navbar Icon.png";
import orderIcon from "../images/Navbar Icon-1.png";
import productsIcon from "../images/Navbar Icon-2.png";
import deliveryIcon from "../images/Navbar Icon-3.png";
import marketingIcon from "../images/Navbar Icon-4.png";
import analayticsIcon from "../images/Navbar Icon-5.png";
import paymentsIcon from "../images/Navbar Icon-6.png";
import toolsIcons from "../images/Navbar Icon-7.png";
import discountsIcons from "../images/Navbar Icon-8.png";
import audienceIcons from "../images/Navbar Icon-9.png";
import appearanceIcons from "../images/Navbar Icon-10.png";
import pluginsIcons from "../images/Navbar Icon-11.png";
import walletIcon from "../images/wallet.png";

const obj = [
  {
    name: "Home",
    icon: homeIcon,
  },
  {
    name: "Order",
    icon: orderIcon,
  },
  {
    name: "Products",
    icon: productsIcon,
  },
  {
    name: "Delivery",
    icon: deliveryIcon,
  },
  {
    name: "Marketing",
    icon: marketingIcon,
  },
  {
    name: "Analytics",
    icon: analayticsIcon,
  },
  {
    name: "Payments",
    icon: paymentsIcon,
  },
  {
    name: "Tools",
    icon: toolsIcons,
  },
  {
    name: "Discounts",
    icon: discountsIcons,
  },
  {
    name: "Audience",
    icon: audienceIcons,
  },
  {
    name: "Appearance",
    icon: appearanceIcons,
  },
  {
    name: "Plugins",
    icon: pluginsIcons,
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#1E2640] w-[300px] text-white h-screen flex flex-col justify-start gap-2.5 p-2.5 relative overflow-auto">
      <div className="flex justify-between items-center gap-2.5">
        <div className="flex items-center gap-2">
          <img src={avatarIcon} alt="" className="w-10 h-10" />
          <div>
            <p>Nishyan</p>
            <p className="underline">Visit store</p>
          </div>
        </div>
        <img src={downArrow} alt="" className="w-5 h-5" />
      </div>
      <div className="mt-4 w-full">
        <ul className="flex flex-col justify-start items-start w-full">
          {obj?.map((val) => {
            return (
              <div className="flex justify-start p-2 items-center gap-2.5 m-2 hover:bg-[rgba(255,255,255,0.1)] hover:rounded-md w-full cursor-pointer">
                <img src={val?.icon} alt="" className="w-5 h-5" />
                <li>{val?.name}</li>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="bg-[#353C53] flex items-center justify-start gap-2.5 p-2 rounded-md mt-14">
        <div className="bg-[rgba(255,255,255,0.2)] w-10 h-10 flex justify-center items-center rounded-md">
          <img src={walletIcon} alt="" className="w-6 h-6" />
        </div>
        <div className="flex flex-col justify-center">
          <p>Available credits</p>
          <p>222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
