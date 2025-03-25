import React from "react";
import Navbar from "./Navbar";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col relative min-h-[628px] w-full items-stretch pt-[45px] pb-[266px] px-[54px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/165aac82c429e58a36ed2d7b03bc14f8b154fa75?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <Navbar />
      <div className="relative flex mb-[-53px] flex-col items-stretch ml-[43px] mt-[190px] max-md:ml-2.5 max-md:mt-10 max-md:mb-2.5">
        <h1 className="text-[rgba(249,249,249,1)] text-[44px] font-bold text-center">
          contact us
        </h1>
        <div className="text-white text-lg font-medium leading-none mt-[13px]">
          Home - project -{" "}
          <span className="text-[rgba(145,59,255,1)]">contact us</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
