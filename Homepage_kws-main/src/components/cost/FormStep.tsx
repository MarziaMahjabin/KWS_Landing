import React from 'react';
import OptionCard from './OptionCard';
import { CostOption, useCostCalculator } from '@/context/CostCalculatorContext';

type FormStepProps = {
  title: string;
  description: string;
  options: CostOption[];
  actionType: string;
  isMultiSelect?: boolean;
  icons?: Record<string, React.ReactNode>;
  selectedValue?: CostOption | null;
  selectedValues?: CostOption[];
};

const FormStep: React.FC<FormStepProps> = ({ 
  title, 
  description, 
  options, 
  actionType, 
  isMultiSelect = false,
  icons,
  selectedValue,
  selectedValues = []
}) => {
  const { dispatch } = useCostCalculator();

  const handleSingleSelect = (option: CostOption) => {
    dispatch({ type: actionType as any, payload: option });
  };

  const handleMultiSelect = (option: CostOption) => {
    dispatch({ type: actionType as any, payload: option });
  };

  const isOptionSelected = (option: CostOption): boolean => {
    if (isMultiSelect) {
      return selectedValues.some(item => item.id === option.id);
    } else {
      return selectedValue?.id === option.id;
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-gray-300 text-xl mb-8">{description}</p>
      
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSelected={isOptionSelected(option)}
            onClick={isMultiSelect ? () => handleMultiSelect(option) : () => handleSingleSelect(option)}
            icon={icons && icons[option.id]}
            isMultiSelect={isMultiSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default FormStep; 