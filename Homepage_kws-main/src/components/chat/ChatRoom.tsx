// import React, { useEffect, useRef } from "react";
// import ChatHeader from "./ChatHeader";
// import ChatMessage from "./ChatMessage";
// import ChatInput from "./ChatInput";
// import ChatNavigationBar from "./ChatNavigationBar";
// import { Agent, Message } from "./ChatWidget";
// import { ArrowLeft } from "lucide-react";

// interface ChatRoomProps {
//   agent: Agent;
//   messages: Message[];
//   onBack: () => void;
//   onSendMessage: (message: string) => void;
// }

// const ChatRoom: React.FC<ChatRoomProps> = ({ agent, messages, onBack, onSendMessage }) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Auto-scroll to latest message
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Format timestamp for display
//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const message = formData.get('message') as string;
    
//     if (message.trim()) {
//       onSendMessage(message);
//       form.reset();
//     }
//   };
//    const agents: Agent[] = [
//       {
//         id: 1,
//         name: "Cost Calculator Agent",
//         icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d72bbc834d9b21f7d3b731238ec2d83458a27e83?placeholderIfAbsent=true"
//       },
//       {
//         id: 2,
//         name: "Company Ambassador Agent",
//         icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33a928723cb1047ef324797a93eb9350e0ece7eb?placeholderIfAbsent=true"
//       },
//       {
//         id: 3,
//         name: "Job Inquiry Agent",
//         icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6529e0ff1cebbc9cff9b94ed6d634b13b4cf460d?placeholderIfAbsent=true"
//       },
//       {
//         id: 4,
//         name: "Customer Support Agent",
//         icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee02e9b2ac654a30a14e69a59dddab5707978914?placeholderIfAbsent=true"
//       }
//     ];
  

//   return (
//     <div className="chat-card flex flex-col h-full">
//       <div className="chat-header flex items-center justify-between p-4 rounded-t-[15px]">
//         <div className="flex items-center gap-3">
//           <button 
//             onClick={onBack}
//             className="text-white p-1"
//           >
//             <ArrowLeft className="w-5 h-5" />
//           </button>
//           <img
//             src="ttps://cdn.builder.io/api/v1/image/assets/TEMP/ee02e9b2ac654a30a14e69a59dddab5707978914?placeholderIfAbsent=true"
//             alt="agent.name"
//             className="w-10 h-10 rounded-full object-cover bg-[#2D4872] p-2"
//           />
//           <div>
//             <div className="text-white text-lg font-semibold">"agent.name"</div>
//             <div className="text-[#BCBCBC] text-sm">Active now</div>
//           </div>
//         </div>
//       </div>
      
//       <div className="flex-grow p-4 overflow-y-auto bg-[#0A1829]">
//         <div className="flex flex-col space-y-4">
//           {messages.map((message) => (
//             <ChatMessage 
//               key={message.id}
//               sender={message.sender === "agent" ? "bot" : "user"}
//               content={message.content}
//               time={formatTime(message.timestamp)}
//               agentName={message.sender === "agent" ? agent.name : undefined}
//               agentIcon={message.sender === "agent" ? agent.icon : undefined}
//             />
//           ))}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="p-4 bg-[#0A1829]">
//         <div className="chat-input-bg bg-[#172A46] rounded-full flex items-center p-2 px-4">
//           <input 
//             type="text"
//             name="message"
//             placeholder="Write a message..."
//             className="bg-transparent border-none outline-none text-white flex-grow text-sm placeholder-white/70"
//             autoComplete="off"
//           />
//           <button 
//             type="submit" 
//             className="chat-send-button bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//       </form>

//       <ChatNavigationBar />
//     </div>
//   );
// };

// export default ChatRoom;
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

  const formatTime = (date: Date) => {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const message = formData.get("message") as string;

    if (message.trim()) {
      onSendMessage(message.trim());
      form.reset();
    }
  };

  return (
    <div className="chat-card flex flex-col h-full">
      {/* Header */}
      <div className="chat-header flex items-center justify-between p-4 rounded-t-[15px]">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-white p-1">
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

      {/* Messages */}
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

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-[#0A1829]">
        <div className="bg-[#172A46] rounded-full flex items-center p-2 px-4">
          <input
            type="text"
            name="message"
            placeholder="Write a message..."
            className="bg-transparent border-none outline-none text-white flex-grow text-sm placeholder-white/70"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>

      <ChatNavigationBar />
    </div>
  );
};

export default ChatRoom;
