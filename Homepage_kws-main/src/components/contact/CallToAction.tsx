
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-[#05084F] flex flex-col items-center justify-center mt-[211px] px-[70px] py-[100px] border-white relative max-md:max-w-full max-md:mt-10 max-md:px-5">
      {/* Background circular pattern */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 opacity-20">
        <div className="w-[400px] h-[400px] border-2 border-white rounded-full"></div>
        <div className="w-[300px] h-[300px] border-2 border-white rounded-full absolute"></div>
        <div className="w-[200px] h-[200px] border-2 border-white rounded-full absolute"></div>
      </div>
      
      {/* Floating icons */}
      <img 
        src="/lovable-uploads/6051deb7-fa25-464a-b924-7bae505df8c1.png" 
        alt="Key icon" 
        className="absolute w-12 h-12 left-[250px] top-[300px] animate-pulse"
      />
      <img 
        src="/lovable-uploads/6051deb7-fa25-464a-b924-7bae505df8c1.png" 
        alt="Email icon" 
        className="absolute w-14 h-14 right-[180px] top-[340px] animate-pulse"
      />
      <img 
        src="/lovable-uploads/6051deb7-fa25-464a-b924-7bae505df8c1.png" 
        alt="Shield icon" 
        className="absolute w-16 h-16 right-[120px] bottom-[120px] animate-pulse"
      />
      <img 
        src="/lovable-uploads/6051deb7-fa25-464a-b924-7bae505df8c1.png" 
        alt="Document icon" 
        className="absolute w-12 h-12 left-[120px] bottom-[130px] animate-pulse"
      />
      <img 
        src="/lovable-uploads/6051deb7-fa25-464a-b924-7bae505df8c1.png" 
        alt="Card icon" 
        className="absolute w-14 h-14 right-[320px] top-[130px] animate-pulse"
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Have project in mind? let's<br />make it happen.
        </h2>
        
        <Button 
          className="bg-[#913BFF] hover:bg-[#7B32D9] text-white px-10 py-6 rounded-md text-xl font-medium mt-4"
          onClick={() => window.location.href="#contact"}
        >
          contact us
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
