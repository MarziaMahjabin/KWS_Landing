import React from "react";

const About: React.FC = () => {
  return (
    <section className="w-full max-w-[1325px] mt-[137px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="bg-[rgba(217,217,217,1)] flex flex-col items-center justify-center px-20 py-24 rounded-[10px] max-md:max-w-full max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4e6a31a18a46a15368bfb10d70fa41e41653e1d9?placeholderIfAbsent=true"
                alt="About illustration"
                className="aspect-[1] object-contain w-[146px] max-w-full"
              />
            </div>
            <div className="flex items-center gap-[40px_109px] flex-wrap mt-[42px] max-md:max-w-full max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/c0cd526d5f900c8107812a7a50ef46b7b4f77b17?placeholderIfAbsent=true"
                alt="Doodle"
                className="aspect-[0.81] object-contain w-[73px] self-stretch shrink-0 my-auto"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/71e289411cd52d4bf9cbbc17cacaeae1462c5d07?placeholderIfAbsent=true"
                alt="Doodle"
                className="aspect-[3.14] object-contain w-[242px] self-stretch min-w-60 my-auto"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/71fdce6469671dc951c452e46945be5b1025e908?placeholderIfAbsent=true"
                alt="Doodle"
                className="aspect-[1.03] object-contain w-10 self-stretch shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="grow text-white max-md:max-w-full max-md:mt-10">
            <div className="w-full max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h2 className="text-[39px] font-semibold leading-none max-md:max-w-full">
                  About KWS technology
                </h2>
                <p className="text-[22px] font-normal leading-[34px] mt-8 max-md:max-w-full">
                  Empowering businesses with innovative IT solutions, KWS
                  Technology is a leader in cybersecurity, blockchain
                  development, and digital transformation. We deliver secure,
                  scalable, and cutting-edge services to help you thrive in the
                  digital era.
                </p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6072d3985a0f584b8b774641adefe3f123213a9d?placeholderIfAbsent=true"
                alt="Divider"
                className="aspect-[333.33] object-contain w-full mt-7 max-md:max-w-full"
              />
            </div>
            <div className="w-full text-2xl font-semibold mt-[31px] max-md:max-w-full">
              <div className="bg-[rgba(28,43,84,1)] flex min-h-[92px] w-full flex-col leading-[42px] justify-center px-5 py-[23px] max-md:max-w-full">
                <div>100% client satisfaction.</div>
              </div>
              <div className="bg-[rgba(28,43,84,1)] flex min-h-[92px] w-full flex-col leading-[42px] justify-center mt-6 px-[27px] py-[23px] max-md:max-w-full max-md:px-5">
                <div className="flex items-center gap-[21px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/16879856219e8ca23a135a3a8dfd7e197341bdbd?placeholderIfAbsent=true"
                    alt="Support icon"
                    className="aspect-[0.83] object-contain w-[38px] self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">
                    24/7 online support.
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(28,43,84,1)] flex min-h-[92px] w-full flex-col leading-[42px] justify-center mt-6 px-[26px] py-[25px] max-md:max-w-full max-md:px-5">
                <div className="self-stretch">Money-back guarantee.</div>
              </div>
              <button className="self-stretch bg-[rgba(145,59,255,1)] min-h-[51px] w-[157px] max-w-full text-[15px] text-[rgba(249,249,249,1)] mt-6 px-5 py-[17px] rounded-md hover:bg-opacity-90 transition-colors">
                MORE DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
