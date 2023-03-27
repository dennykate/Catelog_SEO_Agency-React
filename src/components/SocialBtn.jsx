import React from "react";

const SocialBtn = ({ Icon }) => {
  return (
    <div
      className="w-[45px] h-[45px]  rounded-full flex justify-center items-center cursor-pointer
        socialBtnBg transition-all duration-200 ease-in-out"
    >
      <Icon color="white" size={16} />
    </div>
  );
};

export default SocialBtn;
