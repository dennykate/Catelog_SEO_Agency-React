import React from "react";
import { motion } from "framer-motion";

import { worksData } from "../utils/data";
import Template from "./Template";

const Works = () => {
  return (
    <Template>
      <div className="w-full  bg-transparent -translate-y-[100px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-[10px] ">
        {worksData?.map(({ image, title, para }, index) => (
          <motion.div
            initial={{ translateY: 50, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col gap-[10px] items-start"
          >
            <div className="w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center md:-translate-x-[16px] shadow-sm">
              <div className="w-[70px] h-[70px] rounded-full bg-white shadow-md flex justify-center items-center">
                <img src={image} alt="seo" className="w-[36px]" />
              </div>
            </div>

            <h1 className=" font-montserratAlternate text-black text-xl font-semibold">
              {title}
            </h1>

            <p className="text-gray-500 text-lg font-outfit">{para}</p>
          </motion.div>
        ))}
      </div>
    </Template>
  );
};

export default Works;
