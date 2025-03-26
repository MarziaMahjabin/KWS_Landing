import React from "react";
import { useCostCalculator } from "@/context/CostCalculatorContext";

type BudgetCardProps = {
  activeTab?: string;
  prototypeCost?: number;
};

export const BudgetCard: React.FC<BudgetCardProps> = ({ activeTab = "MVP", prototypeCost = 0 }) => {
  const { state } = useCostCalculator();
  const { totalCost, maintenanceCost } = state;
  
  // Calculate min and max costs with buffer
  const isPrototype = activeTab === "Prototype";
  const costToUse = isPrototype ? prototypeCost : totalCost;
  
  const minCost = Math.floor(costToUse * 0.9);
  const maxCost = Math.ceil(costToUse * 1.2);
  
  // Format costs
  const formattedMinCost = minCost.toLocaleString();
  const formattedMaxCost = maxCost.toLocaleString();
  const formattedMaintenance = maintenanceCost.toLocaleString();

  return (
    <div className="bg-[rgba(145,59,255,0.3)] rounded-[39px] p-[40px] mt-[30px] max-md:p-6 max-sm:p-5">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#F9F9F9] text-[26px] font-semibold max-md:text-[22px] max-sm:text-xl">
            Your Project Budget:
          </h3>
          <div className="flex items-end">
            <h2 className="text-[#913BFF] text-5xl font-semibold max-md:text-4xl max-sm:text-3xl transition-all duration-500">
              ${formattedMinCost} - ${formattedMaxCost}
            </h2>
            <span className="text-[#F9F9F9] text-xl ml-2 pb-1 max-md:text-lg max-sm:text-base">
              USD
            </span>
          </div>
          {maintenanceCost > 0 && !isPrototype && (
            <p className="text-gray-300 text-lg max-md:text-base">
              + ${formattedMaintenance} per month maintenance
            </p>
          )}
          
          {isPrototype && (
            <p className="text-yellow-300 text-lg max-md:text-base mt-2 bg-[rgba(0,0,0,0.2)] p-3 rounded-lg">
              This cost includes high-fidelity wireframes and visual prototypes only. No development is included.
            </p>
          )}
        </div>

        <div className="bg-[#1D2651] rounded-[26px] px-[20px] py-[24px] max-md:px-4 max-md:py-5 max-sm:px-3 max-sm:py-4">
          <h3 className="text-[#F9F9F9] text-[22px] font-medium mb-[20px] max-md:text-[20px] max-sm:text-lg">
            {isPrototype ? "This Prototype Includes:" : "This Budget Estimate Includes:"}
          </h3>
          <ul className="flex flex-col gap-3 text-[#F9F9F9] text-lg max-md:text-base">
            {isPrototype ? (
              <>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>High-fidelity wireframes for all screens</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Visual design matching your brand</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Interactive prototypes (Figma / Adobe XD)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>User flow and journey mapping</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Prototype review and iteration</p>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Full development from concept to deployment</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>UI/UX design for all screens and user flows</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Testing and quality assurance</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Project management and communication</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="min-w-[16px] min-h-[16px] rounded-full bg-[#913BFF] mt-1.5"></div>
                  <p>Post-launch support (30 days)</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
