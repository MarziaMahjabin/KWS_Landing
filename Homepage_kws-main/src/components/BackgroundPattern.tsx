import React from "react";

const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-[200px] right-[100px] w-[300px] h-[300px] rounded-full bg-[#913BFF] opacity-10 blur-[100px]" />
      <div className="absolute top-[500px] left-[100px] w-[250px] h-[250px] rounded-full bg-[#3B52FF] opacity-10 blur-[80px]" />
      <div className="absolute bottom-[300px] right-[200px] w-[200px] h-[200px] rounded-full bg-[#913BFF] opacity-10 blur-[60px]" />
    </div>
  );
};

export default BackgroundPattern; 