
import React from "react";
import { Send, Paperclip, Plus } from "lucide-react";

const ChatInput: React.FC = () => {
  return (
    <div className="p-4">
      <div className="chat-input-bg rounded-full flex items-center p-2 px-4">
        <input 
          type="text"
          placeholder="Write a message..."
          className="bg-transparent border-none outline-none text-white flex-grow text-sm placeholder-white/70"
        />
        <div className="flex items-center gap-2">
          <button className="chat-send-button w-8 h-8 rounded-full flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center">
            <Paperclip className="w-4 h-4 text-white" />
          </button>
          <button className="chat-send-button w-8 h-8 rounded-full flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-white/70 px-2">
        <div className="flex items-center gap-1">
          <Paperclip className="w-3 h-3" />
          <span>Attachment</span>
        </div>
        <div className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="white" fillOpacity="0.7"/>
          </svg>
          <span>Improve prompt</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
