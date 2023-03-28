import React from "react";
import Lottie from "lottie-react";

import LoadingText from "../assets/loading-text.json";
import Logo from "../assets/favicon.png";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center fixed top-0 left-0 z-[1000]">
      <div className="flex justify-center items-center flex-col ">
        <div className="sm:w-[50px] w-[36px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <Lottie
          animationData={LoadingText}
          className="sm:w-[200px] w-[150px]"
        />
      </div>
    </div>
  );
};

export default Loading;
