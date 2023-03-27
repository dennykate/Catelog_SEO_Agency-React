import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

import TestImg from "../assets/portfolio-5.jpg";

const CaseStudiesCard = () => {
  return (
    <div className="md:px-[30px] sm:px-[10px] px-[20px]">
      <motion.div
        initial={{ translateY: 50, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col rounded-lg shadow-lg"
      >
        <div className="h-auto cursor-pointer overflow-hidden rounded-tr-3xl rounded-tl-3xl bg-red-300">
          <img
            src={TestImg}
            alt="test-img"
            className="w-full hover:scale-105 transition-all duration-200 ease-in-out object"
          />
        </div>
        <div className="py-[25px] px-[20px] group flex flex-col items-start gap-[20px]">
          <div className="w-auto relative ">
            <h2 className=" font-montserratAlternate text-[22px] font-[600] text-black cursor-pointer ">
              Social SEO Marketing
            </h2>
            <div
              className="w-0 group-hover:w-full transition-all duration-200 ease-in-out h-[2px] bg-black 
         absolute bottom-[2px] left-0"
            ></div>
          </div>

          <div className="flex justify-between items-center w-full">
            <h1 className="text-[20px] font-outfit text-black text-opacity-60 font-normal">
              SEO, Marketing
            </h1>
            <BsArrowUpRight
              size={45}
              className="text-black text-opacity-60 group-hover:text-opacity-100 transition-all duration-200 ease-in-out"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudiesCard;
