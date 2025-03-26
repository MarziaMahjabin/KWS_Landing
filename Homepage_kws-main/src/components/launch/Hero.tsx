import React, { useState } from "react";

const Hero = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Image data for each button type
  const images = [
    { id: "default", src: "/launch.png", alt: "Launch your startup illustration" },
    { id: "ai_agent", src: "/AI_agent.png", alt: "AI agent illustration" },
    { id: "startup", src: "/startup.png", alt: "Startup/SaaS illustration" },
    { id: "creative", src: "/Creative.png", alt: "Creative media illustration" },
  ];

  // Button gradient style for the main buttons - vertical gradient from top to bottom
  const buttonGradientStyle = "bg-gradient-to-b from-[#913BFF73] to-[#050D36E6] hover:opacity-90 transition-opacity";

  return (
    <section
      className="self-stretch mt-[101px] pt-[21px] px-[62px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5"
      aria-label="Hero Section"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-2/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-center text-[rgba(249,249,249,1)] mt-[35px] max-md:max-w-full max-md:mt-10">
            <div className="text-center max-w-md max-md:max-w-full">
              <h1 className="text-[45px] font-semibold max-md:text-[40px]">
                Launch Your Startup with Expert Support
              </h1>
              <h2 className="text-[32px] font-medium mt-[19px]">
                Just share your idea and
              </h2>
            </div>
            <div className="flex w-[341px] max-w-full flex-col items-center text-2xl font-normal mt-[30px] max-md:mt-10">
              <button 
                className={`self-stretch min-h-[55px] w-[264px] max-w-full gap-2.5 py-[13px] rounded-[45px] ${buttonGradientStyle} max-md:px-5`}
                onMouseEnter={() => setHoveredButton("ai_agent")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Build your AI agent
              </button>
              <button 
                className={`self-stretch min-h-[55px] w-[305px] max-w-full gap-2.5 mt-[20px] py-[13px] rounded-[45px] ${buttonGradientStyle}`}
                onMouseEnter={() => setHoveredButton("startup")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Build your startup/saas
              </button>
              <button 
                className={`self-stretch min-h-[55px] w-full gap-2.5 mt-[20px] py-[13px] rounded-[45px] ${buttonGradientStyle} max-md:px-5`}
                onMouseEnter={() => setHoveredButton("creative")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Build your creative media
              </button>
              <button className="self-stretch bg-[#913BFF] hover:opacity-90 transition-opacity gap-2.5 text-[15px] mt-[25px] px-[23px] py-[15px] rounded-md max-md:px-5">
                Get Started for $100
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full h-full items-center justify-center max-md:max-w-full max-md:mt-10 relative">
            {/* Render all images with opacity based on which is active */}
            {images.map((image) => (
              <div 
                key={image.id}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  opacity: image.id === hoveredButton || (image.id === "default" && !hoveredButton) ? 1 : 0,
                  transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                  transform: image.id === hoveredButton || (image.id === "default" && !hoveredButton) 
                    ? "scale(1)" 
                    : "scale(0.95)",
                  zIndex: image.id === hoveredButton || (image.id === "default" && !hoveredButton) ? 1 : 0
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg object-contain max-w-full h-auto"
                  loading={image.id === "default" ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
