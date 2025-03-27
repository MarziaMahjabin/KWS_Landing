
import React, { useState } from "react";
import { Send, Paperclip, Menu } from "lucide-react";
import PricingDisplay from "./PricingDisplay";

const ProjectCalculator: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to a backend
    setMessage("");
  };

  return (
    <section className="w-full flex flex-col items-center lg:px-10">
      <h2 className="text-[rgba(249,249,249,1)] text-[25px] lg:text-[48px]  font-semibold text-center ml-3.5 mt-14 max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Estimate Your Project Investment
      </h2>

      {/* <div className="flex w-full text-[17px] lg:text-[23px] text-center md:text-start max-w-[1169px] items-stretch justify-between text-3xl text-white font-semibold mt-[60px] max-md:max-w-full max-md:mt-10 max-md:flex-col max-md:gap-8">
        <div className="text-center">
          Demo Project Price To Give You Better Idea
        </div>
        
      </div> */}

      <div className="w-full max-w-[1280px] mt-5 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-40">
        {/* Left side: Icons and graph */}
        <div className="relative">
        <div className="text-center text-white text-[18px] font-semibold px-5 md:px-0">
          Demo Project Price To Give You Better Idea
        </div>
          <PricingDisplay />
        </div>

        {/* Right side: Chat interface */}
        <div className="flex flex-col justify-center items-center w-full space-y-10">
        <div className="text-center text-white text-[18px] font-semibold">Cost Calculate With AI</div>
          <div className="bg-[rgba(14,33,87,0.9)] rounded-xl p-6 w-full h-[540px] md:w-[600px] lg:w-[400px] xl:w-[600px] flex flex-col relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-[#050D36] rounded p-2">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-white text-sm font-semibold">Cost Calculator Agent</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="text-white" aria-label="Copy">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="text-white" aria-label="Share">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.59 13.51L15.42 17.49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.41 6.51L8.59 10.49" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto flex-grow space-y-4 mb-4">
              {/* AI Message */}
              <div className="max-w-[85%]">
                <div className="bg-[rgba(36,69,136,1)] p-4 rounded-lg text-white text-sm">
                  <p>It is recommended to start with 1-2 sets of 10-15 pushups per day and then gradually increase the number of sets.</p>
                </div>
                <div className="text-white text-xs mt-1 ml-1">10:52</div>
              </div>
              
              {/* User Message */}
              <div className="max-w-[70%] ml-auto">
                <div className="bg-[rgba(28,43,84,1)] p-4 rounded-lg text-white text-sm">
                  <p>Maybe, Nearly July, 2022</p>
                </div>
                <div className="text-white text-xs mt-1 ml-auto text-right mr-1">10:53</div>
              </div>
            </div>
            
            {/* AI Assistant Image */}
            <div className="absolute bottom-24 left-4">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/9c30ceeac51d1f9acbca65033529e1d55ce45c31" 
                alt="AI Assistant" 
                className="w-28 h-28"
              />
            </div>
            
            {/* Message Input */}
            <form onSubmit={handleSubmit} className="mt-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Write a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.24)] text-white rounded-full py-3 pl-5 pr-28 focus:outline-none focus:ring-2 focus:ring-[rgba(145,59,255,0.5)]"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="More options"
                    className="w-8 h-8 flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors"
                  >
                    <Menu size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Voice message"
                    className="w-8 h-8 flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 19V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 23H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    type="submit"
                    aria-label="Send message"
                    className="w-8 h-8 flex items-center justify-center bg-[rgba(1,57,160,1)] text-white rounded-full hover:bg-[rgba(1,57,160,0.8)] transition-colors"
                  >
                    <Send size={15} />
                  </button>
                </div>
              </div>
            </form>
            
            {/* Prompt Options */}
            <div className="absolute bottom-[-40px] right-4 bg-[rgba(1,57,160,0.54)] text-white text-xs p-2 rounded flex flex-col gap-1.5 border border-[rgba(255,255,255,0.39)]">
              <div className="flex items-center gap-1">
                <Paperclip size={10} />
                <span>Attachment</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Improve Prompt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;
