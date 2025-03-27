import React from "react";

const SummaryCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-[263px] bg-[linear-gradient(0deg,rgba(145,59,255,0.30),rgba(145,59,255,0.30))] row-span-3 px-[30px] py-8 rounded-[30px] max-md:row-span-1">
      <div className="flex flex-col justify-between h-[134px]">
        <div className="text-white text-[27px] font-medium leading-[38px] gap-[15px]">
          Summary
        </div>
        <div className="flex items-center gap-[13px]">
          <div>
            <svg
              width="50"
              height="51"
              viewBox="0 0 50 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[50px] h-[50px]"
            >
              <path
                d="M4.16669 33.832C4.16669 27.9395 4.16669 24.9933 5.99727 23.1627C7.82785 21.332 10.7741 21.332 16.6667 21.332H33.3334C39.2259 21.332 42.1721 21.332 44.0027 23.1627C45.8334 24.9933 45.8334 27.9395 45.8334 33.832C45.8334 39.7245 45.8334 42.6708 44.0027 44.5014C42.1721 46.332 39.2259 46.332 33.3334 46.332H16.6667C10.7741 46.332 7.82785 46.332 5.99727 44.5014C4.16669 42.6708 4.16669 39.7245 4.16669 33.832Z"
                stroke="white"
                strokeWidth="2"
              ></path>
              <path
                d="M12.5 21.3346V17.168C12.5 10.2644 18.0964 4.66797 25 4.66797C31.9035 4.66797 37.5 10.2644 37.5 17.168V21.3346"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[65px] h-[65px]"
            >
              <path
                d="M32.5 4.0625V11.8083"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
              <path
                d="M32.5 53.1914V60.9372"
                stroke="white"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
              <path
                d="M16.9813 45.419C16.9813 47.4805 17.8002 49.4576 19.2579 50.9153C20.7156 52.373 22.6927 53.1919 24.7542 53.1919H37.6729C40.4168 53.1919 43.0483 52.1019 44.9885 50.1617C46.9288 48.2215 48.0188 45.59 48.0188 42.8461C48.0188 40.1022 46.9288 37.4707 44.9885 35.5305C43.0483 33.5903 40.4168 32.5003 37.6729 32.5003H27.3271C24.5832 32.5003 21.9517 31.4103 20.0115 29.47C18.0713 27.5298 16.9813 24.8983 16.9813 22.1544C16.9813 19.4105 18.0713 16.779 20.0115 14.8388C21.9517 12.8986 24.5832 11.8086 27.3271 11.8086H40.2458C42.3074 11.8086 44.2844 12.6275 45.7421 14.0852C47.1998 15.5429 48.0188 17.52 48.0188 19.5815"
                stroke="white"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="square"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[45px] bg-[linear-gradient(0deg,rgba(16,76,186,0.40),rgba(16,76,186,0.40))] px-[25px] py-8 rounded-[30px]">
        <div className="text-center text-[19px] leading-[27px]">
          <span className="text-white">Do you already have requirements? </span>
          <span className="text-[#A765FB] cursor-pointer hover:underline">
            schedule a call
          </span>
          <span className="text-white"> for a detailed estimate</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
