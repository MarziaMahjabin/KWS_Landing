import React, { ReactNode } from 'react';
import { CostOption } from '@/context/CostCalculatorContext';

type OptionCardProps = {
  option: CostOption;
  isSelected: boolean;
  onClick: () => void;
  icon?: ReactNode;
  isMultiSelect?: boolean;
};

const OptionCard: React.FC<OptionCardProps> = ({
  option,
  isSelected,
  onClick,
  icon,
  isMultiSelect = false
}) => {
  return (
    <div
      className={`flex flex-col text-white p-5 rounded-[30px] cursor-pointer transition-all duration-200 
        ${isSelected 
          ? 'border-2 border-[#A35AFF] bg-[linear-gradient(0deg,rgba(145,59,255,0.40),rgba(145,59,255,0.40))]'
          : 'bg-[linear-gradient(0deg,rgba(145,59,255,0.30),rgba(145,59,255,0.30))] hover:bg-[linear-gradient(0deg,rgba(145,59,255,0.35),rgba(145,59,255,0.35))]'
        }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        {icon && <div className="text-4xl">{icon}</div>}
        {isMultiSelect && (
          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${isSelected ? 'border-[#A35AFF] bg-[#A35AFF]' : 'border-white'}`}>
            {isSelected && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
        <p className="text-gray-300 mt-auto">
          {option.cost > 0 ? `+$${option.cost}` : 'Included'}
        </p>
      </div>
    </div>
  );
};

export default OptionCard; 