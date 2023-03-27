import React from "react";
import Lottie from "lottie-react";

import LoadingText from "../assets/loading-text.json";
import Logo from "../assets/favicon.png";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="flex justify-center items-center flex-col ">
        <div className="w-[50px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <Lottie animationData={LoadingText} className="w-[200px]" />
      </div>
    </div>
  );
};

export default Loading;
