
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import AgentsList from "../chat/AgentsList";
import MessagesList from "../chat/MessagesList";
import ChatRoom from "../chat/ChatRoom";

const ChatInterface: React.FC = () => {
  const isMobile = useIsMobile();
  const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024 && window.innerWidth >= 768;

  // For desktop: show all 3 panels side by side 
  // For tablet: show 2 panels in the first row, 1 panel in the second row
  // For mobile: show 1 panel at a time with tabs

  if (isMobile) {
    return (
      <div className="self-center w-full max-w-[1345px] mt-[79px] max-md:mt-10 p-4">
        <Tabs defaultValue="agents" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="agents" className="h-[600px]">
            <AgentsList />
          </TabsContent>
          <TabsContent value="messages" className="h-[600px]">
            <MessagesList />
          </TabsContent>
          <TabsContent value="chat" className="h-[600px]">
            <ChatRoom />
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="self-center w-full max-w-[1345px] mt-[79px] max-md:mt-10 p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="h-[500px]">
            <AgentsList />
          </div>
          <div className="h-[500px]">
            <MessagesList />
          </div>
        </div>
        <div className="h-[500px] mt-4">
          <ChatRoom />
        </div>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="self-center w-full max-w-[1345px] mt-[79px] max-md:mt-10">
      <div className="gap-5 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="h-[600px]">
          <AgentsList />
        </div>
        <div className="h-[600px]">
          <MessagesList />
        </div>
        <div className="h-[600px]">
          <ChatRoom />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
