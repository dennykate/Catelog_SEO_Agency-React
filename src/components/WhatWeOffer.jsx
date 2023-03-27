import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { whatWeOfferData } from "../utils/data";
import CarouselContainer from "./CarouselContainer";
import { AllServicesButton, TitleContainer } from "./CustomComponents";
import OfferCard from "./OfferCard";
import Template from "./Template";

const WhatWeOffer = () => {
  return (
    <div className=" py-[50px] 2xl:max-w-[1440px] max-w-full mx-auto">
      <div className="w-full flex justify-center items-center gap-[8px] py-[32px] flex-col">
        <TitleContainer>What We Offer</TitleContainer>
        <h1 className="font-montserratAlternate text-black font-[600] sm:text-[35px] text-[22px] text-center">
          What we offer for your <br />
          business
        </h1>
      </div>

      <CarouselContainer
        NextButton={<NextButton />}
        PrevButton={<PrevButton />}
      >
        {whatWeOfferData.map((data, index) => (
          <OfferCard key={index} {...data} />
        ))}
      </CarouselContainer>

      <div className="my-[20px] w-full flex justify-center items-center">
        <AllServicesButton />
      </div>
    </div>
  );
};

export default WhatWeOffer;

const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[70px] h-[70px] rounded-full bg-white
      shadow-md flex justify-center items-center text-black text-opacity-30 absolute md:left-[26px] left-[5px] md:top-[50%] top-[30%] 
      z-[10] hover:text-opacity-100"
  >
    <BsArrowLeft size={26} />
  </button>
);

const PrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[70px] h-[70px] rounded-full bg-white
  shadow-md flex justify-center items-center text-black text-opacity-30 absolute md:right-[26px] right-[5px] md:top-[50%] top-[30%] 
  z-[10] hover:text-opacity-100"
  >
    <BsArrowRight size={26} />
  </button>
);
