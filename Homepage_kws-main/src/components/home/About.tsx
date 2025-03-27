import React from "react";

const About: React.FC = () => {
  const aboutData = [
    {
      image:"https://i.ibb.co.com/p6BKrsp2/Group-15098.png",
      text:"100% client satisfaction."
    },
    {
      image:"https://i.ibb.co.com/hR61k8XZ/Icons.png",
      text:"24/7 online support."
    },
    {
      image:"https://i.ibb.co.com/S7c8FqxY/Group-15097.png",
      text:"Money-back guarantee."
    }
  ]
  return (
    <section className="w-full p-5 lg:p-10 max-md:max-w-full mt-5 md:mt-24">
      <div className=" flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-6/12">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="bg-[rgba(217,217,217,1)] flex flex-col items-center justify-center py-5 md:py-16 lg:px-20 xl:py-20 rounded-[10px] max-md:max-w-full max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4e6a31a18a46a15368bfb10d70fa41e41653e1d9?placeholderIfAbsent=true"
                alt="About illustration"
                className="aspect-[1] object-contain w-[146px] max-w-full"
              />
            </div>
            <div className="absolute flex items-center gap-[40px_109px] flex-wrap mt-[42px] max-md:max-w-full max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/c0cd526d5f900c8107812a7a50ef46b7b4f77b17?placeholderIfAbsent=true"
                alt="Doodle"
                className="aspect-[0.81] object-contain w-[73px] self-stretch shrink-0 my-auto z-0"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/71e289411cd52d4bf9cbbc17cacaeae1462c5d07?placeholderIfAbsent=true"
                alt="Doodle"
                className="aspect-[3.14] object-contain w-[242px] self-stretch min-w-60 my-auto z-0"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/71fdce6469671dc951c452e46945be5b1025e908?placeholderIfAbsent=true"
                alt="Doodle"
                className="aspect-[1.03] object-contain w-10 self-stretch shrink-0 my-auto z-0"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 z-10">
          <div className="grow text-white max">
            <div className="w-full max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h2 className="text-[24px] md:text-[39px] font-semibold leading-none max-md:max-w-full text-center md:text-start z-10">
                  About KWS technology
                </h2>
                <p className="text-[16px] md:text-[22px] text-wrap font-normal md:leading-[34px] mt-5 lg:mt-8 max-md:max-w-full text-center md:text-start">
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


            {

              aboutData.map((ab)=>(
                <div className="bg-[rgba(28,43,84,1)] flex min-h-[92px] border-l-2  border-white w-full flex-col leading-[42px] justify-center mt-6 px-3 md:px-[27px] md:py-[23px]">
                <div className="flex items-center gap-5">
                  <img
                    src={ab.image}
                    alt="Support icon"
                    className="aspect-[0.83] object-contain w-[30px] md:w-[38px] self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto text-[18px] md:text-[24px]">
                   {ab.text}
                  </div>
                </div>
              </div>
              ))
            }
                <button className="self-stretch bg-[rgba(145,59,255,1)] min-h-[51px] w-[157px] max-w-full text-[15px] text-[rgba(249,249,249,1)] mt-6 px-5 py-[17px] rounded-md hover:bg-opacity-90 transition-colors">
                MORE DETAILS
              </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
