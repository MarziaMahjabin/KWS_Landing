import React from 'react';
import { useCostCalculator } from '@/context/CostCalculatorContext';

const SummaryPanel: React.FC = () => {
  const { state } = useCostCalculator();
  const { 
    totalCost, 
    maintenanceCost,
    industry,
    productVersion,
    platforms,
    loginOptions,
    userInterface,
    thirdPartyIntegrations,
    cms,
    functionality,
    communication,
    userRoles,
    timeline,
    deployment 
  } = state;

  // Calculate min and max with 20% buffer
  const minCost = Math.floor(totalCost * 0.9);
  const maxCost = Math.ceil(totalCost * 1.2);

  // Get all selected options as tags
  const getSelectedTags = () => {
    const tags = [];
    
    if (industry) tags.push(industry);
    if (productVersion) tags.push(productVersion);
    tags.push(...platforms);
    tags.push(...loginOptions);
    if (userInterface) tags.push(userInterface);
    tags.push(...thirdPartyIntegrations);
    if (cms) tags.push(cms);
    tags.push(...functionality);
    tags.push(...communication);
    tags.push(...userRoles);
    if (timeline) tags.push({...timeline, title: `Timeline: ${timeline.title}`});
    tags.push(...deployment.filter(d => !(d as any).isMonthly));
    
    return tags;
  };

  const selectedTags = getSelectedTags();

  return (
    <div className="bg-[#0D1C54] rounded-3xl p-6 sticky top-8">
      <h2 className="text-2xl font-bold text-white mb-6">Project Summary</h2>
      
      <div className="mb-8">
        <h3 className="text-xl text-white mb-4">Estimated Cost</h3>
        <div className="text-3xl font-bold text-white mb-2">
          ${minCost.toLocaleString()} – ${maxCost.toLocaleString()}
        </div>
        {maintenanceCost > 0 && (
          <div className="text-gray-300 text-sm">
            + ${maintenanceCost.toLocaleString()}/month maintenance
          </div>
        )}
      </div>
      
      {selectedTags.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl text-white mb-4">Selected Features</h3>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag, index) => (
              <div 
                key={`${tag.id}-${index}`}
                className="bg-[#2A3A7B] text-white px-3 py-1 rounded-full text-sm"
              >
                {tag.title}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button 
        className="w-full bg-[#913BFF] text-white py-3 rounded-lg font-semibold hover:bg-[#7B32D5] transition-colors"
        disabled={selectedTags.length === 0}
      >
        Get Detailed Proposal
      </button>
    </div>
  );
};

export default SummaryPanel; 