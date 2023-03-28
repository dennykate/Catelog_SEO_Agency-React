import React from "react";
import { motion } from "framer-motion";

import CaseStudiesCard from "./CaseStudiesCard";
import CaseStudiesCarouselContainer from "./CaseStudiesCarouselContainer";
import { AllServicesButton, TitleContainer } from "./CustomComponents";
import Template from "./Template";
import { caseStudiesData } from "../utils/data";

const CaseStudies = () => {
  return (
    <div className="2xl:max-w-[1440px] max-w-full mx-auto py-[50px]">
      <div className="w-full flex justify-center items-center gap-[10px] py-[32px] flex-col">
        <TitleContainer>Our Case Studies</TitleContainer>
        <h1 className="font-montserratAlternate text-black font-[600] sm:text-[35px] text-[22px] text-center">
          Our Recent Complete <br />
          Case Studies
        </h1>
      </div>

      <motion.div
        initial={{ translateY: 50, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CaseStudiesCarouselContainer>
          {caseStudiesData.map((data, index) => (
            <CaseStudiesCard key={index} {...data}/>
          ))}
        </CaseStudiesCarouselContainer>
      </motion.div>

      <div className="my-[20px] w-full flex justify-center items-center">
        <AllServicesButton />
      </div>
    </div>
  );
};

export default CaseStudies;
