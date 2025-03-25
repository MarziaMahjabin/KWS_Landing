import React from "react";

const CostEstimator: React.FC = () => {
  return (
    <div className="w-full max-w-[1295px] mt-[274px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[57%] max-md:w-full max-md:ml-0">
          <div className="w-full mt-[53px] max-md:max-w-full max-md:mt-10">
            <div className="w-full max-md:max-w-full">
              <h2 className="text-[rgba(249,249,249,1)] text-[55px] font-semibold max-md:max-w-full max-md:text-[40px]">
                product cost estimator
              </h2>
              <p className="text-white text-3xl font-normal mt-2.5 max-md:max-w-full">
                Answer several questions and get a free estimate, including:
              </p>
            </div>
            <div className="flex w-full gap-[40px_42px] text-xl text-white font-normal flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
              <div className="grow shrink w-[164px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba14379dbda7c6a8cb57d7cee0f4b2fc8548a51?placeholderIfAbsent=true"
                  alt="Time icon"
                  className="aspect-[1] object-contain w-[25px]"
                />
                <div className="mt-3">
                  <span className="font-medium text-white">
                    The estimated time
                  </span>
                  <br />
                  to launch the product
                </div>
              </div>
              <div className="grow shrink w-[164px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b6eb1dceead397d1ba7f06889c36a0d4a88819?placeholderIfAbsent=true"
                  alt="Feature icon"
                  className="aspect-[1] object-contain w-[25px]"
                />
                <div className="mt-3">
                  <span className="font-medium text-white">
                    The estimated time
                  </span>
                  <br />
                  to launch the product
                </div>
              </div>
              <div className="grow shrink w-[164px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8b6eb1dceead397d1ba7f06889c36a0d4a88819?placeholderIfAbsent=true"
                  alt="Cost icon"
                  className="aspect-[1] object-contain w-[25px]"
                />
                <div className="mt-3">
                  <span className="font-medium text-white">
                    The estimated time
                  </span>
                  <br />
                  to launch the product
                </div>
              </div>
            </div>
            <button className="bg-[rgba(145,59,255,1)] flex min-h-[63px] w-[209px] max-w-full items-center gap-[5px] text-2xl text-[rgba(249,249,249,1)] font-semibold justify-center mt-[50px] px-[11px] py-3 rounded-lg max-md:mt-10">
              <div className="self-stretch flex items-center gap-[5px] my-auto">
                <div className="self-stretch my-auto">get started</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96274e7fa2681cc132660728117e1a7b9eea5b33?placeholderIfAbsent=true"
                  alt="Arrow"
                  className="aspect-[1] object-contain w-[39px] self-stretch shrink-0 my-auto"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/895094f298b3207565034cae6c25913a95cc9830?placeholderIfAbsent=true"
            alt="Product Cost Estimator"
            className="aspect-[1.29] object-contain w-full max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
