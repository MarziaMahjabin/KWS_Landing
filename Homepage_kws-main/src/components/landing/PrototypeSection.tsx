import React from "react";
import { useCostCalculator } from "@/context/CostCalculatorContext";

type PrototypeSectionProps = {
  activeTab?: string;
};

export const PrototypeSection: React.FC<PrototypeSectionProps> = ({ activeTab = "MVP" }) => {
  const { state } = useCostCalculator();
  
  // Get all selected options as tags
  const getSelectedTags = () => {
    const tags = [];
    
    if (state.industry) tags.push(state.industry);
    
    // Add different selections based on the active tab
    if (activeTab === "Prototype") {
      // For prototype, only include UI-related options
      if (state.userInterface) tags.push(state.userInterface);
      
      // Add a branding tag if UI is interactive or advanced
      if (state.userInterface && ['interactive', 'advanced'].includes(state.userInterface.id)) {
        tags.push({ id: 'branding', title: 'Brand Design', cost: 0 });
      }
      
      // Add a prototype delivery method tag
      tags.push({ id: 'figma', title: 'Figma Prototype Delivery', cost: 0 });
      
    } else {
      // For MVP and MarketFit, include all selections
      if (state.productVersion) tags.push(state.productVersion);
      tags.push(...state.platforms);
      tags.push(...state.loginOptions);
      if (state.userInterface) tags.push(state.userInterface);
      tags.push(...state.thirdPartyIntegrations);
      if (state.cms) tags.push(state.cms);
      tags.push(...state.functionality);
      tags.push(...state.communication);
      tags.push(...state.userRoles);
      if (state.timeline) tags.push({...state.timeline, title: `Timeline: ${state.timeline.title}`});
      tags.push(...state.deployment.filter(d => !(d as any).isMonthly));
    }
    
    return tags;
  };

  const selectedTags = getSelectedTags();
  
  const getTitle = () => {
    switch (activeTab) {
      case "Prototype": 
        return "Interactive Prototype";
      case "MVP": 
        return "Minimum Viable Product (MVP)";
      case "MarketFit": 
        return "Full-featured Product";
      default:
        return "Project Details";
    }
  };
  
  const getDescription = () => {
    switch (activeTab) {
      case "Prototype":
        return "High-fidelity interactive prototype with visual designs for all screens, allowing you to test user flows and validate your concept before development.";
      case "MVP": 
        return "A focused version of your product with only the essential features needed to satisfy early customers and gather feedback.";
      case "MarketFit":
        return "A complete product with all planned features, ready for market launch and scale.";
      default:
        return "";
    }
  };

  return (
    <div className="bg-[#0E153D] rounded-[39px] p-[40px] mb-[50px] max-md:p-6 max-sm:p-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-[#F9F9F9] text-[32px] font-semibold max-md:text-[28px] max-sm:text-[24px]">
            {getTitle()}
          </h2>
          <p className="text-[#F9F9F9] text-[19px] max-md:text-[17px] max-sm:text-base">
            {getDescription()}
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[#F9F9F9] text-[26px] font-medium max-md:text-[22px] max-sm:text-xl">
            {activeTab === "Prototype" ? "Design Specifications:" : "Included Features:"}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {selectedTags.map((tag, index) => (
              <div
                key={`${tag.id}-${index}`}
                className="bg-[#1D2651] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                <div className="w-2 h-2 rounded-full bg-[#913BFF]"></div>
                <span>{tag.title}</span>
              </div>
            ))}
          </div>
          
          {selectedTags.length === 0 && (
            <p className="text-gray-400 italic">
              No features have been selected. Please go back to the cost calculator to select features.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[#F9F9F9] text-[26px] font-medium max-md:text-[22px] max-sm:text-xl">
            Timeline:
          </h3>
          <p className="text-[#F9F9F9] text-[19px] max-md:text-[17px] max-sm:text-base">
            {activeTab === "Prototype" 
              ? "2-3 weeks for complete prototype" 
              : state.timeline 
                ? state.timeline.title 
                : "Timeline not specified. Typically 2-4 months for an MVP."}
          </p>
        </div>
        
        {activeTab === "Prototype" && (
          <div className="mt-4 p-4 border border-[#913BFF] rounded-lg bg-[rgba(145,59,255,0.1)]">
            <h4 className="text-[#F9F9F9] text-xl font-medium mb-2">What happens after the prototype?</h4>
            <p className="text-[#F9F9F9] text-base">
              Once the prototype is approved, it can be handed off directly to developers with specifications, 
              or we can proceed to develop the full product for you. The prototype cost will be credited towards 
              your full development project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
