import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="absolute flex flex-row justify-center items-center overflow-hidden py-0 px-[1px] gap-[10px] w-[100vw] h-[74.39px] left-0 top-[520px] bg-[#913BFF] transform rotate-[-8deg] z-10 -translate-x-[0%]">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-[40px] text-white font-dotted inline-block mr-8">
        KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW        </span>
        <span className="text-[40px] text-white font-dotted inline-block mr-8">
        KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW   KWS PIONEERING TECH FOR A BETTER TOMORROW | KWS PIONEERING TECH FOR A BETTER TOMORROW     </span>
      </div>
    </div>
  );
};

export default Banner;
