import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-[83px] max-md:max-w-full max-md:mt-10">
      <div className="flex w-full flex-col items-center text-white max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/b9c0a3f1c6d0292607785e776c84872097403556?placeholderIfAbsent=true"
          className="aspect-[1000] object-contain w-[1114px] max-w-full"
          alt="Decorative line"
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
            <a
              href="#"
              className="block hover:text-purple-400 transition-colors"
            >
              about us
            </a>
            <a
              href="#"
              className="block mt-[34px] hover:text-purple-400 transition-colors"
            >
              contact us
            </a>
            <a
              href="#"
              className="block mt-[34px] hover:text-purple-400 transition-colors"
            >
              privacy policy
            </a>
            <a
              href="#"
              className="block mt-[34px] hover:text-purple-400 transition-colors"
            >
              refund policy
            </a>
          </nav>
          <div className="min-w-60 font-semibold w-[313px]">
            <div className="text-[23px]">Become our partner</div>
            <a
              href="mailto:support@Kws.technology"
              className="block text-xl mt-[18px] hover:text-purple-400 transition-colors"
            >
              support@Kws.technology
            </a>
            <address className="text-base leading-[25px] mt-[18px] not-italic">
              Kuala lumpur, Malaysia
            </address>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch mt-8 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/1dc60cfb8e6ab143d8e5c476236e376d8e652a6f?placeholderIfAbsent=true"
          className="aspect-[1000] object-contain w-full max-md:max-w-full"
          alt="Decorative line"
        />
        <div className="self-center flex w-[1067px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap mt-[19px]">
          <div className="text-white text-lg font-medium leading-none self-stretch my-auto">
            © 2024, kws technology. all rights reserved.
          </div>
          <div className="self-stretch flex min-w-60 items-center gap-[18px] my-auto">
            <SocialIcon
              icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6202eaaeb190f233156cf2c54c92f668490a51cb?placeholderIfAbsent=true"
              alt="Facebook"
            />
            <SocialIcon
              icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/0a9c57cd0716fa38acc260070a30f945a58f3e94?placeholderIfAbsent=true"
              alt="Twitter"
            />
            <SocialIcon icon="" alt="LinkedIn" />
            <SocialIcon
              icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/8772ec6dff06a3f85428544eb48a6157c432108a?placeholderIfAbsent=true"
              alt="YouTube"
            />
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/339ae7c9bcbe6264188d76b0b7f76db21a4c35f8?placeholderIfAbsent=true"
        className="aspect-[1.1] object-contain w-[21px] mr-[296px] mt-[159px] max-md:mr-2.5 max-md:mt-10"
        alt="Decorative element"
      />
    </footer>
  );
};

interface SocialIconProps {
  icon: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, alt }) => {
  return (
    <a
      href="#"
      className="border self-stretch flex min-h-[52px] items-center justify-center w-[52px] my-auto p-3.5 rounded-[5px] border-white border-solid hover:bg-white/10 transition-colors"
      aria-label={alt}
    >
      {icon && (
        <img src={icon} className="aspect-[1] object-contain w-6" alt={alt} />
      )}
    </a>
  );
};

export default Footer;
