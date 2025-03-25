import React from "react";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col relative min-h-[661px] w-full items-center px-[52px] py-9 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/098309ac97e65ec258a25bb3581fe8df1f323b15?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <Navbar />
      <div className="relative flex w-[517px] max-w-full flex-col items-stretch text-[rgba(249,249,249,1)] mt-[63px] max-md:mt-10">
        <h1 className="text-[80px] font-bold text-center max-md:max-w-full max-md:text-[40px]">
          We're a<br />
          innovative IT
          <br />
          Solutions
        </h1>
        <button className="self-center bg-[rgba(145,59,255,1)] min-h-[51px] w-[191px] max-w-full text-[15px] font-semibold mt-7 pl-[21px] pr-5 py-[17px] rounded-md max-md:pl-5 hover:bg-opacity-90 transition-colors">
          GET STARTED NOW
        </button>
      </div>
    </header>
  );
};

export default Hero;
