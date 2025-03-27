import React from "react";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <header className="relative flex flex-col relative min-h-[661px] w-full items-center px-[52px] py-9 max-md:max-w-full max-md:px-5">
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
      <div className="absolute bottom-5 md:-bottom-14 w-full h-[74.39px] bg-[#913BFF] overflow-hidden z-10 flex items-center md:rotate-[-8deg]">
  <div className="flex animate-marquee">
    <div className="whitespace-nowrap text-[32px] lg:text-[35px] text-white font-dotted mr-12">
      KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW |
    </div>
    <div className="whitespace-nowrap text-[32px] lg:text-[35px] text-white font-dotted">
      KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW |
    </div>
    <div className="whitespace-nowrap text-[32px] lg:text-[35px] text-white font-dotted">
      KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW |
    </div>
  </div>

  <style>{`
    .animate-marquee {
      width: max-content;
      display: flex;
      animation: marquee 60s linear infinite;
    }

    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</div>

      {/* <div className="absolute bottom-14 md:-bottom-10 flex flex-row justify-center items-center overflow-hidden py-0 px-[1px] gap-[10px] w-[100vw] h-[74.39px] bg-[#913BFF] z-10 md:-translate-x-0 md:rotate-[-8deg]">

            <div className="flex whitespace-nowrap animate-marquee">
              <span className="text-[40px] text-white font-dotted inline-block mr-8">
              KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW        </span>
              
            </div>
          </div> */}
    </header>
  );
};

export default Hero;
