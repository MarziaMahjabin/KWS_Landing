import React from "react";

const CTASection: React.FC = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/0yjFptW9/Frame-432.png')] border-b-2 border-t-2 border-[#888787] bg-center bg-[#0b174b] py-20 lg:py-40 w-full bg-no-repeat  relative  lg:mt-[10px] px-0  ">
      {/* <div className="bg-[pattern-2] relative h-[643px]">
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
      </div> */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="capitalize text-[#F9F9F9] text-2xl text-center lg:text-4xl font-bold  mb-[34px] px-3">
          have project in mind? let's make it happen.
        </h2>
        <button className="text-[#F9F9F9] text-lg cursor-pointer bg-[#913BFF] capitalize px-4 py-2 lg:px-[30px] lg:py-[18px] rounded-md">
          contact us
        </button>
      </div>
    </div>
  );
};

export default CTASection;
