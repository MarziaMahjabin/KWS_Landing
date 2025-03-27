import React from 'react';
import { useCostCalculator } from '@/context/CostCalculatorContext';

const QuickNavigation: React.FC = () => {
  const { state, dispatch, getTotalSteps } = useCostCalculator();
  const { currentStep } = state;
  const totalSteps = getTotalSteps();

  // Array of step numbers [1, 2, 3, ...]
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  const handleStepClick = (step: number) => {
    // Only allow going back to previous steps
    if (step <= currentStep) {
      dispatch({ type: 'SET_STEP', payload: step });
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full mb-6">
      <div className="text-[#F9F9F9] text-lg mb-2 font-medium">Jump to step:</div>
      <div className="flex flex-wrap gap-2">
        {steps.map((step) => (
          <button
            key={step}
            onClick={() => handleStepClick(step)}
            disabled={step > currentStep}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
              ${
                step === currentStep
                  ? 'bg-[#913BFF] text-white font-bold'
                  : step < currentStep
                  ? 'bg-[#303668] text-white hover:bg-[#913BFF] cursor-pointer'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
              }
            `}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickNavigation; 