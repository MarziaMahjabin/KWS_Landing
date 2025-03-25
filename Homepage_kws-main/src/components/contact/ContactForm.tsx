import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  comment: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!");
  };

  return (
    <div className="self-center w-full max-w-[1218px] mt-[69px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[48%] max-md:w-full max-md:ml-0">
          <h2 className="text-[38px] text-[rgba(249,249,249,1)] font-bold max-md:max-w-full max-md:mt-[34px]">
            let's get connect with us
          </h2>
        </div>

        <div className="w-[26%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full text-[rgba(249,249,249,1)] mt-[13px] max-md:mt-10">
            <label
              htmlFor="name"
              className="text-xl font-bold leading-none block"
            >
              name
            </label>
            <input
              id="name"
              type="text"
              placeholder="enter name"
              className="self-stretch border min-h-[54px] w-full gap-2.5 text-[17px] font-normal leading-loose mt-5 px-6 py-3.5 rounded-md border-white border-solid max-md:px-5 bg-transparent"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="w-[26%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full text-[rgba(249,249,249,1)] whitespace-nowrap mt-[13px] max-md:mt-10">
            <label
              htmlFor="email"
              className="text-xl font-bold leading-none block"
            >
              email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="self-stretch border min-h-[54px] w-full gap-2.5 text-[17px] font-normal leading-loose mt-5 px-6 py-3.5 rounded-md border-white border-solid max-md:px-5 bg-transparent"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="self-center w-full max-w-[1235px] mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[41%] max-md:w-full max-md:ml-0">
            <ContactInfo />
          </div>

          <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col mt-[25px] max-md:max-w-full max-md:mt-10">
              <label
                htmlFor="comment"
                className="text-[rgba(249,249,249,1)] text-xl font-bold leading-none"
              >
                comment
              </label>
              <textarea
                id="comment"
                placeholder="write message"
                className="border self-stretch min-h-[116px] gap-2.5 text-[17px] text-[rgba(249,249,249,1)] font-normal leading-loose mt-5 pt-3.5 pb-[75px] px-6 rounded-md border-white border-solid max-md:mr-2.5 max-md:px-5 bg-transparent resize-none"
                {...register("comment", { required: "Comment is required" })}
              ></textarea>
              {errors.comment && (
                <p className="text-red-400 mt-1">{errors.comment.message}</p>
              )}

              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="self-stretch bg-[rgba(145,59,255,1)] min-h-[55px] gap-2.5 text-[19px] text-white font-semibold leading-none mt-[38px] px-[34px] py-[18px] rounded-md max-md:px-5 hover:bg-purple-700 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "submit now"}
              </button>

              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="grow max-md:max-w-full max-md:mt-10">
      <div className="flex min-h-[218px] flex-col items-center justify-center px-[103px] py-[45px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[166px] max-w-full flex-col items-stretch">
          <div className="bg-white self-center flex min-h-[59px] w-[60px] flex-col items-center justify-center h-[60px] px-3.5 rounded-[30px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/d72ca0db63032e29f6bd5543ea0cbb73ecaf605a?placeholderIfAbsent=true"
              className="aspect-[1.03] object-contain w-full"
              alt="Phone icon"
            />
          </div>
          <a
            href="tel:+60114076409"
            className="text-white text-[19px] font-medium leading-none mt-[43px] max-md:mt-10 hover:text-purple-400 transition-colors"
          >
            +60 11-4076 4409
          </a>
        </div>
      </div>

      <div className="flex min-h-[218px] flex-col items-center text-[19px] text-white font-medium text-center leading-[25px] justify-center mt-[27px] px-[37px] py-10 max-md:max-w-full max-md:px-5">
        <div className="flex w-[297px] max-w-full flex-col items-stretch">
          <div className="bg-white self-center flex min-h-[59px] w-[60px] gap-2.5 h-[60px] rounded-[30px]" />
          <address className="mt-7 not-italic">
            Tower A, Usj 1, 47600 Subang Jaya, Selangor, Malaysia
          </address>
        </div>
      </div>

      <div className="flex min-h-[218px] flex-col items-center justify-center mt-7 px-[59px] py-6 max-md:max-w-full max-md:px-5">
        <div className="flex w-[273px] max-w-full flex-col items-stretch">
          <div className="bg-white self-center flex min-h-[59px] w-[59px] flex-col items-center justify-center h-[59px] px-[18px] rounded-[30px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/5c9c230cfdc600d09078538a68109d3eeab6304d?placeholderIfAbsent=true"
              className="aspect-[1.35] object-contain w-full"
              alt="Email icon"
            />
          </div>
          <div className="flex w-full flex-col items-center text-xl text-white font-medium whitespace-nowrap mt-3.5">
            <a
              href="mailto:nftclosetx@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              nftclosetx@gmail.com
            </a>
            <a
              href="mailto:support@kws.technology"
              className="mt-2.5 hover:text-purple-400 transition-colors"
            >
              support@kws.technology
            </a>
            <a
              href="mailto:researchbdy@gmail.com"
              className="leading-[9px] text-center self-stretch mt-2.5 hover:text-purple-400 transition-colors"
            >
              <br />
              researchbdy@gmail.com
              <br />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <>
      <h3 className="text-white text-[32px] font-bold mt-8">send us message</h3>
      <div className="self-stretch flex items-stretch gap-7 flex-wrap mt-6 max-md:max-w-full">
        <SocialButton
          icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4dcd7ab137a4aaf2f3d8db01823eabdd9472cce4?placeholderIfAbsent=true"
          name="Facebook"
          bgColor="rgba(36,147,234,1)"
        />
        <SocialButton icon="" name="LinkedIn" bgColor="rgba(16,76,186,1)" />
        <SocialButton
          icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/0e53ab1d596063615d267c66629d36f323ba223a?placeholderIfAbsent=true"
          name="WhatsApp"
        />
      </div>
      <div className="self-stretch flex items-stretch gap-7 flex-wrap mt-6 max-md:max-w-full">
        <SocialButton
          icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4ca9cfccd792a87d8e9cddf9f690362cee18bc1d?placeholderIfAbsent=true"
          name="discord"
          bgColor="rgba(88,101,242,1)"
        />
        <SocialButton
          icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/eba14b6ab3e75392e245cbc50d8ba968a32e76d7?placeholderIfAbsent=true"
          name="telegram"
        />
        <SocialButton
          icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/3a0c9935fff57e98e56e3fea028529de91a23067?placeholderIfAbsent=true"
          name="email"
        />
      </div>
      <SocialButton
        icon="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/2178f4f1ba8c5f3b7a30831506a9d626b4a4d587?placeholderIfAbsent=true"
        name="Instagram"
        className="mt-6 w-[194px]"
      />
    </>
  );
};

interface SocialButtonProps {
  icon: string;
  name: string;
  bgColor?: string;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  name,
  bgColor,
  className = "",
}) => {
  return (
    <a
      href="#"
      className={`bg-[rgba(132,35,255,0.15)] border flex min-h-[62px] flex-col items-center justify-center flex-1 px-[13px] py-[15px] rounded-[7px] border-[rgba(145,59,255,1)] border-solid hover:bg-[rgba(132,35,255,0.3)] transition-colors ${className}`}
    >
      <div className="flex w-full max-w-[154px] items-center gap-[15px]">
        {icon ? (
          <img
            src={icon}
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
            alt={`${name} icon`}
          />
        ) : (
          <div
            className={`bg-[${bgColor || "transparent"}] self-stretch flex w-8 shrink-0 h-8 gap-2.5 my-auto rounded-md`}
          />
        )}
        <div className="text-[rgba(249,249,249,1)] text-[22px] font-semibold self-stretch my-auto">
          {name}
        </div>
      </div>
    </a>
  );
};

export default ContactForm;
