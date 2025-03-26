import React from "react";
import HeroSection from "@/components/contact/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import AppointmentSection from "@/components/contact/AppointmentSection";
import CallToAction from "@/components/contact/CallToAction";
import Footer from "@/components/layout/Footer";

const contact : React.FC = () => {
  return (
    <div className="bg-[rgba(5,13,54,1)] flex flex-col overflow-hidden items-stretch">
      <HeroSection />
      <ContactForm />
      <AppointmentSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default contact;
