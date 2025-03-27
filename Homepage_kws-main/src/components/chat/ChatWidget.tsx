import React, { useState, useRef, useEffect } from "react";
import AgentsList from "./AgentsList";
import ChatRoom from "./ChatRoom";
import FloatingAIButton from "./FloatingAIButton";

// Define the Agent type
export interface Agent {
  id: number;
  name: string;
  icon: string;
}

// Define the Message type
export interface Message {
  id: string;
  content: string;
  sender: "user" | "agent";
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Toggle chat widget visibility
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  // Select an agent and initialize chat
  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
    // Add initial greeting message from agent
    setMessages([
      {
        id: Date.now().toString(),
        content: `Hi! I'm your ${agent.name}. How can I help you today?`,
        sender: "agent",
        timestamp: new Date(),
      },
    ]);
  };

  // Go back to agent selection
  const handleBackToAgents = () => {
    setSelectedAgent(null);
    setMessages([]);
  };

  // Add a new message to the chat
  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate agent response after a small delay
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `This is a simulated response from ${selectedAgent?.name}.`,
        sender: "agent",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1000);
  };

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <FloatingAIButton onClick={toggleWidget} isOpen={isOpen} />
      
      {isOpen && (
        <div
          ref={widgetRef}
          className="fixed bottom-24 right-6 w-80 md:w-96 h-[600px] bg-[#0A1829] rounded-[15px] shadow-xl z-50 flex flex-col overflow-hidden transition-all duration-300 transform origin-bottom-right"
        >
          {selectedAgent ? (
            <ChatRoom
              agent={selectedAgent}
              messages={messages}
              onBack={handleBackToAgents}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <AgentsList onSelectAgent={handleSelectAgent} />
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget; 