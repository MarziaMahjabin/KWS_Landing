import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/0Vnzn0vh/Frame-1171276022.png')] bg-center w-full  items-center  bg-cover  rounded-xl flex md:justify-center lg:justify-between relative md:pt-20 lg:pt-[20px] xl:pt-[40px] lg:pb-10 px-[97px] max-md:flex-col max-md:px-5 max-md:py-[60px] lg:px-10">
      <div className="flex flex-col gap-[13px]">
        <h1 className="text-[#F9F9F9] font-bold text-[44px] font-bold max-sm:text-[32px] text-center lg:text-start">
          Join our Team
        </h1>
        <div className="text-lg text-white capitalize md:pb-14 font-semibold">
          <span>Home - project -</span>
          <span className="text-[#913BFF]">join our team</span>
        </div>
      </div>
      <div className="hidden lg:block w-6/12 h-[296px] xl:h-[350px] relative max-md:w-full max-md:h-[300px] max-sm:h-[200px]">
        <div className="bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/b1003ae4f94e0198d1efa568d2b9a9122be2360c')] w-full h-full flex items-center justify-center bg-cover bg-center rounded-xl">
          <div>
            <svg
              width="196"
              height="196"
              viewBox="0 0 196 196"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="play-button"
              style={{ width: "196px", height: "196px", cursor: "pointer" }}
            >
              <path
                d="M97.6667 181.667C143.874 181.667 181.333 144.208 181.333 98.0006C181.333 51.7928 143.874 14.334 97.6667 14.334C51.4588 14.334 14 51.7928 14 98.0006C14 144.208 51.4588 181.667 97.6667 181.667Z"
                fill="white"
                stroke="url(#paint0_linear_18_493)"
                strokeWidth="4"
              ></path>
              <path
                d="M125.45 106.62L87.0332 129.301C80.8494 132.953 73.25 128.2 73.25 120.682V75.3191C73.25 67.8013 80.8494 63.0493 87.0332 66.7002L125.45 89.3818C131.813 93.1387 131.813 102.863 125.45 106.62Z"
                fill="url(#paint1_linear_18_493)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_18_493"
                  x1="97.6667"
                  y1="16.334"
                  x2="97.6667"
                  y2="179.667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#24EAE0"></stop>
                  <stop offset="0.725" stopColor="#13124A"></stop>
                  <stop offset="1" stopColor="#13124A"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_18_493"
                  x1="101.736"
                  y1="65.4453"
                  x2="101.736"
                  y2="130.556"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#07C2FF"></stop>
                  <stop offset="1" stopColor="#130A6A"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
