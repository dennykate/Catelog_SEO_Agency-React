import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";

import Logo from "../assets/logo.png";
import { navbarData } from "../utils/data";
import { Button } from "./CustomComponents";
import NavbarItem from "./NavbarItem";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className=" h-[100px] bg-transparent border-b-[1px] border-white border-opacity-20 flex items-center 
    px-[24px] justify-between "
    >
      <img src={Logo} alt="logo" className="h-[45px]" />

      <div
        className="h-full pl-[24px] border-l-[1px]  border-white border-opacity-20  items-center
        gap-[32px] xl:flex hidden"
      >
        {navbarData.map((nav, index) => (
          <NavbarItem key={index} {...nav} />
        ))}
      </div>

      <div className="h-full pl-[24px] flex gap-[12px] items-center border-l-[1px]  border-white border-opacity-20 ">
        <div className="lg:flex hidden gap-[12px] items-center">
          <button
            className="h-[50px] w-[50px] flex justify-center items-center  rounded-full border-[1px] border-white 
        border-opacity-20 text-white hover:bg-white hover:text-primary transition-all duration-200 ease-in-out"
          >
            <BsSearch size={18} />
          </button>

          <button
            className="h-[50px] px-[30px] rounded-full border-[1px] border-white border-opacity-20 flex justify-center 
        items-center text-white hover:bg-white hover:text-primary transition-all duration-200 ease-in-out"
          >
            <h1 className=" font-semibold font-montserratAlternate uppercase">
              Login
            </h1>
          </button>

          <Button height="h-[50px]">
            <h1 className="text-white font-semibold font-montserratAlternate uppercase">
              contact us
            </h1>
          </Button>
        </div>

        <button
          onClick={() => setShowSidebar(true)}
          className="w-[50px] h-[50px] flex items-center justify-center xl:hidden "
        >
          <RiMenu4Fill size={32} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
