import React, { useState } from "react";
import { Button } from "./button";
import JobDetailsModal from "./JobDetailsModal";

interface JobCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  // Google Form links
  const applyFormLink = "https://forms.gle/yWyN3yhzKC7wyPq27";
  const earlyApplyFormLink = "https://forms.gle/oAD6LrbwXkzj9GsU7";
  
  const openDetails = () => {
    setIsDetailsModalOpen(true);
  };

  return (
    <>
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
              <img
                src={imageSrc}
                className="w-[90%] h-auto object-contain rounded-[10px]"
                alt={imageAlt}
              />
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
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex flex-col items-center justify-center gap-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <a 
              href={applyFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[320px] h-[60px] bg-[#913BFF] text-white text-xl font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              Apply Now
            </a>
            <button 
              onClick={openDetails}
              className="w-[320px] h-[60px] bg-[#913BFF] text-white text-xl font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-[50ms]"
            >
              Details
            </button>
            <a 
              href={earlyApplyFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[320px] h-[60px] bg-[#913BFF] text-white text-xl font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-[100ms] flex items-center justify-center"
            >
              Early Apply
            </a>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      {isDetailsModalOpen && (
        <JobDetailsModal
          title={title}
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}
    </>
  );
};

export default JobCard;
