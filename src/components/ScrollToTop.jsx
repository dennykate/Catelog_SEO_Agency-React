import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = ({ showBtn }) => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTopHandler}
      className={`fixed bottom-[20px] right-[20px] w-[50px] h-[50px] rounded-full carouselBg flex justify-center
     items-center z-10 text-white text-opacity-80 hover:text-opacity-100 ${
       showBtn ? " translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
     } transition-all duration-500 ease-in-out hover:-translate-y-[5px]`}
    >
      <MdKeyboardArrowUp size={30} />
    </button>
  );
};

export default ScrollToTop;
