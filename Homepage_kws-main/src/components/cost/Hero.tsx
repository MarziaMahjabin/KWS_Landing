import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="mr-3 mt-[101px] pb-[47px] px-[63px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="z-10 flex w-full flex-col items-stretch text-[rgba(249,249,249,1)] mt-11 max-md:max-w-full max-md:mt-10">
            <div className="w-full max-md:max-w-full">
              <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-[40px]">
                Find Out How Much Your Software Will Cost
              </h1>
              <p className="text-2xl font-normal mt-5 max-md:max-w-full">
                Estimate costs for popular software types or calculate your
                custom project pricing using our AI-powered cost calculator.
              </p>
            </div>
            <button className="bg-[rgba(145,59,255,1)] gap-2.5 text-lg font-medium mt-[29px] px-[11px] py-5 rounded-md">
              Calculate Your Cost Now
            </button>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbc7c8c09f55ca91044883cd031f63c9a8c8bba0?placeholderIfAbsent=true"
            alt="Cost Calculator"
            className="aspect-[1.29] object-contain w-full mt-[-77px] grow max-md:max-w-full max-md:mt-[-71px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
