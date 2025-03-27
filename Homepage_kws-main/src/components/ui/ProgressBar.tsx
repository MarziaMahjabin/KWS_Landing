import React from "react";

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = "",
}) => {
  return (
    <div className={`w-full h-[15px] bg-[#172258] rounded-[50px] ${className}`}>
      <div
        className="h-[15px] bg-[#913BFF] rounded-[50px] transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
