import React from "react";
import Hero from "@/components/home/Hero";
import Banner from "@/components/home/Banner";
import Partners from "@/components/home/Partners";
import About from "@/components/home/About";
import StartupSupport from "@/components/home/StartupSupport";
import Services from "@/components/home/Services";
import FeaturedWork from "@/components/home/FeaturedWork";
import ProjectCalculator from "@/components/home/ProjectCalculator";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-[rgba(5,13,54,1)] overflow-hidden pt-[7px]">
      <Hero />
      <div className="relative">

        <div className="flex w-full flex-col items-stretch mt-[180px]  max-md:mt-14">
          <Partners />
          <About />
          <StartupSupport />
        </div>
      </div>
      {/* pl-7 max-md:max-w-full max-md:mt-10 max-md:pl-5 */}
      <div className="flex w-full flex-col items-center md:mt-[132px]">
        <Services />
        <FeaturedWork />
        <ProjectCalculator />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
