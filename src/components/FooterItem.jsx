import React from "react";

const FooterItem = ({ text }) => {
  return (
    <div className="w-auto relative group">
      <h2
        className=" font-outfit text-[14px] font-[500] text-[#A6A8B3] cursor-pointer 
        group-hover:text-white transition-all duration-200 ease-in-out"
      >
        {text}
      </h2>
      <div
        className="w-0 group-hover:w-full transition-all duration-200 ease-in-out h-[1px] bg-white 
         absolute bottom-[2px] left-0"
      ></div>
    </div>
  );
};

export default FooterItem;
