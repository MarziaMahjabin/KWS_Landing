import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/career/HeroSection";
import TeamPositions from "@/components/career/TeamPositions";
import CTASection from "@/components/career/CTASection";
import Footer from "@/components/layout/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

const Career = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=ABeeZee&family=ADLaM+Display&display=swap"
        rel="stylesheet"
      />
      <div className="relative w-full overflow-hidden bg-[#050D36]">
        <BackgroundPattern />
        <div className="relative z-10">
          <header className="flex flex-col relative min-h-[100px] w-full items-center px-[52px] py-9 max-md:max-w-full max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/098309ac97e65ec258a25bb3581fe8df1f323b15?placeholderIfAbsent=true"
              alt="Header background"
              className="absolute h-full w-full object-cover inset-0"
            />
            <Navbar />
          </header>
          <main>
            <HeroSection />
            <TeamPositions />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Career;
