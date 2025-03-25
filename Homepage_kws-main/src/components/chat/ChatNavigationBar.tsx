
import React from "react";

const ChatNavigationBar: React.FC = () => {
  return (
    <div className="chat-bottom-nav flex justify-around items-center p-4 rounded-b-[15px]">
      <div className="flex flex-col items-center text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81bbe7d96cd121e7ac462fc574fd7f5f28a0ba9b?placeholderIfAbsent=true"
          alt="Home"
          className="w-8 h-8 mb-1"
        />
        <span className="text-sm">Home</span>
      </div>
      <div className="flex flex-col items-center text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1b3fadf6a8b56d7d63369858e4a03ae6d17c5b?placeholderIfAbsent=true"
          alt="AI"
          className="w-8 h-8 mb-1"
        />
        <span className="text-sm">AI Agent</span>
      </div>
      <div className="flex flex-col items-center text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06a998caeab7bde886f13a85eb17f0ee258200f9?placeholderIfAbsent=true"
          alt="Human"
          className="w-8 h-8 mb-1"
        />
        <span className="text-sm">Human Agent</span>
      </div>
    </div>
  );
};

export default ChatNavigationBar;
