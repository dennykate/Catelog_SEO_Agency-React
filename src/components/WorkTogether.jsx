import React from "react";

import { Button } from "./CustomComponents";
import Template from "./Template";
import CtaShapte from "../assets/cta-shape.png";

const WorkTogether = () => {
  return (
    <div className="w-full relative">
      <div className="absolute md:-bottom-[16px] sm:-bottom-[3px] bottom-[16px] left-0 w-full z-10">
        <img src={CtaShapte} alt="cta-shape" className="w-full" />
      </div>
      <Template>
        <div className="w-full py-[32px]">
          <div
            className="w-full min-h-[300px] workTogetherBgImg rounded-3xl flex justify-evenly md:flex-row flex-col md:items-center 
             items-start md:px-0 px-[20px] py-[20px]"
          >
            <div className="flex flex-col gap-[6px] items-start">
              <h1 className="sm:text-[46px] text-[30px] font-bold text-white font-montserratAlternate">
                Let’s work together
              </h1>
              <div className=" flex flex-col items-start">
                <p className="sm:text-[18px] text-[12px] tracking-wide text-white font-outfit font-medium">
                  Do you know what it takes to grow your bussiness online?
                </p>
                <p className="sm:text-[18px] text-[12px] tracking-wide text-white font-outfit font-medium">
                  Do you want to?
                </p>
              </div>
            </div>

            <Button height="sm:h-[70px] h-[50px]" px="sm:px-[32px] px-[24px]">
              <h1 className="text-white font-semibold font-outfit tracking-wider sm:text-lg text-base">
                Get Started Today
              </h1>
            </Button>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default WorkTogether;
