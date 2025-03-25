import React, { useState, useEffect } from "react";

const Investment = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Data for the investment steps
  const investmentSteps = [
    {
      id: 1,
      title: "Build MVP ($100+)",
      description: "Create a minimal, functional version to test your idea."
    },
    {
      id: 2,
      title: "MVP 2.0",
      description: "Add key features, improve UI/UX, and fix initial bugs."
    },
    {
      id: 3,
      title: "Beta Version",
      description: "Expand functionalities, enhance security, and onboard early adopters."
    },
    {
      id: 4,
      title: "Version 1.0 (Official Launch)",
      description: "Fully stable product with monetization and growth strategies."
    },
    {
      id: 5,
      title: "Version 2.0+ (Scaling & Automation)",
      description: "Optimize performance, automate processes, and expand globally."
    }
  ];

  // Auto-cycle through steps every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep % 5) + 1);
    }, 3000);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <section
      className="flex flex-col items-center"
      aria-label="Investment Section"
    >
      <h2 className="text-white text-[46px] font-bold leading-none self-center mt-[161px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Start Your CEO Journey with $100
      </h2>
      <div className="mt-[175px] max-w-full w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch text-[rgba(149,154,156,1)] my-auto max-md:max-w-full max-md:mt-10">
              <div className="self-stretch flex w-full max-w-[535px] flex-col items-stretch max-md:max-w-full">
                {investmentSteps.map((step) => (
                  <div key={step.id} className="mb-8">
                    <button
                      className={`flex items-center gap-[15px] text-[28px] font-medium leading-none ${activeStep === step.id ? "text-white" : "text-[rgba(149,154,156,1)]"} transition-colors duration-300`}
                      onClick={() => handleStepClick(step.id)}
                    >
                      <div
                        className={`self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[50%] ${activeStep === step.id ? "bg-[rgba(72,233,138,1)]" : "bg-[rgba(65,73,83,1)]"} transition-colors duration-300`}
                      />
                      <div className="self-stretch my-auto text-left">{step.title}</div>
                    </button>
                    <div 
                      className={`text-xl font-normal mt-5 max-md:max-w-full text-white text-left transition-all duration-300 overflow-hidden ${
                        activeStep === step.id 
                          ? "max-h-40 opacity-100" 
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {step.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[557px] grow items-center text-white pt-[82px] pb-[9px] px-[50px] rounded-[30px_0px_0px_30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/54aa40fbd1ce2a4db64f52f3a8f4b793d57d4a0c?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Background"
              />
              <div className="relative max-w-full w-[600px]">
                <h3 className="text-[25px] font-semibold leading-[42px] max-md:max-w-full">
                  🚀 Start small, scale fast – Take your startup from MVP to
                  success!
                </h3>
                <div className="bg-[rgba(255,255,255,0.05)] border flex min-h-[336px] w-full flex-col items-center justify-center mt-[47px] px-[41px] py-[71px] rounded-xl border-[rgba(255,255,255,0.5)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="w-[493px] max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/0aa081b1c39c55ed600ec6bb5558125f0bbed241?placeholderIfAbsent=true"
                      className="aspect-[3.79] object-contain w-full max-md:max-w-full"
                      alt="MVP Development Stages"
                    />
                    <div className="flex w-full items-center gap-[40px_72px] flex-wrap mt-[11px] max-md:max-w-full">
                      <div className="self-stretch flex flex-col items-center whitespace-nowrap justify-center grow shrink w-[74px] my-auto">
                        <div className="text-lg font-semibold leading-loose">
                          cupcake
                        </div>
                        <div className="text-base font-normal leading-none">
                          MVP
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-stretch justify-center grow shrink w-[97px] my-auto">
                        <div className="text-lg font-semibold leading-loose self-center">
                          cake
                        </div>
                        <div className="text-base font-normal leading-none">
                          future release
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-stretch justify-center grow shrink w-[121px] my-auto">
                        <div className="text-lg font-semibold leading-loose self-center">
                          wedding cake
                        </div>
                        <div className="text-base font-normal leading-none text-center">
                          final design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[rgba(249,249,249,1)] text-[64px] font-semibold text-center self-center mt-[162px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Estimate Your Project Investment
      </h2>
      <div className="flex w-full max-w-[1168px] items-stretch gap-[40px_100px] text-3xl text-white font-semibold leading-[1.4] flex-wrap ml-3.5 mt-[115px] max-md:max-w-full max-md:mt-10">
        <div className="text-center grow shrink w-[569px] max-md:max-w-full">
          Demo Project price to give you better idea
        </div>
        <div className="grow shrink w-[260px]">Cost calculate with AI</div>
      </div>
    </section>
  );
};

export default Investment;
