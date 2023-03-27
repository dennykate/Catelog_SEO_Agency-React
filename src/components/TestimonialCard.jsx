import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ Image, name, text }) => {
  return (
    <div className="md:px-[20px] sm:px-[10px] px-[20px]">
      <div className="py-[40px] px-[50px] carouselCardBg rounded-lg flex flex-col gap-[50px] items-center">
        <div className="pb-[30px] border-b-[1px] border-white w-full flex justify-center">
          <img src={Image} alt="testimonial-logo" className="h-[45px]" />
        </div>
        <p className="font-outfit sm:text-[17px] text-[15px] text-white text-center tracking-[0.03rem] text-opacity-90">
          {text}
        </p>

        <div className="w-full flex flex-col justify-center items-center gap-[12px]">
          <div className="flex items-center gap-[5px]">
            <FaStar color="#FFCC4A" size={17} />
            <FaStar color="#FFCC4A" size={17} />
            <FaStar color="#FFCC4A" size={17} />
            <FaStar color="#FFCC4A" size={17} />
            <FaStar color="#FFCC4A" size={17} />
          </div>
          <h1 className="text-xs font-semibold font-outfit text-white tracking-[0.04rem] uppercase">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
