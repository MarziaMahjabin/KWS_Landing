import React from "react";
import { useCostCalculator } from "@/context/CostCalculatorContext";

export const EstimateForm: React.FC = () => {
  const { state } = useCostCalculator();

  const handleGetEstimate = () => {
    // Open the Google Form in a new tab
    window.open("https://forms.gle/xHt9ZKbJdFZ19uSX6", "_blank");
  };

  return (
    <div className="bg-[#0E153D] rounded-[39px] p-[40px] mt-[30px] max-md:p-6 max-sm:p-5 border border-[#913BFF] shadow-[0_0_15px_rgba(145,59,255,0.4)]">
      <div className="flex flex-col gap-6">
        <h2 className="text-[#F9F9F9] text-[32px] font-semibold max-md:text-[28px] max-sm:text-[24px]">
          Get a Detailed Estimate
        </h2>
        <p className="text-[#F9F9F9] text-lg">
          If you'd like to learn more, our team is here! We'll discuss your requirements in detail and will be ready to deliver.
        </p>
        <button
          onClick={handleGetEstimate}
          className="mt-2 bg-[#913BFF] hover:bg-[#7B32D5] text-white py-4 rounded-lg text-xl font-semibold transition-colors flex items-center justify-center"
        >
          Request For Detailed Estimate
        </button>
      </div>
    </div>
  );
};
