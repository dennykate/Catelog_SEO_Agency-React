import React from "react";
import { Button, TitleContainer } from "./CustomComponents";

import Template from "./Template";
import User1 from "../assets/user-1.jpg";
import User2 from "../assets/user-2.jpg";
import User3 from "../assets/user-3.jpg";

const OurTeam = () => {
  return (
    <Template>
      <div className="lg:px-0 px-[20px]">
        <div className="w-full py-[50px] px-[32px] bg-[#F1F6FB] rounded-3xl translate-y-[150px]">
          <div className="w-full flex items-start lg:flex-row flex-col lg:gap-0 gap-[20px]">
            <div className="flex flex-col gap-[10px] items-start lg:w-1/2 w-full">
              <TitleContainer>Our Team</TitleContainer>
              <h1 className="font-montserratAlternate text-black font-[600] sm:text-[35px] text-[22px] text-start">
                We build our <br /> knowledge br on <br /> our experience
              </h1>
              <p className="my-[10px] text-base font-outfit text-[#7B818E]">
                Control the timing of when you collect or disburse payments with
                Dwolla as your payment service provider.Control the timing of
                when you collect or disburse payments with.
              </p>
              <Button
                height="sm:h-[70px] h-[50px]"
                px="sm:px-[32px] px-[24px] my-[10px]"
              >
                <h1 className="text-white font-semibold font-montserratAlternate tracking-wider sm:text-lg text-base">
                  Meet Our Team
                </h1>
              </Button>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col gap-[16px]">
              <div className="flex justify-center items-center gap-[16px]">
                <div className="w-[200px] rounded-lg overflow-hidden">
                  <img src={User1} alt="user-1" className="w-full" />
                </div>
                <div className="w-[200px] rounded-lg overflow-hidden">
                  <img src={User2} alt="user-2" className="w-full" />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-[200px] rounded-lg overflow-hidden">
                  <img src={User3} alt="user-3" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default OurTeam;
