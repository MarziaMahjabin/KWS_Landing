import React from 'react';
import { useCostCalculator } from '@/context/CostCalculatorContext';
import { useNavigate } from 'react-router-dom';

type FormNavigationProps = {
  onComplete?: () => void;
};

const FormNavigation: React.FC<FormNavigationProps> = ({ onComplete }) => {
  const { state, dispatch, getTotalSteps } = useCostCalculator();
  const navigate = useNavigate();
  const { currentStep } = state;
  const totalSteps = getTotalSteps();

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      dispatch({ type: 'SET_STEP', payload: currentStep + 1 });
      window.scrollTo(0, 0);
    } else {
      // Last step, complete the form
      if (onComplete) {
        onComplete();
      } else {
        navigate('/cost-calculator/estimate');
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      dispatch({ type: 'SET_STEP', payload: currentStep - 1 });
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex justify-between items-center mt-16 mb-10">
      <button
        onClick={goToPreviousStep}
        disabled={currentStep === 1}
        className={`flex items-center justify-center w-[134px] h-[53px] ${
          currentStep === 1
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-[#303668] hover:bg-[#252B50] transition-colors'
        } gap-[5px] rounded-lg`}
      >
        <svg
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[39px] h-[39px] rotate-180"
        >
          <path
            d="M10.25 19.5H29.75M29.75 19.5L21.625 11.375M29.75 19.5L21.625 27.625"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="text-[#F9F9F9] text-2xl font-semibold">Back</span>
      </button>

      <div className="text-white text-xl">
        Step {currentStep} of {totalSteps}
      </div>

      <button
        onClick={goToNextStep}
        className="flex items-center justify-center w-[134px] h-[53px] bg-[#913BFF] gap-[5px] rounded-lg hover:bg-[#7B32D5] transition-colors"
      >
        <span className="text-[#F9F9F9] text-2xl font-semibold">
          {currentStep === totalSteps ? 'Finish' : 'Next'}
        </span>
        <svg
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[39px] h-[39px]"
        >
          <path
            d="M10.25 19.5H29.75M29.75 19.5L21.625 11.375M29.75 19.5L21.625 27.625"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default FormNavigation; 