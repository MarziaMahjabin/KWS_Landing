import React, { useState } from "react";

const FeaturedWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleProjectClick = (index: number) => {
    if (activeProject === index) {
      setShowDetail(false);
      setTimeout(() => setActiveProject(null), 300);
    } else {
      setActiveProject(index);
      setShowDetail(true);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Research Buddy",
      logo: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/15707f80f61c82bad3c71934895727c11a4555d9?placeholderIfAbsent=true",
      description:
        "A collaborative platform for researchers to connect, share projects, and foster groundbreaking discoveries through a seamless interface.",
    },
    {
      id: 2,
      title: "NFT Closet X",
      logo: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/9399d3a22806e9628be2b10fcaac1a04eda59b81?placeholderIfAbsent=true",
      description:
        "A pioneering NFT marketplace where fashion meets blockchain, allowing users to mint, trade, and explore digital fashion collections.",
    },
    {
      id: 3,
      title: "DATAM",
      logo: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/54610cc2a04118696934b1084325ea1bcd68ab9b?placeholderIfAbsent=true",
      description:
        "A cutting-edge data analysis and management tool designed to empower businesses with actionable insights and efficient workflows.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center bg-[#0B0F2F] pt-10 px-3 md:px-5 lg:px-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
        <div className="flex flex-col space-y-3 text-white w-full md:w-2/3">
          <h2 className="text-[25px] lg:text-[48px] text-center md:text-start font-semibold">
            Featured Work
          </h2>
          <p className="text-[17px] lg:text-[23px] text-center md:text-start leading-[35px] mt-3">
            Explore our groundbreaking projects that push boundaries and
            redefine innovation.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4 mt-5 md:mt-0">
          <button className="border px-6 py-4 border-white hover:bg-[rgba(145,59,255,0.2)] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/bfb5167fa2c2a9d758ed3810a59639d89bde1f6e"
              alt="Left"
              className="w-3"
            />
          </button>
          <button className="border px-6 py-4 border-white hover:bg-[rgba(145,59,255,0.2)] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4c8a7755dcb44433d6acf16ae8c4744982efa81a"
              alt="Right"
              className="w-3"
            />
          </button>
        </div>
      </div>

      {/* Cards + Detail Panel */}
      <div className="w-full mt-10">
        <div className="flex flex-col md:flex-row gap-5 transition-all duration-500 ease-in-out">
          {/* Cards */}
          <div
            className={`flex flex-col md:flex-row gap-5 transition-all duration-500 ease-in-out ${
              activeProject !== null
                ? "md:flex-[0.40] lg:flex-[0.35]"
                : "w-full"
            }`}
          >
            {projects.map((project, index) => {
              const isActive = activeProject === index;

              // Only render this card if it's selected or if no project is selected
              if (activeProject !== null && !isActive) return null;

              return (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(index)}
                  className="cursor-pointer transform transition-all duration-500"
                >
                  <div
                    className="flex flex-col h-full rounded-xl overflow-hidden min-h-[400px]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(5,13,54,1) 0%, rgba(145,59,255,0.17) 100%)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      border: isActive
                        ? "0.5px solid #913BFF"
                        : "0.5px solid transparent",
                    }}
                  >
                    <div className="bg-white w-[90%] mx-auto mt-4 rounded-lg flex flex-col items-center justify-center py-5">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-[90px] object-contain"
                      />
                      <h4 className="mt-2 text-[#050D36] text-2xl font-semibold">
                        {project.title}
                      </h4>
                    </div>
                    <div className="p-6 pt-5 flex-grow">
                      <h3 className="text-white text-[18px] lg:text-[28px] font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-[#E2E2E2] text-lg leading-[23px] mt-3 md:hidden lg:block">
                        {project.description}
                      </p>
                      <p className="text-[#E2E2E2] text-lg leading-[23px] mt-3 hidden md:block lg:hidden">
                        {project.description.slice(0, 98)}...
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          {activeProject !== null && (
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                showDetail
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0"
              } w-full md:flex-[0.60] lg:flex-[0.65]`}
            >
              <div
                className="rounded-xl p-8 text-white min-h-[400px]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(5,13,54,1) 0%, rgba(145,59,255,0.17) 100%)",
                  border: "1px solid #913BFF",
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-semibold">
                    {projects[activeProject].title}
                  </h3>
                  <button
                    onClick={() => {
                      setShowDetail(false);
                      setTimeout(() => setActiveProject(null), 300);
                    }}
                    className="text-white text-xl hover:text-gray-400 transition-all"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-lg text-gray-300">
                  {projects[activeProject].description}
                </p>
                <div className="mt-6 flex gap-4 flex-wrap">
                  <a
                    href="#"
                    className="bg-[#913BFF] text-white px-6 py-3 rounded hover:scale-105 transition-transform"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-[#050D36] transition-all"
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
