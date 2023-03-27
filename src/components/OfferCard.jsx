import React from "react";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

const OfferCard = ({ Image, title, description }) => {
  return (
    <div className="md:px-[30px] sm:px-[10px] px-[20px]">
      <motion.div
        initial={{ translateY: 50, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex items-center flex-col sm:gap-[20px] gap-[10px] py-[30px] lg:px-[30px] px-[10px] border-[1px] border-black
      rounded-lg border-opacity-5 hover:bg-white hover:shadow-md transition-all duration-200 ease-in-out group
      "
      >
        <div className="h-[150px]">
          <img src={Image} alt="services" className="w-full" />
        </div>
        <h1
          className=" font-montserratAlternate sm:text-[26px] text-[20px] font-semibold text-black text-center
        sm:mt-0 mt-[12px]"
        >
          {title}
        </h1>
        <p className=" font-outfit sm:text-[17px] text-[15px] text-[#848995] text-center leading-7">
          {description}
        </p>
        <button
          className="flex items-center gap-[10px] sm:translate-y-[30px] sm:opacity-0 group-hover:translate-y-0
         group-hover:opacity-100 transition-all duration-200 ease-in-out translate-y-o opacity-100"
        >
          <div className="w-[35px] h-[35px] btnBg rounded-full flex justify-start items-center">
            <BiRightArrowAlt color="white" size={26} />
          </div>
          <h1 className=" font-montserratAlternate sm:text-base text-sm font-semibold text-black tracking-wider">
            READ MORE
          </h1>
        </button>
      </motion.div>
    </div>
  );
};

export default OfferCard;
