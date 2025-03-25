import React, { useState } from "react";

const ProgressTrack = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section
      className="flex flex-col items-center"
      aria-label="Progress Track System"
    >
      <h2 className="text-[rgba(249,249,249,1)] text-[50px] font-semibold text-center mt-[104px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        progress track system
      </h2>
      <div className="relative flex min-h-14 w-[505px] max-w-full flex-col items-stretch text-lg text-white whitespace-nowrap justify-center mt-12 px-1 py-[5px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/cdea9892e8925048807e584859e91ee190b3bc77?placeholderIfAbsent=true"
          className="aspect-[9.01] object-contain w-[505px] absolute z-0 h-14 rounded-[0px_0px_0px_0px] right-0 bottom-0"
          alt="Tab background"
        />
        <div className="z-0 flex w-full items-center gap-[40px_45px] justify-center flex-wrap px-0.5 max-md:max-w-full">
          <button
            className={`self-stretch min-h-[47px] gap-2 font-medium text-center my-auto px-4 py-[13px] rounded-lg ${activeTab === "dashboard" ? "bg-[rgba(145,59,255,0.3)]" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            dashboard
          </button>
          <div className="self-stretch flex min-w-60 items-center gap-[40px_45px] font-semibold flex-1 shrink basis-8 my-auto">
            <button
              className={
                activeTab === "feed" ? "text-[rgba(145,59,255,1)]" : ""
              }
              onClick={() => setActiveTab("feed")}
            >
              Feed
            </button>
            <button
              className={
                activeTab === "projects" ? "text-[rgba(145,59,255,1)]" : ""
              }
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={
                activeTab === "management" ? "text-[rgba(145,59,255,1)]" : ""
              }
              onClick={() => setActiveTab("management")}
            >
              Management
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex w-full flex-col items-stretch mt-[104px] pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <div className="items-stretch backdrop-blur-[21px] flex min-h-[760px] w-full max-w-[1236px] flex-col justify-center px-7 py-[29px] rounded-xl border-[0.1px] border-solid border-white max-md:max-w-full max-md:px-5">
          <div
            className="bg-[rgba(217,217,217,0.3)] flex min-h-[702px] w-full rounded-lg"
            aria-label="Dashboard preview"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgressTrack;
