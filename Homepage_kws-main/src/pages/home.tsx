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
    <div className="bg-[rgba(5,13,54,1)] overflow-hidden pt-[7px] pb-[477px] max-md:pb-[100px]">
      <Hero />
      <div className="relative">
        <Banner />
        <div className="flex w-full flex-col items-stretch mt-[170px] pl-[62px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
          <Partners />
          <About />
          <StartupSupport />
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-[132px] pl-7 max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <Services />
        <FeaturedWork />
        <ProjectCalculator />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
