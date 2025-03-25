import { useState } from "react";

const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full bg-[#0B174B] py-[100px] border-[0.4px] border-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/star.svg"
          alt=""
          className="absolute right-[226px] top-[163px] w-[71px] h-[71px]"
        />
        <img
          src="/src/assets/images/star.svg"
          alt=""
          className="absolute left-[131px] top-[488px] w-[85px] h-[83px]"
        />
        <img
          src="/src/assets/images/star.svg"
          alt=""
          className="absolute left-[841px] top-[457px] w-[83px] h-[84px]"
        />
        <img
          src="/src/assets/images/star.svg"
          alt=""
          className="absolute left-[363px] top-[421px] w-[67px] h-[67px]"
        />
        <img
          src="/src/assets/images/star.svg"
          alt=""
          className="absolute left-[141px] top-[152px] w-[89px] h-[93px]"
        />
        <img
          src="/src/assets/images/placeholder.svg"
          alt=""
          className="absolute left-[513px] top-[69px] w-[435px] h-[436px] opacity-20"
        />
        <img
          src="/src/assets/images/star.svg"
          alt=""
          className="absolute right-[192px] top-[467px] w-[70px] h-[71px]"
        />
      </div>
      <div className="flex flex-col items-center gap-[34px] max-w-[898px] mx-auto px-5 relative z-10">
        <h2 className="text-[#F9F9F9] text-6xl font-bold text-center leading-[1.2] max-md:text-5xl max-sm:text-4xl">
          have project in mind? let's make it happen.
        </h2>
        <button
          className={`bg-[#913BFF] text-[#F9F9F9] text-lg font-semibold cursor-pointer px-[30px] py-[18px] rounded-md transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          contact us
        </button>
      </div>
    </section>
  );
};

export default CTA;
