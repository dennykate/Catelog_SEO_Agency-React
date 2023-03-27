import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { Button } from "./CustomComponents";
import Navbar from "./Navbar";
import Wave from "../assets/wave.png";
import OnScrollNavbar from "./OnScrollNavbar";
import Sidebar from "./Sidebar";

const Hero = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen backgroundImg">
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <OnScrollNavbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div className="h-screen flex justify-center  items-center sm:px-[20px] px-[10px] flex-col gap-[30px] relative">
        <h1 className=" text-center lg:text-[70px] sm:text-[50px] text-[30px] font-[700] text-white font-montserratAlternate">
          I Think Your Business Find <br className="md:block hidden" /> SEO
          Solution...
        </h1>
        <div className="w-full flex items-center justify-center gap-[26px] md:flex-row flex-col">
          <motion.div
            initial={{ translateX: -50, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button height="sm:h-[70px] h-[50px]" px="sm:px-[32px] px-[24px]">
              <h1 className="text-white font-semibold font-outfit tracking-wider sm:text-lg text-base">
                See our all services
              </h1>
            </Button>
          </motion.div>

          <motion.div
            initial={{ translateX: 50, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center sm:gap-[20px] gap-[12px]"
          >
            <div className="sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] flex justify-center items-center rounded-full  relative">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                <div
                  className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] rounded-full border-[1px] border-white border-opacity-20 bg-primary
                flex justify-center items-center"
                >
                  <BsFillPlayFill color="#57E9F3" size={24} />
                </div>
              </div>

              <div className="w-full h-full absolute top-0 left-0 bg-[#57E9F3] fadeAnimation rounded-full"></div>
            </div>

            <a
              href="#"
              className=" font-outfit tracking-widest text-white sm:text-base text-sm uppercase  font-semibold"
            >
              How it work
            </a>
          </motion.div>
        </div>
      </div>

      <img src={Wave} alt="wave" className="w-full" />

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
};

export default Hero;
