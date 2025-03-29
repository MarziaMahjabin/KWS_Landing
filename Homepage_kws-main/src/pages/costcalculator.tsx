import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/cost/Hero";
import SoftwareCards from "@/components/cost/SoftwareCards";
import CostEstimator from "@/components/cost/CostEstimator";
import ProjectCalculator from "@/components/cost/ProjectCalculator";
import ChatInterface from "@/components/cost/ChatInterface";

const CostCalculator = () => {
  return (
    <Layout>
      <Hero />
      <SoftwareCards />
      <CostEstimator />
      <ProjectCalculator />
      {/* <ChatInterface /> */}

      {/* Extras tooltip */}
      <div className="bg-[rgba(1,57,160,0.54)] z-10 flex min-h-[51px] w-[103px] max-w-full flex-col items-stretch text-[10px] text-white font-normal leading-none justify-center mr-[85px] -mt-7 px-1 py-[11px] rounded-[3px] border-[rgba(255,255,255,0.39)] max-md:mr-2.5">
        <div className="flex w-full max-w-[94px] flex-col items-stretch">
          <div className="rotate-[2.6718908186452923e-24rad] gap-1 whitespace-nowrap">
            attachment
          </div>
          <div className="flex w-full items-center gap-[5px] mt-[9px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/144aa0cf4f3b07890b7c3bbf2b6ff82ca5e96166?placeholderIfAbsent=true"
              alt="Improve"
              className="aspect-[1] object-contain w-2.5 self-stretch shrink-0 my-auto"
            />
            <div className="rotate-[2.6718908186452923e-24rad] self-stretch my-auto">
              improve prompt
            </div>
          </div>
        </div>
      </div>

      {/* Floating image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/96f3a5ebcc31c8e462c75684a880cecc3fa23c6a?placeholderIfAbsent=true"
        alt="Floating"
        className="aspect-[1] object-contain w-[157px] mt-[-219px] max-w-full ml-[267px] max-md:mt-[-200px] max-md:ml-2.5"
      />
    </Layout>
  );
};

export default CostCalculator; 