import React from "react";
import SoftwareCard from "./SoftwareCard";

const SoftwareCards: React.FC = () => {
  const cards = [
    {
      id: 1,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6faf745849451cf1afedfd2343edbdea2df354?placeholderIfAbsent=true",
      title: "facebook-like app",
      price: "$1,000",
    },
    {
      id: 2,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f6c91f4f9d225945e0ba93ac95bba4c927bf773?placeholderIfAbsent=true",
      title: "facebook-like app",
      price: "$1,000",
    },
    {
      id: 3,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/af39a2df1194f5df27276b8590d5e1eeea96ea19?placeholderIfAbsent=true",
      title: "facebook-like app",
      price: "$1,000",
    },
    {
      id: 4,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e43f30078c920595c6007deaec09b63dc4a04842?placeholderIfAbsent=true",
      title: "facebook-like app",
      price: "$1,000",
    },
    {
      id: 5,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/371f0c0f3ff4b05039f6fcac9456ae4796f6e060?placeholderIfAbsent=true",
      title: "facebook-like app",
      price: "$1,000",
    },
    {
      id: 6,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/460fb3cfed260ba30ce34e5be3519bc26367bdfa?placeholderIfAbsent=true",
      title: "facebook-like app",
      price: "$1,000",
    },
  ];

  return (
    <div className="flex w-full flex-col mt-[66px] pl-[77px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="self-center w-[953px] max-w-full text-center ml-[18px]">
        <h2 className="text-white text-5xl font-bold leading-none max-md:max-w-full max-md:text-[40px]">
          Estimated Costs for Popular Software
        </h2>
        <p className="text-[rgba(249,249,249,1)] text-2xl font-normal mt-[29px] max-md:max-w-full">
          Disclaimer: &quot;Prices vary based on complexity and customization.
        </p>
      </div>
      <div className="flex w-full max-w-[1287px] gap-[60px] text-[32px] text-white font-medium leading-none flex-wrap mt-[66px] max-md:max-w-full max-md:mt-10">
        {cards.map((card) => (
          <SoftwareCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SoftwareCards;
