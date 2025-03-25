import React from "react";

interface SoftwareCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

const SoftwareCard: React.FC<SoftwareCardProps> = ({
  imageSrc,
  title,
  price,
}) => {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border flex min-w-60 min-h-[491px] gap-2.5 justify-center grow shrink w-[311px] rounded-2xl border-white border-solid">
      <div className="flex min-w-60 w-[389px] flex-col items-stretch">
        <img
          src={imageSrc}
          alt={title}
          className="aspect-[1.35] object-contain w-full rounded-[16px_16px_0px_0px]"
        />
        <div className="self-center w-[298px] max-w-full mt-[46px] max-md:mt-10">
          <div>
            facebook-<span className="text-[rgba(36,147,234,1)]">like</span> app
          </div>
          <div className="mt-7">
            estimated : <span className="text-white">$1,</span>
            <span className="text-[rgba(223,48,121,1)]">000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
