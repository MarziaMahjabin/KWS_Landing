import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center mt-[106px] max-md:mt-10 max-md:pr-5">
      <div className="w-[803px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[76%] max-md:w-full max-md:ml-0">
            <div className="z-10 flex mr-[-526px] w-full flex-col items-stretch text-[rgba(249,249,249,1)] max-md:max-w-full">
              <h2 className="text-6xl font-bold text-center max-md:max-w-full max-md:text-[40px]">
                <span className="capitalize">have</span> project in mind? let's{" "}
                <br />
                make it happen.
              </h2>
              <a
                href="#"
                className="self-center bg-[rgba(145,59,255,1)] min-h-[58px] w-[154px] max-w-full text-lg font-semibold mt-[34px] pl-[30px] pr-[29px] py-[18px] rounded-md max-md:px-5 hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                contact us
              </a>
            </div>
          </div>
          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/77de7c28904d36a02d5247892b6375374c394b3c?placeholderIfAbsent=true"
              alt="Contact illustration"
              className="aspect-[1] object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
