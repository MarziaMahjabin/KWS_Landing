import React from "react";
import { useNavigate } from "react-router-dom";

export const ThankYouSection: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate('/cost-calculator/form');
  };
  
  return (
    <section className="flex flex-col gap-[25px] mt-[50px] max-sm:mt-[30px]">
      <div 
        className="flex items-center gap-2.5 text-[#913BFF] text-2xl font-semibold cursor-pointer group"
        onClick={handleGoBack}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:scale-110 transition-transform"
        >
          <circle cx="22.5" cy="22.5" r="21" stroke="#913BFF" strokeWidth="1.5"/>
          <path
            d="M10.25 19.5H29.75M10.25 19.5L18.375 11.375M10.25 19.5L18.375 27.625"
            stroke="#913BFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="group-hover:underline">THANK YOU</span>
      </div>
      <h1 className="text-white text-[58px] font-semibold max-md:text-5xl max-sm:text-4xl">
        Your Estimate Is Nearly Ready!
      </h1>
      <div className="text-[22px] font-medium max-md:text-xl max-sm:text-lg">
        <span className="text-[#913BFF]">Schedule A Call</span>
        <span className="text-white">
          {" "}
          To Kickstart Your Project Without Delay. All Estimates Are Approximate
        </span>
      </div>
    </section>
  );
};
