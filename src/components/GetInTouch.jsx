import React from "react";
import { TitleContainer } from "./CustomComponents";

import Template from "./Template";

import { getInTouchData } from "../utils/data";
import Forms from "./Forms";

const GetInTouch = () => {
  return (
    <Template>
      <div className="w-full pt-[50px] flex justify-between items-start md:flex-row flex-col md:gap-0 gap-[20px]">
        <div className="flex flex-col items-start gap-[10px] md:w-1/2 w-full">
          <TitleContainer>Get In Touch</TitleContainer>
          <h1 className="font-montserratAlternate text-black font-[600] sm:text-[35px] text-[22px] text-start">
            Get Free... <br />
            Consultation Today
          </h1>
          <h1 className=" font-outfit text-[#000D44] text-lg tracking-wide ">
            Feel free to ask something we are here
          </h1>

          <div className="flex flex-col gap-[16px] mt-[10px]">
            {getInTouchData.map(({ Icon, data, title }, index) => (
              <div key={index} className="flex gap-[16px] items-start">
                <div className="w-[70px] h-[70px] shadow-2xl rounded-lg flex justify-center items-center">
                  <div className="w-[25px]">
                    <img src={Icon} alt="call" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-start mt-[10px]">
                  <h1 className=" font-outfit text-primary text-sm">{title}</h1>
                  <h1 className=" font-outfit text-primary ">{data}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Forms />
      </div>
    </Template>
  );
};

export default GetInTouch;
