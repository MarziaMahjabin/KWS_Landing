
import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

interface ChatMessageProps {
  sender: "user" | "bot";
  content: string;
  time?: string;
  agentName?: string;
  agentIcon?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  content,
  time,
  agentName,
  agentIcon,
}) => {
  if (sender === "bot") {
    return (
      <div className="mb-4">
        <div className="chat-message-bot rounded-lg p-3 max-w-[85%]">
          {agentName && (
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="chat-agent-icon rounded p-1 w-8 h-8 flex items-center justify-center">
                  {agentIcon && (
                    <img
                      src={agentIcon}
                      alt={agentName}
                      className="w-5 h-5"
                    />
                  )}
                </div>
                <span className="text-white text-sm font-semibold">{agentName}</span>
              </div>
              <div className="flex gap-1">
                <button className="text-white p-0.5">
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="text-white p-0.5">
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          <p className="text-white text-sm leading-relaxed">{content}</p>
        </div>
        {time && <div className="text-[#BCBCBC] text-xs ml-2 mt-1">{time}</div>}
      </div>
    );
  }

  return (
    <div className="mb-4 self-end flex flex-col items-end">
      <div className="chat-message-user rounded-lg p-3 max-w-[85%]">
        <p className="text-white text-sm">{content}</p>
      </div>
      {time && <div className="text-[#BCBCBC] text-xs mr-2 mt-1">{time}</div>}
    </div>
  );
};

export default ChatMessage;
