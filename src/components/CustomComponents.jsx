export const Button = ({ children, height, px }) => (
  <button
    className={`${height} ${
      px ? px : "px-[20px]"
    } btnBg rounded-md hover:translate-y-[-5px] transition-all duration-200 ease-in-out`}
  >
    {children}
  </button>
);

export const TitleContainer = ({ children, colorfulBg }) => (
  <button
    className={`flex items-center gap-[12px] py-[7px] px-[16px] rounded-full
shadow-xl ${colorfulBg ? "btnBg" : "bg-white"}`}
  >
    <div className="w-[10px] h-[10px] rounded-full circleBg" />
    <h1
      className={`font-montserratAlternate font-medium text-[15px] ${
        colorfulBg ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h1>
    <div className="w-[10px] h-[10px] rounded-full circleBg" />
  </button>
);

export const AllServicesButton = () => (
  <button
    className="w-[180px] h-[60px] flex justify-center items-center text-black font-montserratAlternate 
  font-bold text-base rounded-md shadow-md hover:text-[#162DE4] transition-all duration-200 ease-in-out cursor-pointer"
  >
    All Services
  </button>
);
