import React from "react";
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  return (
  <>


  {/* 
  
  
  */}
    <div className="flex flex-col relative lg:min-h-[408px] w-full items-stretch pt-5 px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/165aac82c429e58a36ed2d7b03bc14f8b154fa75?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />

      <div className="bg-[url('https://i.ibb.co.com/0Vnzn0vh/Frame-1171276022.png')] bg-center w-full  items-center  bg-cover  rounded-xl flex md:justify-center lg:justify-between relative md:pt-20 lg:pt-[120px] xl:pt-[40px] lg:pb-10 px-[97px] max-md:flex-col max-md:px-5 max-md:py-[60px] lg:px-10">
      <div className="flex flex-col gap-[13px]">
        <h1 className="text-[#F9F9F9] font-bold text-[44px] max-sm:text-[32px] capitalize text-center lg:text-start">
        contact us
        </h1>
        <div className="text-lg text-white capitalize md:pb-14 font-semibold">
          <span>Home - project -</span>
          <span className="text-[#913BFF]">contact us</span>
        </div>
      </div>
   
    </div>
    </div>
    </>
  );
};

export default HeroSection;
