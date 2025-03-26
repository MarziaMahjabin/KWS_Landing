import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useCostCalculator } from "@/context/CostCalculatorContext";
import {
  ThankYouSection,
  PrototypeSection,
  EstimateForm,
  BudgetCard
} from "@/components/landing/cost_estimate_final";

// Calculate prototype cost based on UI selection only
const calculatePrototypeCost = (state: any) => {
  let baseCost = 1500; // Base cost for wireframes
  
  // Add cost for UI design type
  if (state.userInterface) {
    // UI design costs for prototype only
    if (state.userInterface.id === 'minimalistic') {
      baseCost += 800;
    } else if (state.userInterface.id === 'interactive') {
      baseCost += 1500;
    } else if (state.userInterface.id === 'advanced') {
      baseCost += 3000;
    }
  }
  
  // Consider industry as it might affect design complexity
  if (state.industry) {
    // Add 20% for more complex industries
    if (['fintech', 'healthcare', 'ai'].includes(state.industry.id)) {
      baseCost *= 1.2;
    }
  }
  
  return Math.round(baseCost);
};

const CostEstimateFinal: React.FC = () => {
  const { state, dispatch } = useCostCalculator();
  const [activeTab, setActiveTab] = useState<string>("MVP");
  const [prototypeCost, setPrototypeCost] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  // Calculate prototype cost whenever relevant state changes
  useEffect(() => {
    setPrototypeCost(calculatePrototypeCost(state));
  }, [state.userInterface, state.industry]);
  
  // Set product version based on active tab
  useEffect(() => {
    // Only run this effect if there is already a product version selected
    if (state.productVersion) {
      const currentVersionId = state.productVersion.id;
      
      // If current tab doesn't match the selected product version, update the state
      if ((activeTab === "MVP" && currentVersionId !== "mvp") || 
          (activeTab === "MarketFit" && currentVersionId !== "full")) {
        const newVersion = activeTab === "MVP" 
          ? { id: "mvp", title: "MVP (Minimum Viable Product)", cost: 2000 }
          : { id: "full", title: "Full-featured Product", cost: 5000 };
          
        dispatch({ type: 'SET_PRODUCT_VERSION', payload: newVersion });
      }
    }
  }, [activeTab, state.productVersion, dispatch]);
  
  // Handle tab switch with animation
  const handleTabSwitch = (tab: string) => {
    if (tab !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  return (
    <Layout>
      <div className="w-full bg-[#050D36]">
        <div className="max-w-[1440px] mx-auto px-[50px] max-md:px-[30px] max-sm:px-5">
          <ThankYouSection />
          
          {/* Tabs */}
          <div className="flex items-center border-b border-gray-600 mt-10 mb-10 overflow-x-auto max-md:pb-2">
            <button 
              className={`text-[#EEE] text-xl font-medium pb-4 px-4 whitespace-nowrap transition-all duration-300 ${activeTab === "Prototype" ? "border-b-2 border-[#913BFF]" : ""}`}
              onClick={() => handleTabSwitch("Prototype")}
            >
              Prototype
            </button>
            <button 
              className={`text-[#EEE] text-xl font-medium pb-4 px-4 whitespace-nowrap transition-all duration-300 ${activeTab === "MVP" ? "border-b-2 border-[#913BFF]" : ""}`}
              onClick={() => handleTabSwitch("MVP")}
            >
              MINIMUM VIABLE PRODUCT (MVP)
            </button>
            <button 
              className={`text-[#EEE] text-xl font-medium pb-4 px-4 whitespace-nowrap transition-all duration-300 ${activeTab === "MarketFit" ? "border-b-2 border-[#913BFF]" : ""}`}
              onClick={() => handleTabSwitch("MarketFit")}
            >
              PRODUCT - MARKET FIT
            </button>
          </div>
          
          <div className={`flex justify-between gap-[30px] mt-[50px] max-md:flex-col transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex-1">
              <PrototypeSection 
                activeTab={activeTab} 
              />
            </div>
            <div className="flex-1 max-w-[599px] flex flex-col">
              <BudgetCard 
                activeTab={activeTab} 
                prototypeCost={prototypeCost} 
              />
              <EstimateForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CostEstimateFinal; 