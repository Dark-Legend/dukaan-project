import React from "react";
import questionIcon from "../images/Vector.png";
import searchIcon from "../images/search.png";
import menuIcon from "../images/Menu.png";
import menu1Icon from "../images/Menu-1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-2.5 px-5 py-2.5 w-full bg-white shadow-md sticky lg:flex-row">
      <div className="flex items-center gap-5">
        <p className="font-semibold">Payments</p>
        <p className="flex items-center gap-2">
          <img src={questionIcon} alt="" className="w-5 h-5" />
          How it works
        </p>
      </div>
      <div className="bg-[#F2F2F2] flex items-center gap-2 p-2.5 w-[50%] h-[50px] rounded-lg">
        <img src={searchIcon} alt="" className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="outline-none borde-0 h-[50px] w-[400px] bg-[#F2F2F2]"
        />
      </div>
      <div className="flex items-center gap-5">
        <img src={menuIcon} alt="" className="w-12  h-12 cursor-pointer" />
        <img src={menu1Icon} alt="" className="w-12  h-12 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
