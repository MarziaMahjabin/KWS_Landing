
import React from "react";
import { X, Expand, MoreVertical } from "lucide-react";

interface ChatHeaderProps {
  title: string;
  subtitle?: string;
  avatar?: string;
  showControls?: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  title, 
  subtitle, 
  avatar, 
  showControls = true 
}) => {
  return (
    <div className="chat-header flex items-center justify-between p-4 rounded-t-[15px]">
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={`${title} avatar`}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4319b7a98399de96467f92ddbf06192c8a9d723b?placeholderIfAbsent=true"
              alt="KWS Logo"
              className="w-6 h-6"
            />
            <span className="text-white text-xl font-semibold">{title}</span>
          </div>
        )}
        
        {avatar && (
          <div>
            <div className="text-white text-lg font-semibold">{title}</div>
            {subtitle && <div className="text-[#BCBCBC] text-sm">{subtitle}</div>}
          </div>
        )}
      </div>
      
      {showControls && (
        <div className="flex items-center gap-2">
          <button className="text-white p-1">
            <Expand className="w-5 h-5" />
          </button>
          <button className="text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
