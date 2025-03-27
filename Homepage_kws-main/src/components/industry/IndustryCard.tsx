import React from "react";

interface IndustryCardProps {
  title: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  icon,
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center gap-[45px] bg-[linear-gradient(0deg,rgba(145,59,255,0.30),rgba(145,59,255,0.30))] px-[25px] py-8 rounded-[30px] cursor-pointer transition-all duration-200 hover:bg-[linear-gradient(0deg,rgba(145,59,255,0.40),rgba(145,59,255,0.40))] ${isSelected ? "border-2 border-[#A35AFF]" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-end gap-[15px]">
        <div>{icon}</div>
        <div className="text-white text-[26px] font-semibold leading-[38px]">
          {title}
        </div>
      </div>
      {isSelected && (
        <div>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[52px] h-[52px]"
          >
            <path
              d="M11.4399 27.0397L21.1473 36.3997L40.5599 17.6797"
              stroke="#A35AFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default IndustryCard;
