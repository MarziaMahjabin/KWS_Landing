import React from "react";

const AppointmentSection: React.FC = () => {
  return (
    <section className="self-center w-full max-w-[1286px] ml-5 mt-[73px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch text-white my-auto max-md:max-w-full max-md:mt-10">
            <h2 className="text-4xl font-bold mr-[23px] max-md:max-w-full max-md:mr-2.5">
              Schedule appointment with us
            </h2>
            <p className="text-2xl font-medium mt-[18px] max-md:max-w-full">
              Choose a convenient date and time, and let's talk! Our team is
              ready to discuss your ideas and help you navigate the future of
              tech.🚀 Let's Build the Future Together!
            </p>
            <button
              className="bg-[rgba(145,59,255,1)] min-h-[55px] gap-2.5 text-[19px] font-semibold leading-none mt-[41px] px-8 py-[18px] rounded-md max-md:mt-10 max-md:px-5 hover:bg-purple-700 transition-colors"
              onClick={() => window.open("#schedule", "_blank")}
            >
              Book appointment
            </button>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/5221ee6ee30b88a97f3118aaad5986b0cf2cb526?placeholderIfAbsent=true"
            className="aspect-[1.27] object-contain w-full grow max-md:max-w-full max-md:mt-10"
            alt="Appointment illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
