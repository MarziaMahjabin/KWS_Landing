
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatNavigationBar from "./ChatNavigationBar";

const MessagesList: React.FC = () => {
  const messages = [
    {
      id: 1,
      name: "Hi There,",
      subtitle: "Mike · 1d ago",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/5130c26f8c51c7957f441691f1ecceef92382ad0?placeholderIfAbsent=true"
    }
  ];

  return (
    <div className="chat-card flex flex-col h-full">
      <ChatHeader title="KWS" subtitle="Messages" />
      
      <div className="flex-grow overflow-auto">
        {messages.map(message => (
          <div 
            key={message.id} 
            className="p-4 hover:bg-[rgba(10,35,86,0.7)] transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={message.avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="text-white text-lg font-semibold">{message.name}</div>
                <div className="text-[#BCBCBC] text-sm">{message.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ChatNavigationBar />
    </div>
  );
};

export default MessagesList;
