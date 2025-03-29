import React from "react";
import HeroSection from "@/components/contact/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import AppointmentSection from "@/components/contact/AppointmentSection";
import CallToAction from "@/components/contact/CallToAction";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";

const contact: React.FC = () => {
  return (
    <div className="bg-[rgba(5,13,54,1)] flex flex-col overflow-hidden ">
      <div className="p-3 md:p-5 lg:p-8">
        <Navbar />
      </div>

      <div className="bg-[rgba(5,13,54,1)] flex flex-col overflow-hidden items-stretch">
        <HeroSection />
        <ContactForm />
        <AppointmentSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default contact;
