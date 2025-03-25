import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { Promises } from "@/components/sections/Promises";
import { ContactCTA } from "@/components/sections/ContactCTA";

const AboutUsPage = () => {
  return (
    <div className="bg-[rgba(5,13,54,1)] flex flex-col overflow-hidden items-stretch pb-[463px] max-md:pb-[100px]">
      <div className="flex flex-col relative min-h-[628px] w-full pt-[45px] pb-[130px] px-[54px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/165aac82c429e58a36ed2d7b03bc14f8b154fa75?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background"
        />
        <Navbar />
        <Hero />
      </div>

      <main>
        <AboutUs />
        <Promises />
        <ContactCTA />
      </main>

      <Footer />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fb0831487ee689dd5bb600aece3b3dd24637e16?placeholderIfAbsent=true"
        className="aspect-[1.1] object-contain w-[21px] mt-[-119px] mr-[296px] max-md:mr-2.5"
        alt="Decoration"
      />
    </div>
  );
};

export default AboutUsPage;
