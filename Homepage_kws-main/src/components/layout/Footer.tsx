import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="z-10 w-full mt-[145px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-full flex-col items-center text-white max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/b9c0a3f1c6d0292607785e776c84872097403556?placeholderIfAbsent=true"
          alt="Divider"
          className="aspect-[1000] object-contain w-[1114px] max-w-full"
        />
        <div className="flex flex-wrap mt-[86px] max-md:max-w-full max-md:mt-10">
          <div className="flex min-w-60 flex-col items-stretch w-[417px]">
            <p className="text-[23px] font-semibold leading-[37px]">
              We're here to help turn your ideas into reality. Get in touch with
              our expert team and start your journey with KWS Technology.
              <br />
            </p>
            <div className="gap-1.5 text-[55px] font-bold text-center max-md:text-[40px]">
              let's chat
            </div>
          </div>
          <nav className="text-[23px] font-normal leading-[1.3] w-[148px]">
            <Link to="/about" className="block hover:text-gray-300 transition-colors">
              about us
            </Link>
            <Link
              to="/contact"
              className="block mt-[34px] hover:text-gray-300 transition-colors"
            >
              contact us
            </Link>
            <Link
              to="/join"
              className="block mt-[34px] hover:text-gray-300 transition-colors"
            >
              join team
            </Link>
            <Link
              to="/services"
              className="block mt-[34px] hover:text-gray-300 transition-colors"
            >
              services
            </Link>
          </nav>
          <div className="flex min-w-60 flex-col items-stretch font-semibold w-[313px]">
            <a
              href="mailto:support@kws.technology"
              className="text-[23px] text-center hover:text-gray-300 transition-colors"
            >
              support@kws.technology
            </a>
            <div className="text-lg leading-[25px] mt-[18px]">
              Kuala lumpur, Malaysia
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-8 max-md:max-w-full">
        <div className="flex w-[1067px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap">
          <div className="text-white text-lg font-medium leading-none self-stretch my-auto">
            © 2024, kws technology. all rights reserved.
          </div>
          <div className="self-stretch flex min-w-60 items-center gap-[18px] my-auto">
            <a
              href="#"
              aria-label="Facebook"
              className="border self-stretch flex min-h-[52px] items-center gap-2.5 justify-center w-[52px] my-auto px-5 py-3.5 rounded-[5px] border-white border-solid hover:bg-[rgba(145,59,255,0.2)] transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/f533f67ef7796c42f6deb864ce93a3b160bbc585?placeholderIfAbsent=true"
                alt="Facebook icon"
                className="aspect-[0.54] object-contain w-[13px] self-stretch my-auto"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="border self-stretch flex min-h-[52px] flex-col items-center justify-center w-[52px] my-auto p-3.5 rounded-[5px] border-white border-solid hover:bg-[rgba(145,59,255,0.2)] transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/96f86cce76295a6eb40ae0dda7d7e4ac78a52841?placeholderIfAbsent=true"
                alt="Twitter icon"
                className="aspect-[1] object-contain w-6"
              />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="border self-stretch flex w-[52px] shrink-0 h-[52px] my-auto rounded-[5px] border-white border-solid hover:bg-[rgba(145,59,255,0.2)] transition-colors"
            />
            <a
              href="#"
              aria-label="YouTube"
              className="border self-stretch flex min-h-[52px] flex-col items-center justify-center w-[52px] my-auto px-[13px] py-[17px] rounded-[5px] border-white border-solid hover:bg-[rgba(145,59,255,0.2)] transition-colors"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/88b6d8ee44b4017fb8a16cc5e12d5d74bcc99d6f?placeholderIfAbsent=true"
                alt="YouTube icon"
                className="aspect-[1.37] object-contain w-[26px]"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/96f3a5ebcc31c8e462c75684a880cecc3fa23c6a?placeholderIfAbsent=true"
        alt="Decoration"
        className="aspect-[1] object-contain w-[157px] mt-[-221px] max-w-full ml-[295px] max-md:mt-[-200px] max-md:ml-2.5"
      />
    </footer>
  );
};

export default Footer; 