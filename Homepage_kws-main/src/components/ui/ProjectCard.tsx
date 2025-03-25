import React, { ReactNode, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  logo: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col h-full rounded-xl overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative w-full h-full flex flex-col rounded-xl overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          background: "linear-gradient(135deg, rgba(5, 13, 54, 1) 0%, rgba(145, 59, 255, 0.17) 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: isHovered ? "0.5px solid #913BFF" : "0.5px solid transparent",
        }}
      >
        <div className="bg-white w-[90%] mx-auto mt-4 rounded-lg flex flex-col items-center justify-center py-5">
          <div className="flex min-h-[150px] items-center justify-center">
            {logo}
          </div>
        </div>
        
        <div className="p-6 pt-5 flex-grow">
          <h3 className="text-[#FFFFFF] text-[28px] font-semibold">{title}</h3>
          <p className="text-[#E2E2E2] text-lg font-normal leading-[23px] mt-3">
            {description}
          </p>
        </div>

        {/* Hover overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center gap-4 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        >
          <a 
            href="#" 
            className="bg-[#913BFF] text-white px-4 py-2 rounded transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
          >
            Live Site
          </a>
          <a 
            href="#" 
            className="bg-[#913BFF] text-white px-4 py-2 rounded transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-75"
          >
            Figma
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 