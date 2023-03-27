import React from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CaseStudiesCarouselContainer = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-[20px]">
      <Slider {...settings} className="my-[10px] relative ">
        {children}
      </Slider>
    </div>
  );
};

export default CaseStudiesCarouselContainer;

const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[70px] h-[70px] rounded-full bg-white
        shadow-md flex justify-center items-center text-black text-opacity-30 absolute md:left-[10px] left-[5px] 
        md:top-[50%] top-[30%] z-[10] hover:text-opacity-100"
  >
    <BsArrowLeft size={26} />
  </button>
);

const PrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[70px] h-[70px] rounded-full bg-white
    shadow-md flex justify-center items-center text-black text-opacity-30 absolute md:right-[10px] right-[5px] 
    md:top-[50%] top-[30%] z-[10] hover:text-opacity-100"
  >
    <BsArrowRight size={26} />
  </button>
);
