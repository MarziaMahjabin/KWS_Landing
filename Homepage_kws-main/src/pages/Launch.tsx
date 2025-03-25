import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/launch/Hero";
import Services from "@/components/launch/Services";
import ProgressTrack from "@/components/launch/ProgressTrack";
import HowItWorks from "@/components/launch/HowItWorks";
import Investment from "@/components/launch/Investment";
import ProjectCalculator from "@/components/home/ProjectCalculator";

const Launch = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <ProgressTrack />
      <div className="self-stretch flex w-full flex-col items-stretch pl-20 max-md:max-w-full max-md:pl-5">
        <HowItWorks />
        <Investment />
      </div>
      <ProjectCalculator />
    </Layout>
  );
};

export default Launch; 