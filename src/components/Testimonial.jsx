import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { testimonialData } from "../utils/data";

import CarouselContainer from "./CarouselContainer";
import { TitleContainer } from "./CustomComponents";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="w-full testimonialBgImg">
      <div className="2xl:max-w-[1440px] max-w-full py-[70px] pb-[120px] mx-auto">
        <div className="w-full flex justify-center items-center gap-[10px] py-[32px] flex-col">
          <TitleContainer colorfulBg>Testimonial</TitleContainer>
          <h1 className="font-montserratAlternate text-white font-[600] sm:text-[35px] text-[22px] text-center">
            Our Recent Complete <br />
            Case Studies
          </h1>
          <CarouselContainer
            PrevButton={<PrevButton />}
            NextButton={<NextButton />}
          >
            {testimonialData.map((data, index) => (
              <TestimonialCard key={index} {...data} />
            ))}
          </CarouselContainer>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const PrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] flex justify-center items-center text-white carouselBg rounded-full text-opacity-70
    hover:text-opacity-100 absolute -bottom-[100px] lg:left-[43%] sm:left-[35%] left-[30%]"
  >
    <BsArrowLeft size={24} />
  </button>
);
const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] flex justify-center items-center text-white carouselBg rounded-full text-opacity-70
hover:text-opacity-100 absolute -bottom-[100px] lg:right-[43%] sm:right-[35%] right-[30%]"
  >
    <BsArrowRight size={24} />
  </button>
);
