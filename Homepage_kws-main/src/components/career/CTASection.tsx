import React from "react";

const CTASection: React.FC = () => {
  return (
    <div className="relative bg-[#0B174B] mt-[100px] px-0 py-[100px] border-[0.4px] border-solid border-white max-md:mt-[50px]">
      <div className="bg-[pattern-2] relative h-[643px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19134fce536c530ce94a32aa596eca1e96c3bba5"
          alt=""
          className="absolute"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe28790020453f5ab3801861981f195ddf00374"
          alt=""
          className="absolute"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/476e74c7a956e66ba8f96664c833c405aed98c8f"
          alt=""
          className="absolute"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1123bbdcb00e5e50703ebf4a2a3cac788fd02357"
          alt=""
          className="absolute"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5fb125653a4f2cedab48bee86bb0e2fa5b56766"
          alt=""
          className="absolute"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/914100c3a9e871294f9ea2d38c2027031ddc9213"
          alt=""
          className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/483d030faaab88d9c4e8a12b7f8761930ae7242c"
          alt=""
          className="absolute"
        />
      </div>
      <div className="absolute -translate-x-2/4 -translate-y-2/4 text-center left-2/4 top-2/4">
        <h2 className="text-[#F9F9F9] text-6xl font-bold max-w-[898px] mb-[34px] max-sm:text-4xl">
          have project in mind? let's make it happen.
        </h2>
        <button className="text-[#F9F9F9] text-lg cursor-pointer bg-[#913BFF] px-[30px] py-[18px] rounded-md">
          contact us
        </button>
      </div>
    </div>
  );
};

export default CTASection;
