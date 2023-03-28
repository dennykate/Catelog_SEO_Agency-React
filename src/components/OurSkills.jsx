import React, { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import { IoStarSharp } from "react-icons/io5";

import { Button } from "./CustomComponents";
import Template from "./Template";
import FactShape from "../assets/fact-shape.png";
import { skillsData } from "../utils/data";

const OurSkills = () => {
  const [showCount, setShowCount] = useState(false);

  return (
    <div className="w-full relative">
      <Waypoint
        onEnter={() => setShowCount(true)}
        onLeave={() => setShowCount(false)}
      />

      <div className="absolute md:-top-[12px] sm:-top-[3px] top-[16px] left-0 w-full z-10">
        <img src={FactShape} alt="cta-shape" className="w-full" />
      </div>
      <Template>
        <div className="w-full py-[32px]">
          <div
            className="w-full min-h-[300px] workTogetherBgImg rounded-3xl flex md:justify-evenly justify-between items-center 
            md:px-0 sm:px-[32px] px-[20px]
           py-[32px] flex-wrap md:gap-0 gap-[32px]"
          >
            {showCount &&
              skillsData.map(({ quantity, title }, index) => (
                <div
                  key={index}
                  className="md:w-1/5 sm:w-2/5 w-full flex flex-col items-start gap-[10px]"
                >
                  <div className="w-[60px] h-[60px] rounded-full starBg flex justify-center items-center">
                    <IoStarSharp color="white" size={28} />
                  </div>
                  <h1 className=" font-montserratAlternate text-[50px] font-bold text-white">
                    <CountUp end={quantity} duration={5} />
                  </h1>
                  <h6 className=" font-montserratAlternate text-white text-lg font-semibold">
                    {title}
                  </h6>
                </div>
              ))}
          </div>
        </div>
      </Template>
    </div>
  );
};

export default OurSkills;
