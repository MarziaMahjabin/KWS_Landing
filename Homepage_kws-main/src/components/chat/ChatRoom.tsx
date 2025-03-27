import React, { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatNavigationBar from "./ChatNavigationBar";
import { Agent, Message } from "./ChatWidget";
import { ArrowLeft } from "lucide-react";

interface ChatRoomProps {
  agent: Agent;
  messages: Message[];
  onBack: () => void;
  onSendMessage: (message: string) => void;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ agent, messages, onBack, onSendMessage }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Format timestamp for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get('message') as string;
    
    if (message.trim()) {
      onSendMessage(message);
      form.reset();
    }
  };

  return (
    <div className="chat-card flex flex-col h-full">
      <div className="chat-header flex items-center justify-between p-4 rounded-t-[15px]">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="text-white p-1"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <img
            src={agent.icon}
            alt={agent.name}
            className="w-10 h-10 rounded-full object-cover bg-[#2D4872] p-2"
          />
          <div>
            <div className="text-white text-lg font-semibold">{agent.name}</div>
            <div className="text-[#BCBCBC] text-sm">Active now</div>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto bg-[#0A1829]">
        <div className="flex flex-col space-y-4">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id}
              sender={message.sender === "agent" ? "bot" : "user"}
              content={message.content}
              time={formatTime(message.timestamp)}
              agentName={message.sender === "agent" ? agent.name : undefined}
              agentIcon={message.sender === "agent" ? agent.icon : undefined}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-[#0A1829]">
        <div className="chat-input-bg bg-[#172A46] rounded-full flex items-center p-2 px-4">
          <input 
            type="text"
            name="message"
            placeholder="Write a message..."
            className="bg-transparent border-none outline-none text-white flex-grow text-sm placeholder-white/70"
            autoComplete="off"
          />
          <button 
            type="submit" 
            className="chat-send-button bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </form>

      <ChatNavigationBar />
    </div>
  );
};

export default ChatRoom;
