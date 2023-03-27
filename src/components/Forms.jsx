import React from "react";

import { Button } from "./CustomComponents";

const Forms = () => {
  return (
    <div className="md:w-1/2 w-full bg-[#F1F6FB] rounded-lg py-[50px] sm:px-[30px] px-[15px]">
      <form className="w-full flex flex-col gap-[20px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px]">
          <input
            type="text"
            placeholder="First Name"
            className=" outline-none rounded-md bg-white h-[60px] px-[16px] font-outfit text-[15px] 
            focus:border-[1px] focus:border-black shadow-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className=" outline-none rounded-md bg-white h-[60px] px-[16px] font-outfit text-[15px] 
            focus:border-[1px] focus:border-black shadow-md"
          />
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[10px]">
          <input
            type="email"
            placeholder="Email"
            className=" outline-none rounded-md bg-white h-[60px] px-[16px] font-outfit text-[15px] 
            focus:border-[1px] focus:border-black shadow-md"
          />
          <input
            type="text"
            placeholder="Phone"
            className=" outline-none rounded-md bg-white h-[60px] px-[16px] font-outfit text-[15px] 
            focus:border-[1px] focus:border-black shadow-md"
          />
        </div>

        <div>
          <textarea
            cols="30"
            rows="8"
            className="bg-white rounded-md shadow-md w-full"
          ></textarea>
        </div>

        <div>
          <Button height="sm:h-[70px] h-[50px]" px="sm:px-[32px] px-[24px]">
            <h1 className="text-white font-semibold font-montserratAlternate tracking-wider sm:text-lg text-base">
              Send Message
            </h1>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
