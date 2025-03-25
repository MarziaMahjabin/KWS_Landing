
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatNavigationBar from "./ChatNavigationBar";

const AgentsList: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Cost Calculator Agent",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d72bbc834d9b21f7d3b731238ec2d83458a27e83?placeholderIfAbsent=true"
    },
    {
      id: 2,
      name: "Company Ambassador Agent",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33a928723cb1047ef324797a93eb9350e0ece7eb?placeholderIfAbsent=true"
    },
    {
      id: 3,
      name: "Job Inquiry Agent",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6529e0ff1cebbc9cff9b94ed6d634b13b4cf460d?placeholderIfAbsent=true"
    },
    {
      id: 4,
      name: "Customer Support Agent",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee02e9b2ac654a30a14e69a59dddab5707978914?placeholderIfAbsent=true"
    }
  ];

  return (
    <div className="chat-card flex flex-col h-full">
      <ChatHeader title="KWS" />
      
      <div className="p-6 flex-grow">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 text-[#BCBCBC] text-2xl font-semibold">
            <span>Hi Md</span>
            <span className="text-3xl">👋</span>
          </div>
          <div className="text-white text-2xl font-semibold mt-1">
            How Can We Help?
          </div>
        </div>

        <div className="space-y-4">
          {agents.map(agent => (
            <div 
              key={agent.id} 
              className="chat-agent-item transition-colors duration-200 rounded-lg p-3 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="chat-agent-icon p-3 rounded-lg">
                  <img
                    src={agent.icon}
                    alt={agent.name}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-white font-semibold">{agent.name}</span>
              </div>
              <button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <ChatNavigationBar />
    </div>
  );
};

export default AgentsList;
