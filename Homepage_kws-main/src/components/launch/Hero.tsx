import React from "react";

const Hero = () => {
  return (
    <section
      className="self-stretch mt-[101px] pt-[21px] px-[62px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5"
      aria-label="Hero Section"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-2/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-[rgba(249,249,249,1)] mt-[35px] max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <h1 className="text-[45px] font-semibold max-md:max-w-full max-md:text-[40px]">
                Launch Your Startup with Expert Support
              </h1>
              <h2 className="text-[32px] font-medium text-center mt-[19px] max-md:max-w-full">
                Just share your idea and
              </h2>
            </div>
            <div className="self-center flex w-[341px] max-w-full flex-col items-center text-2xl font-normal mt-[42px] max-md:mt-10">
              <button className="self-stretch min-h-[55px] w-[264px] max-w-full gap-2.5 pl-[27px] pr-7 py-[13px] rounded-[45px] bg-[rgba(28,43,84,1)] hover:bg-[rgba(28,43,84,0.8)] transition-colors max-md:px-5">
                Build your AI agent
              </button>
              <button className="self-stretch min-h-[55px] w-[305px] max-w-full gap-2.5 mt-[33px] px-5 py-[13px] rounded-[45px] bg-[rgba(28,43,84,1)] hover:bg-[rgba(28,43,84,0.8)] transition-colors">
                Build your startup/saas
              </button>
              <button className="self-stretch min-h-[55px] w-full gap-2.5 mt-[33px] pl-7 pr-[27px] py-[13px] rounded-[45px] bg-[rgba(28,43,84,1)] hover:bg-[rgba(28,43,84,0.8)] transition-colors max-md:px-5">
                Build your creative media
              </button>
              <button className="self-stretch bg-[rgba(145,59,255,1)] hover:bg-[rgba(145,59,255,0.8)] transition-colors gap-2.5 text-[15px] mt-[33px] px-[23px] py-[15px] rounded-md max-md:px-5">
                Get Started for $100
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
            <div className="w-[647px] max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[66%] max-md:w-full max-md:ml-0">
                  <div className="bg-[rgba(249,249,249,1)] flex w-[535px] shrink-0 max-w-full h-[358px] -mr-40 mt-[59px] rounded-[11px] max-md:mt-10" />
                </div>
                <div className="w-[34%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-[rgba(23,34,88,1)] flex w-[272px] shrink-0 max-w-full h-[215px] mx-auto rounded-[11px_17px_11px_13px]" />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(23,34,88,1)] flex w-[290px] shrink-0 max-w-full h-[198px] rounded-[13px_27px_11px_13px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
