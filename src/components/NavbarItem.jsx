import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const NavbarItem = ({ title, data }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="h-full relative ">
      <div
        onMouseEnter={() => setShowDetail(true)}
        onMouseLeave={() => setShowDetail(false)}
        className="h-full items-center flex gap-[5px] cursor-pointer hover:bg-white hover:bg-opacity-10 
          px-[10px] transition-all duration-200 ease-in-out relative group"
      >
        <h1 className=" font-bold text-white font-outfit text-[16px] uppercase tracking-wide">
          {title}
        </h1>
        <BsChevronDown color="white" size={16} className=" translate-y-[2px]" />
        <div
          className="w-0 h-[1px] absolute bottom-0 left-0 bg-[#6EECE6] group-hover:w-full
             transition-all duration-200 ease-in-out"
        ></div>
      </div>
      <div className="absolute z-10">
        <div
          onMouseEnter={() => setShowDetail(true)}
          onMouseLeave={() => setShowDetail(false)}
          className={`min-w-[200px] bg-white ${
            showDetail ? "min-h-auto py-[12px]" : "min-h-0"
          } transition-all duration-200 ease-in-out px-[10px] flex flex-col gap-[12px]`}
        >
          {showDetail &&
            data?.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-black text-sm font-semibold font-outfit hover:text-secondary hover:translate-x-1
             transition-all duration-200 ease-in-out cursor-pointer"
              >
                {item}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarItem;
