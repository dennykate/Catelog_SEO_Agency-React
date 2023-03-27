import React from "react";
import { BsYoutube, BsTwitter, BsFacebook, BsSkype } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import Template from "./Template";
import Logo from "../assets/logo.png";
import SocialBtn from "./SocialBtn";
import FooterItem from "./FooterItem";
import { contactInfoData, quickLinksData } from "../utils/data";

const Footer = () => {
  return (
    <div className="w-full bg-primary">
      <Template>
        <div className="w-full md:py-[100px] py-[70px]">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[20px] gap-[32px]">
            <div className="flex flex-col items-start gap-[26px]  ">
              <img src={Logo} alt="logo" className="w-[150px]" />
              <p className="  font-outfit text-[14px] font-[500] text-[#A6A8B3] tracking-wide">
                Contrary to popular belief, Lorem Ipsum is simply random text.
                It has roots in a piece classical Latin years old.
              </p>
              <div className="flex items-center gap-[12px] mt-[10px]">
                <SocialBtn Icon={BsYoutube} />
                <SocialBtn Icon={BsTwitter} />
                <SocialBtn Icon={BsFacebook} />
                <SocialBtn Icon={BsSkype} />
              </div>
            </div>

            <div className="flex flex-col items-start lg:gap-[32px] gap-[12px] lg:ml-[20px]">
              <h1 className=" font-montserratAlternate font-[700] text-[18px] text-white">
                Quick Links
              </h1>
              <div className="flex flex-col gap-[6px] items-start">
                {quickLinksData.map((data, index) => (
                  <FooterItem key={index} text={data} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start lg:gap-[32px] gap-[12px]">
              <h1 className=" font-montserratAlternate font-[700] text-[18px] text-white">
                Contact Info
              </h1>
              <div className="flex flex-col gap-[6px] items-start">
                {contactInfoData.map((data, index) => (
                  <FooterItem key={index} text={data} />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:items-start lg:gap-[32px] gap-[12px]">
              <h1 className=" font-montserratAlternate font-[700] text-[18px] text-white">
                Subscribe Newsletter
              </h1>
              <p className=" font-outfit text-[14px] font-[500] text-[#A6A8B3]">
                Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
                commodo
              </p>
              <div className="md:max-w-full max-w-[400px] h-[55px] relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-full pl-[16px] bg-white bg-opacity-5 rounded-full text-sm font-outfit font-[500]
                   outline-none"
                />
                <button className="w-[55px] h-[55px] rounded-full btnBg absolute top-0 right-0 flex justify-center items-center">
                  <FaTelegramPlane color="white" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Template>

      <div className="w-full border-t-[1px] border-white border-opacity-20">
        <Template>
          <div
            className="w-full py-[32px] flex justify-between lg:items-center items-start lg:flex-row flex-col lg:gap-0 
          gap-[10px] "
          >
            <h1 className="font-bold sm:text-[15px] text-[13px] font-outfit text-white">
              © 2023 Cetalog, All Rights Reserved. Design By Theme Pure
            </h1>

            <div className="flex items-center gap-[20px]">
              <a
                href="#"
                className="font-normal sm:text-[15px] text-[13px] font-outfit text-white hover:text-opacity-70 
                transition-all duration-200 ease-in-out"
              >
                Terms and conditions
              </a>
              <a
                href="#"
                className="font-normal sm:text-[15px] text-[13px] font-outfit text-white hover:text-opacity-70 
                transition-all duration-200 ease-in-out"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </Template>
      </div>
    </div>
  );
};

export default Footer;
