import React from "react";

interface FloatingAIButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const FloatingAIButton: React.FC<FloatingAIButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#0A1829] border-2 border-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-[#172A46] transition-all duration-300 focus:outline-none z-50 ${
        isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
      }`}
      aria-label="Open AI Chat"
    >
      <div className="relative">
        <svg 
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500"
        >
          <path 
            d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" 
            fill="currentColor"
          />
          <path 
            d="M12 13.25V19.25"
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M19.25 9V16.25"
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M4.75 9V16.25"
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 19.25L19.25 15.25"
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 19.25L4.75 15.25"
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
      </div>
    </button>
  );
};

export default FloatingAIButton; 