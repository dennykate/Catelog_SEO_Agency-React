import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { aboutUsData } from "../utils/data";

import { Button, TitleContainer } from "./CustomComponents";
import Template from "./Template";
import AboutThumb from "../assets/about-thumb.png";

const AboutUs = () => {
  return (
    <Template>
      <div className="w-full py-[32px]">
        <TitleContainer>About Us</TitleContainer>

        <div className="flex lg:flex-row flex-col items-start gap-[20px]">
          <div className="lg:w-1/2 w-full my-[16px]">
            <h1 className=" font-montserratAlternate text-primary font-[600] sm:text-[35px] text-[26px]">
              Increase your website’s traffic with the industry’s favorite SEO
              tool today.
            </h1>
            <p className="sm:my-[28px] my-[14px] font-outfit text-gray-400 tracking-wide text-base">
              Your business the flexibility to innovate and accelerate your time
              to market with an account-to-account solution.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[10px] gap-[5px] sm:mb-[28px] mb-[16px]">
              {aboutUsData.map((data, index) => (
                <div key={index} className="flex items-center gap-[10px]">
                  <AiOutlineCheck size={16} className="text-primary" />
                  <h1 className=" font-outfit text-primary text-base font-medium">
                    {data}
                  </h1>
                </div>
              ))}
            </div>
            <Button height="sm:h-[70px] h-[50px]" px="sm:px-[32px] px-[24px]">
              <h1 className="text-white font-semibold font-outfit tracking-wider sm:text-lg text-base">
                Get Started Today
              </h1>
            </Button>
          </div>

          <div className="lg:w-1/2 w-full">
            <img
              src={AboutThumb}
              alt="about-thumb-2"
              className="lg:w-11/12 md:w-2/3"
            />
          </div>
        </div>
      </div>
    </Template>
  );
};

export default AboutUs;
