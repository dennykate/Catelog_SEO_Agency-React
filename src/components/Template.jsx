import React from "react";

const Template = ({ children }) => {
  return (
    <div className="max-w-[1024px] mx-auto lg:px-0 sm:px-[20px] px-[10px] ">
      {children}
    </div>
  );
};

export default Template;
