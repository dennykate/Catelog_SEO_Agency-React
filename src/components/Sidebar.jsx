import React from "react";
import { HiXMark } from "react-icons/hi2";

import { navbarData } from "../utils/data";
import { Button } from "./CustomComponents";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`w-full min-h-screen bg-white z-[1000] fixed top-0 left-0 flex flex-col gap-[10px] sm:p-[20px] sm:px-[20px] 
    py-[10px] px-[10px] ${
      showSidebar ? " translate-x-0" : "-translate-x-[100%]"
    } transition-all duration-200 ease-in-out`}
    >
      {navbarData?.map(({ title, data }, index) => (
        <div key={index} className="flex-col flex gap-[1px]">
          <h1 className="text-black text-xl font-semibold font-outfit underline -translate-x-[1px]">
            {title}
          </h1>
          <div className="flex flex-col ">
            {data?.map((item, index) => (
              <h1
                key={index}
                className="text-gray-600 text-base font-[400] font-outfit"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      ))}

      <div className="w-full lg:hidden flex sm:items-center mt-[20px] gap-[12px] sm:flex-row flex-col ">
        <button
          className="h-[50px] px-[30px] rounded-full border-[1px] border-primary border-opacity-20 flex justify-center 
        items-center text-primary "
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
        onClick={() => setShowSidebar(false)}
        className="absolute top-[20px] right-[20px] w-[30px] h-[30px] rounded bg-primary flex justify-center items-center"
      >
        <HiXMark color="white" size={22} />
      </button>
    </div>
  );
};

export default Sidebar;
