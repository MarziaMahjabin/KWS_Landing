import React, { useState } from "react";

const StartupSupport: React.FC = () => {
  // State to track which box is active (null means all boxes are shown)
  const [activeBox, setActiveBox] = useState<number | null>(null);
const [showDetail, setShowDetail] = useState(false);
  // Box data for the three boxes
  const boxes = [
    {
      title: "Build Your AI Agent",
      image: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6285a00faafeaa403e1528f3fb7c009980f4fcbe?placeholderIfAbsent=true",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Build Your Startup/SaaS",
      image: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6285a00faafeaa403e1528f3fb7c009980f4fcbe?placeholderIfAbsent=true",
      details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Build Your Creative Media",
      image: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6285a00faafeaa403e1528f3fb7c009980f4fcbe?placeholderIfAbsent=true",
      details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  // Handler for box clicks
  const handleBoxClick = (index: number) => {
    // If clicking the already active box, reset to show all boxes
    if (activeBox === index) {
      setActiveBox(null);
      setShowDetail(false);
    } else {
      setActiveBox(index);
      setShowDetail(true);
    }
  };

  return (
    <section className="w-full flex flex-col items-start px-2 md:px-5 lg:px-10 py-3">
      <div className="w-full  text-white ">
        <h2 className="text-[25px] lg:text-[48px] text-center lg:text-start font-semibold leading-relaxed lg:leading-none ">
          Launch Your Dream Startup with Our Full-Cycle Support
        </h2>
        <p className="text-[17px] lg:text-[23px] text-center lg:text-start leading-[35px] mt-[21px] l">
          Whether you're a first-time CEO or scaling your next big idea, we
          offer comprehensive startup development services. From planning and
          budgeting to building an MVP and bringing it to market, we handle
          every step.
        </p>
      </div>

      <div className="w-full mt-[63px]">
      <div className="flex flex-col md:flex-row gap-5 transition-all duration-500 ease-in-out">
          {/* Cards */}
          <div
            className={`flex flex-col md:flex-row gap-5 transition-all duration-500 ease-in-out ${
              activeBox !== null
                ? "md:flex-[0.40] lg:flex-[0.35]"
                : "w-full"
            }`}
          >
            {boxes.map((box, index) => {
              const isActive = activeBox === index;

              // Only render this card if it's selected or if no box is selected
              if (activeBox !== null && !isActive) return null;

              return (
                <div
                  key={box.title}
                  onClick={() => handleBoxClick(index)}
                  className="cursor-pointer transform transition-all duration-500"
                >
                                <div className="bg-[rgba(255,255,255,0.05)] border flex flex-col self-stretch items-stretch text-3xl text-white font-bold leading-[1.4] w-full my-auto pb-[50px] rounded-2xl border-white border-solid max-md:mt-10 h-full">
                <img
                  src={box.image}
                  alt={box.title}
                  className="aspect-[1.54] object-contain w-full rounded-[16px_16px_0px_0px]"
                />
                <div className="ml-[22px] mt-9 max-md:ml-2.5">
                  {box.title}
                </div>
              </div>
                 
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          {activeBox !== null && (
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                showDetail
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0"
              } w-full md:flex-[0.60] lg:flex-[0.65]`}
            >
           
                <div className="bg-[rgba(255,255,255,0.05)] border flex flex-col h-full p-8 rounded-2xl border-white border-solid">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl text-white font-bold">
                    {boxes[activeBox].title}
                  </h3>
                  <button 
                    className="text-white text-xl hover:text-gray-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBox(null);
                    }}
                  >
                    ✕
                  </button>
                </div>
                {/* Placeholder for details content */}
                <div className="text-white text-xl">
                  {boxes[activeBox].details}
                </div>
              </div>
            
            </div>
          )}
        </div>
      </div>

      <button className="self-center bg-[rgba(145,59,255,1)] min-h-[51px] w-[191px] max-w-full text-xl text-[rgba(249,249,249,1)] font-semibold mt-[42px] px-[21px] py-[13px] rounded-md max-md:mt-10 max-md:px-5 hover:bg-opacity-90 transition-colors">
        Learn More
      </button>
    </section>
  );
};

export default StartupSupport;
// import React, { useState } from "react";

// const StartupSupport: React.FC = () => {
//   // State to track which box is active (null means all boxes are shown)
//   const [activeBox, setActiveBox] = useState<number | null>(null);
// const [showDetail, setShowDetail] = useState(false);
//   // Box data for the three boxes
//   const boxes = [
//     {
//       title: "Build Your AI Agent",
//       image: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6285a00faafeaa403e1528f3fb7c009980f4fcbe?placeholderIfAbsent=true",
//       details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       title: "Build Your Startup/SaaS",
//       image: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6285a00faafeaa403e1528f3fb7c009980f4fcbe?placeholderIfAbsent=true",
//       details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       title: "Build Your Creative Media",
//       image: "https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/6285a00faafeaa403e1528f3fb7c009980f4fcbe?placeholderIfAbsent=true",
//       details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//     }
//   ];

//   // Handler for box clicks
//   const handleBoxClick = (index: number) => {
//     // If clicking the already active box, reset to show all boxes
//     if (activeBox === index) {
//       setActiveBox(null);
//       setShowDetail(false);
//     } else {
//       setActiveBox(index);
//       setShowDetail(true);
//     }
//   };

//   return (
//     <section className="w-full flex flex-col items-start px-2 md:px-5 lg:px-10 py-3">
//       <div className="w-full  text-white ">
//         <h2 className="text-[25px] lg:text-[48px] text-center lg:text-start font-semibold leading-relaxed lg:leading-none ">
//           Launch Your Dream Startup with Our Full-Cycle Support
//         </h2>
//         <p className="text-[17px] lg:text-[23px] text-center lg:text-start leading-[35px] mt-[21px] l">
//           Whether you're a first-time CEO or scaling your next big idea, we
//           offer comprehensive startup development services. From planning and
//           budgeting to building an MVP and bringing it to market, we handle
//           every step.
//         </p>
//       </div>

//       <div className="w-full mt-[63px] max-md:max-w-full max-md:mt-10">
//         <div className="gap-5 flex transition-all duration-500 ease-in-out max-md:flex-col max-md:items-stretch">
//           {/* Conditional rendering based on activeBox state */}
//           {boxes.map((box, index) => (
//             <div 
//               key={index}
//               className={`
//                 transition-all duration-500 ease-in-out cursor-pointer
//                 ${activeBox === null 
//                   ? 'w-1/3' 
//                   : activeBox === index 
//                     ? 'w-[30%]' 
//                     : 'w-0 opacity-0 overflow-hidden'
//                 }
//                 max-md:w-full max-md:ml-0
//               `}
//               onClick={() => handleBoxClick(index)}
//             >
              // <div className="bg-[rgba(255,255,255,0.05)] border flex flex-col self-stretch items-stretch text-3xl text-white font-bold leading-[1.4] w-full my-auto pb-[50px] rounded-2xl border-white border-solid max-md:mt-10 h-full">
              //   <img
              //     src={box.image}
              //     alt={box.title}
              //     className="aspect-[1.54] object-contain w-full rounded-[16px_16px_0px_0px]"
              //   />
              //   <div className="ml-[22px] mt-9 max-md:ml-2.5">
              //     {box.title}
              //   </div>
              // </div>
//             </div>
//           ))}

//           {/* Details box that appears when a box is clicked */}
//           {activeBox !== null && (
//             <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0 animate-fade-in transition-all duration-500 ease-in-out">
              // <div className="bg-[rgba(255,255,255,0.05)] border flex flex-col h-full p-8 rounded-2xl border-white border-solid">
              //   <div className="flex justify-between items-center mb-6">
              //     <h3 className="text-3xl text-white font-bold">
              //       {boxes[activeBox].title}
              //     </h3>
              //     <button 
              //       className="text-white text-xl hover:text-gray-300"
              //       onClick={(e) => {
              //         e.stopPropagation();
              //         setActiveBox(null);
              //       }}
              //     >
              //       ✕
              //     </button>
              //   </div>
              //   {/* Placeholder for details content */}
              //   <div className="text-white text-xl">
              //     {boxes[activeBox].details}
              //   </div>
              // </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <button className="self-center bg-[rgba(145,59,255,1)] min-h-[51px] w-[191px] max-w-full text-xl text-[rgba(249,249,249,1)] font-semibold mt-[42px] px-[21px] py-[13px] rounded-md max-md:mt-10 max-md:px-5 hover:bg-opacity-90 transition-colors">
//         Learn More
//       </button>
//     </section>
//   );
// };

// export default StartupSupport;
