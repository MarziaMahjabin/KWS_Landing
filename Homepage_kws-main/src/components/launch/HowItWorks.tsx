import React from "react";

const HowItWorks = () => {
  return (
    <section
      className="w-full max-w-[1236px] text-white mt-[102px] max-md:max-w-full max-md:mt-10"
      aria-label="How It Works"
    >
      <div className="flex w-full flex-col items-stretch text-center justify-center p-2.5 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <h2 className="text-[46px] font-bold max-md:max-w-full max-md:text-[40px]">
            how it works
          </h2>
          <p className="text-xl font-normal self-center w-[736px] mt-4 max-md:max-w-full">
            Elevate your productivity to the next level. Capture and store all
            of your thoughts in one place. On the go, at your desk, or even
            offline.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center gap-[122px] font-bold flex-wrap mt-[82px] max-md:max-w-full max-md:mt-10">
        <div className="self-stretch flex flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
          <div
            className="bg-[rgba(255,96,96,0.3)] self-center flex items-center justify-center min-h-[82px] w-[82px] text-[42px] whitespace-nowrap leading-none h-[82px] rounded-[41px]"
            aria-label="Step 1"
          >
            1
          </div>
          <div className="w-full text-xl text-center mt-[17px]">
            idea & budgeting
          </div>
        </div>
        <div className="self-stretch flex flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
          <div
            className="bg-[rgba(72,233,138,0.3)] self-center flex items-center justify-center min-h-[82px] w-[82px] text-[42px] whitespace-nowrap leading-none h-[82px] rounded-[41px]"
            aria-label="Step 2"
          >
            2
          </div>
          <div className="w-full text-xl text-center mt-[17px]">
            MVP development
          </div>
        </div>
        <div className="self-stretch flex flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
          <div
            className="bg-[rgba(91,138,255,0.3)] self-center flex items-center justify-center min-h-[82px] w-[82px] text-[42px] whitespace-nowrap leading-none h-[82px] rounded-[41px]"
            aria-label="Step 3"
          >
            3
          </div>
          <div className="w-full text-xl text-center mt-[17px]">
            testing & feedback
          </div>
        </div>
        <div className="self-stretch flex flex-col items-stretch flex-1 shrink basis-[0%] my-auto">
          <div
            className="bg-[rgba(244,173,94,0.3)] self-center flex items-center justify-center min-h-[82px] w-[82px] text-[42px] whitespace-nowrap leading-none h-[82px] rounded-[41px]"
            aria-label="Step 4"
          >
            4
          </div>
          <div className="w-full text-xl text-center mt-[17px]">
            launch and growth
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
