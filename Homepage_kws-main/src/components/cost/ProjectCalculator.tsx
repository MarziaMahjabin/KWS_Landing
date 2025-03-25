import React from "react";

const ProjectCalculator: React.FC = () => {
  return (
    <div className="w-full max-w-[1092px] mt-[187px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[83%] max-md:w-full max-md:ml-0">
          <div className="text-[rgba(249,249,249,1)] text-center mt-2.5 max-md:max-w-full max-md:mt-10">
            <h2 className="text-5xl font-semibold max-md:max-w-full max-md:text-[40px]">
              project cost calculator
            </h2>
            <p className="text-2xl font-normal mt-[35px] max-md:max-w-full">
              calculate the cost of your project from MVP to final product
            </p>
          </div>
        </div>
        <div className="w-[17%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e7084e6c3e658a827f0a6cad510bd91fff788ea?placeholderIfAbsent=true"
            alt="Calculator"
            className="aspect-[0.88] object-contain w-[148px] shrink-0 max-w-full grow max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCalculator;
