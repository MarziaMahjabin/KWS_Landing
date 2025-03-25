
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatRoom: React.FC = () => {
  return (
    <div className="chat-card flex flex-col h-full">
      <ChatHeader 
        title="Mike" 
        subtitle="Active 2 Hours Ago" 
        avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/5130c26f8c51c7957f441691f1ecceef92382ad0?placeholderIfAbsent=true"
      />
      
      <div className="flex-grow p-4 overflow-auto">
        <div className="flex flex-col space-y-4">
          <ChatMessage 
            sender="bot" 
            content="It is recommended to start with 1-2 sets of 10-15 pushups per day and then gradually increase the number of sets."
            time="10:52"
            agentName="Cost Calculator Agent"
            agentIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/d72bbc834d9b21f7d3b731238ec2d83458a27e83?placeholderIfAbsent=true"
          />
          
          <ChatMessage 
            sender="user" 
            content="Maybe, Nearly July, 2022"
            time="10:53"
          />
        </div>
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatRoom;
