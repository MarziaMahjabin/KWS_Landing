import React, { useState } from "react";

const FeaturedWork: React.FC = () => {
  // State to track which project is active (null means all projects are shown)
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Project data for the three featured works
  const projects = [
    {
      id: 1,
      title: "Research Buddy",
      logo: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/15707f80f61c82bad3c71934895727c11a4555d9?placeholderIfAbsent=true",
      description: "A collaborative platform for researchers to connect, share projects, and foster groundbreaking discoveries through a seamless interface."
    },
    {
      id: 2,
      title: "NFT Closet X",
      logo: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/9399d3a22806e9628be2b10fcaac1a04eda59b81?placeholderIfAbsent=true",
      description: "A pioneering NFT marketplace where fashion meets blockchain, allowing users to mint, trade, and explore digital fashion collections."
    },
    {
      id: 3,
      title: "DATAM",
      logo: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/54610cc2a04118696934b1084325ea1bcd68ab9b?placeholderIfAbsent=true",
      description: "A cutting-edge data analysis and management tool designed to empower businesses with actionable insights and efficient workflows."
    }
  ];

  // Handler for project clicks
  const handleProjectClick = (index: number) => {
    // If clicking the already active project, reset to show all projects
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section className="w-full flex flex-col items-center bg-[#0B0F2F] pt-10 px-2 md:px-5 lg:px-10">
      
      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex flex-col space-y-3 text-white">
        <h2 className="text-[25px] lg:text-[48px] text-center md:text-start font-semibold leading-none ">
            Featured Work
          </h2>
          <p className="md:pr-40 text-[17px] lg:text-[23px] text-center md:text-start leading-[35px] mt-[26px] ">
            Explore our groundbreaking projects that push boundaries and
            redefine innovation.
            <br />
          </p>
        </div>
{/* right */}
<div className="md:flex items-center gap-[15px] mt-[21px] hidden ">
          <button
            aria-label="Previous work"
            className="border self-stretch flex min-h-20 items-center gap-2.5 w-20 my-auto px-[34px] py-[29px] border-white border-solid max-md:px-5 hover:bg-[rgba(145,59,255,0.2)] transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/bfb5167fa2c2a9d758ed3810a59639d89bde1f6e?placeholderIfAbsent=true"
              alt="Left arrow"
              className="aspect-[0.55] object-contain w-3 self-stretch my-auto"
            />
          </button>
          <button
            aria-label="Next work"
            className="border self-stretch flex min-h-20 items-center gap-2.5 w-20 my-auto px-[34px] py-[29px] border-white border-solid max-md:px-5 hover:bg-[rgba(145,59,255,0.2)] transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4c8a7755dcb44433d6acf16ae8c4744982efa81a?placeholderIfAbsent=true"
              alt="Right arrow"
              className="aspect-[0.55] object-contain w-3 self-stretch my-auto"
            />
          </button>
        </div>

      </div>
      
      
      
      
      
      {/* <div className="flex w-full max-w-[1294px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full ">
        <div className="text-white">
          <h2 className="text-[25px] lg:text-[48px] text-center lg:text-start font-semibold leading-none ">
            Featured Work
          </h2>
          <p className="text-[17px] lg:text-[23px] text-center lg:text-start leading-[35px] mt-[26px] ">
            Explore our groundbreaking projects that push boundaries and
            redefine innovation.
            <br />
          </p>
        </div>
        <div className="md:flex items-center gap-[15px] mt-[21px] hidden ">
          <button
            aria-label="Previous work"
            className="border self-stretch flex min-h-20 items-center gap-2.5 w-20 my-auto px-[34px] py-[29px] border-white border-solid max-md:px-5 hover:bg-[rgba(145,59,255,0.2)] transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/bfb5167fa2c2a9d758ed3810a59639d89bde1f6e?placeholderIfAbsent=true"
              alt="Left arrow"
              className="aspect-[0.55] object-contain w-3 self-stretch my-auto"
            />
          </button>
          <button
            aria-label="Next work"
            className="border self-stretch flex min-h-20 items-center gap-2.5 w-20 my-auto px-[34px] py-[29px] border-white border-solid max-md:px-5 hover:bg-[rgba(145,59,255,0.2)] transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4c8a7755dcb44433d6acf16ae8c4744982efa81a?placeholderIfAbsent=true"
              alt="Right arrow"
              className="aspect-[0.55] object-contain w-3 self-stretch my-auto"
            />
          </button>
        </div>
      </div> */}

      <div className="w-full  mt-[10px] ">
        <div className="gap-5 flex transition-all duration-500 ease-in-out max-md:flex-col">
          {/* Render project cards conditionally based on activeProject state */}
          {projects.map((project, index) => {
            const isActive = activeProject === index;
            return (
              <div
                key={project.id}
                className={`
                  transition-all duration-500 ease-in-out cursor-pointer
                  ${activeProject === null 
                    ? 'w-1/3' 
                    : activeProject === index 
                      ? 'w-[30%]' 
                      : 'w-0 opacity-0 overflow-hidden'
                  }
                  max-md:w-full max-md:ml-0
                `}
                onClick={() => handleProjectClick(index)}
              >
                <div 
                  className="flex flex-col h-full rounded-xl overflow-hidden relative"
                >
                  <div 
                    className="relative w-full h-full flex flex-col rounded-xl overflow-hidden transition-all duration-300 ease-in-out min-h-[400px]"
                    style={{
                      background: "linear-gradient(135deg, rgba(5, 13, 54, 1) 0%, rgba(145, 59, 255, 0.17) 100%)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      border: isActive ? "0.5px solid #913BFF" : "0.5px solid transparent",
                    }}
                  >
                    <div className="bg-white w-[90%] mx-auto mt-4 rounded-lg flex flex-col items-center justify-center py-5">
                      <div className="flex min-h-[150px] items-center justify-center">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="w-[90px] object-contain"
                        />
                      </div>
                      <div className="mt-2 text-[rgba(5,13,54,1)] text-2xl font-semibold">
                        {project.title}
                      </div>
                    </div>
                    
                    <div className="p-6 pt-5 flex-grow">
                      <h3 className="text-[#FFFFFF] text-[28px] font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-[#E2E2E2] text-lg font-normal leading-[23px] mt-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Details panel that appears when a project is clicked */}
          {activeProject !== null && (
            <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0 animate-fade-in transition-all duration-500 ease-in-out">
              <div 
                className="flex flex-col min-h-[402px] p-8 rounded-xl text-white transition-all duration-300 ease-in-out relative"
                style={{
                  background: "linear-gradient(135deg, rgba(5, 13, 54, 1) 0%, rgba(145, 59, 255, 0.17) 100%)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  border: "0.5px solid #913BFF",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[40px] font-semibold leading-none">
                    {projects[activeProject].title}
                  </h3>
                  <button 
                    className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(null);
                    }}
                    aria-label="Close details"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-[23px] font-medium leading-[35px] text-[#E2E2E2]">
                  {projects[activeProject].description}
                </div>
                <div className="mt-6 flex gap-4">
                  <a 
                    href="#" 
                    className="bg-[#913BFF] text-white px-6 py-3 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#050D36] transition-all duration-300 ease-in-out"
                  >
                    Figma
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
