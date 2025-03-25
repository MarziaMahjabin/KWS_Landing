import React, { useState, useRef } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [activeService, setActiveService] = useState("web");
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  
  const handleServiceClick = (service: string) => {
    setActiveService(service);
    
    // Scroll the clicked tab into view on all screens
    if (tabsContainerRef.current) {
      const activeTab = tabsContainerRef.current.querySelector(`[aria-selected="true"]`);
      if (activeTab) {
        const containerWidth = tabsContainerRef.current.offsetWidth;
        const tabWidth = (activeTab as HTMLElement).offsetWidth;
        const tabLeft = (activeTab as HTMLElement).offsetLeft;
        const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        
        tabsContainerRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Function to handle scroll with arrow buttons
  const handleScroll = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const scrollAmount = 200; // Adjust scroll distance as needed
      const newPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
        
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="flex flex-col items-center"
      aria-label="Services Section"
    >
      <h2 className="text-[rgba(249,249,249,1)] text-[50px] font-semibold text-center mt-[241px] max-md:text-[40px] max-md:mt-10">
        Services
      </h2>
      
      {/* Tabs slider wrapper */}
      <div className="relative w-full max-w-[1273px] mt-[76px] max-md:mt-10 px-12">
        {/* Left scroll button - visible on all screens */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(28,43,84,1)] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-[rgba(145,59,255,1)] transition-colors"
          aria-label="Scroll left"
        >
          &#10094;
        </button>
        
        {/* Tabs container with horizontal scroll on all screens */}
        <div
          ref={tabsContainerRef}
          className="flex items-center gap-5 text-[19px] text-white font-medium leading-none w-full
            overflow-x-auto whitespace-nowrap scrollbar-hide px-2 pb-3"
          role="tablist"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 w-[138px] px-2.5 py-5 ${activeService === "startup" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("startup")}
            role="tab"
            aria-selected={activeService === "startup"}
            aria-controls="startup-panel"
          >
            Startup Dev
          </button>
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 w-[154px] px-2 py-5 ${activeService === "web" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("web")}
            role="tab"
            aria-selected={activeService === "web"}
            aria-controls="web-panel"
          >
            Web & App
          </button>
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 w-[191px] px-2 py-5 ${activeService === "ai" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("ai")}
            role="tab"
            aria-selected={activeService === "ai"}
            aria-controls="ai-panel"
          >
            AI & Automation
          </button>
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 whitespace-nowrap w-44 px-2 py-5 ${activeService === "cyber" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("cyber")}
            role="tab"
            aria-selected={activeService === "cyber"}
            aria-controls="cyber-panel"
          >
            Cybersecurity
          </button>
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 w-44 px-[25px] py-5 ${activeService === "fashion" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("fashion")}
            role="tab"
            aria-selected={activeService === "fashion"}
            aria-controls="fashion-panel"
          >
            Fashion Tech
          </button>
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 w-[187px] p-5 ${activeService === "media" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("media")}
            role="tab"
            aria-selected={activeService === "media"}
            aria-controls="media-panel"
          >
            Creative Media
          </button>
          <button
            className={`min-h-[59px] flex-shrink-0 gap-2.5 w-[217px] px-[11px] py-5 ${activeService === "marketing" ? "bg-[rgba(145,59,255,1)]" : "bg-[rgba(28,43,84,1)] border-l-[3px] border-white"}`}
            onClick={() => handleServiceClick("marketing")}
            role="tab"
            aria-selected={activeService === "marketing"}
            aria-controls="marketing-panel"
          >
            Marketing & Growth
          </button>
        </div>
        
        {/* Right scroll button - visible on all screens */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[rgba(28,43,84,1)] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-[rgba(145,59,255,1)] transition-colors"
          aria-label="Scroll right"
        >
          &#10095;
        </button>
        
        {/* Indicator for more content */}
        <div className="mt-2 w-full">
          <div className="w-16 h-1 bg-[rgba(145,59,255,0.3)] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Startup Development Panel */}
      {activeService === "startup" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="startup-panel"
          aria-labelledby="startup-tab"
        >
          <ServiceCard
            title="mVP development"
            description="Build a lean, functional prototype to test your startup idea and attract investors."
            iconSrc="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/54610cc2a04118696934b1084325ea1bcd68ab9b?placeholderIfAbsent=true"
            projectCount="325 projects"
            isPrimary={true}
          />
          <ServiceCard
            title="Full-cycle product development"
            description="From MVP to full-scale production, we handle everything from design to deployment.Delivering Scalable Tech Solutions."
            iconSrc="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/7276d06aceff7cea122f7f9ad69679c247a6af99?placeholderIfAbsent=true"
          />
          <ServiceCard
            title="saaS development"
            description="Develop scalable cloud-based software with seamless integrations and high performance."
            iconSrc="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/380723447ef5f833aaa59557a5e8cdf8621597f4?placeholderIfAbsent=true"
          />
          <ServiceCard
            title="go-to-market strategy"
            description="Plan a winning launch with strategic branding, audience targeting, and user acquisition.Helping Startups Gain Market Traction."
            iconSrc="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/3dcf132d7e5c3682a585d5d745686d2742a03808?placeholderIfAbsent=true"
          />
          <ServiceCard
            title="post-launch support & scalling"
            description="Optimize, maintain, and scale your product with regular updates and new features.Supporting Growth Beyond Launch."
            iconSrc="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/cd88a994f6575bb14f800a459724f9dc33520bed?placeholderIfAbsent=true"
          />
        </div>
      )}

      {/* Web & App Panel */}
      {activeService === "web" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="web-panel"
          aria-labelledby="web-tab"
        >
          <ServiceCard
            title="Web App Development"
            description="Develop custom, responsive web apps with seamless user experience and security."
            iconSrc="/icons/web-app-icon.svg"
            isPrimary={true}
            expandedCard={{
              title: "Web App Development",
              description: "Develop custom, responsive web apps with seamless user experience and security.",
              icon: "browser"
            }}
          />
          <ServiceCard
            title="E-Commerce Development"
            description="Launch scalable e-commerce stores with secure payments and optimized conversions. Custom website Development Build specialized software solutions that enhance business operations and productivity."
            iconSrc="/icons/ecommerce-icon.svg"
            expandedCard={{
              title: "E-Commerce Development",
              description: "Launch scalable e-commerce stores with secure payments and optimized conversions. Custom website Development Build specialized software solutions that enhance business operations and productivity.",
              icon: "cart"
            }}
          />
          <ServiceCard
            title="UI/UX Design"
            description="Enhance user engagement with intuitive, visually appealing, and conversion-focused designs. Optimizing Digital Experiences."
            iconSrc="/icons/ui-ux-icon.svg"
            expandedCard={{
              title: "UI/UX Design",
              description: "Enhance user engagement with intuitive, visually appealing, and conversion-focused designs. Optimizing Digital Experiences.",
              icon: "ui"
            }}
          />
        </div>
      )}

      {/* AI & Automation Panel */}
      {activeService === "ai" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="ai-panel"
          aria-labelledby="ai-tab"
        >
          <ServiceCard
            title="AI Agent Development"
            description="Automate workflows with AI-powered virtual assistants tailored for businesses."
            iconSrc="/icons/ai-agent-icon.svg"
            isPrimary={true}
            expandedCard={{
              title: "AI Agent Development",
              description: "Automate workflows with AI-powered virtual assistants tailored for businesses.",
              icon: "ai-agent"
            }}
          />
          <ServiceCard
            title="AI-Powered SaaS Tools"
            description="Enhance SaaS platforms with AI-driven automation, analytics, and decision-making. Custom AI Solutions for Every Business."
            iconSrc="/icons/ai-saas-icon.svg"
            expandedCard={{
              title: "AI-Powered SaaS Tools",
              description: "Enhance SaaS platforms with AI-driven automation, analytics, and decision-making. Custom AI Solutions for Every Business.",
              icon: "ai-chip"
            }}
          />
          <ServiceCard
            title="Business Process Automation"
            description="Reduce manual tasks with AI-driven automation for efficiency and cost savings. Optimizing Operations at Scale."
            iconSrc="/icons/bpa-icon.svg"
            expandedCard={{
              title: "Business Process Automation",
              description: "Reduce manual tasks with AI-driven automation for efficiency and cost savings. Optimizing Operations at Scale.",
              icon: "workflow"
            }}
          />
        </div>
      )}

      {/* Cybersecurity Panel */}
      {activeService === "cyber" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="cyber-panel"
          aria-labelledby="cyber-tab"
        >
          <ServiceCard
            title="Penetration Testing & Bug Hunting"
            description="Identify system vulnerabilities and strengthen security with advanced testing."
            iconSrc="/icons/pentesting-icon.svg"
            expandedCard={{
              title: "Penetration Testing & Bug Hunting",
              description: "Identify system vulnerabilities and strengthen security with advanced testing.",
              icon: "security"
            }}
          />
          <ServiceCard
            title="Compliance & Risk Assessment"
            description="Stay compliant with cybersecurity regulations and risk management protocols. Helping Enterprises Stay Secure."
            iconSrc="/icons/compliance-icon.svg"
            expandedCard={{
              title: "Compliance & Risk Assessment",
              description: "Stay compliant with cybersecurity regulations and risk management protocols. Helping Enterprises Stay Secure.",
              icon: "risk"
            }}
          />
        </div>
      )}

      {/* Fashion Tech Panel */}
      {activeService === "fashion" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="fashion-panel"
          aria-labelledby="fashion-tab"
        >
          <ServiceCard
            title="3D Digital Fashion Design"
            description="Create immersive digital clothing and accessories for fashion brands and the metaverse. Innovating the Future of Fashion."
            iconSrc="/icons/fashion-3d-icon.svg"
            expandedCard={{
              title: "3D Digital Fashion Design",
              description: "Create immersive digital clothing and accessories for fashion brands and the metaverse. Innovating the Future of Fashion.",
              icon: "fashion-3d"
            }}
          />
          <ServiceCard
            title="AR/VR Fashion Experiences"
            description="Develop interactive AR try-ons and VR fashion experiences for digital retail. Blending Creativity with Technology."
            iconSrc="/icons/fashion-ar-icon.svg"
            expandedCard={{
              title: "AR/VR Fashion Experiences",
              description: "Develop interactive AR try-ons and VR fashion experiences for digital retail. Blending Creativity with Technology.",
              icon: "fashion-ar"
            }}
          />
          <ServiceCard
            title="Metaverse-Ready Clothing"
            description="Design virtual fashion for gaming, AR/VR platforms, and the metaverse economy. Setting Trends in Virtual Wearables."
            iconSrc="/icons/fashion-metaverse-icon.svg"
            expandedCard={{
              title: "Metaverse-Ready Clothing",
              description: "Design virtual fashion for gaming, AR/VR platforms, and the metaverse economy. Setting Trends in Virtual Wearables.",
              icon: "fashion-meta"
            }}
          />
        </div>
      )}

      {/* Creative Media Panel */}
      {activeService === "media" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="media-panel"
          aria-labelledby="media-tab"
        >
          <ServiceCard
            title="Illustration & Graphic Design"
            description="High-quality illustrations and branding visuals to make your business stand out."
            iconSrc="/icons/illustration-icon.svg"
            isPrimary={true}
            expandedCard={{
              title: "Illustration & Graphic Design",
              description: "High-quality illustrations and branding visuals to make your business stand out.",
              icon: "illustration"
            }}
          />
          <ServiceCard
            title="Poster & Banner Design"
            description="Custom posters and banners for advertising, events, and digital campaigns."
            iconSrc="/icons/poster-icon.svg"
            expandedCard={{
              title: "Poster & Banner Design",
              description: "Custom posters and banners for advertising, events, and digital campaigns.",
              icon: "poster"
            }}
          />
          <ServiceCard
            title="Animated Video Production"
            description="Engage audiences with motion graphics, explainer videos, and promotional animations."
            iconSrc="/icons/video-icon.svg"
            expandedCard={{
              title: "Animated Video Production",
              description: "Engage audiences with motion graphics, explainer videos, and promotional animations.",
              icon: "video"
            }}
          />
          <ServiceCard
            title="Brand Identity & Marketing Assets"
            description="Develop a cohesive brand identity with custom logos, typography, and style guides."
            iconSrc="/icons/brand-icon.svg"
            expandedCard={{
              title: "Brand Identity & Marketing Assets",
              description: "Develop a cohesive brand identity with custom logos, typography, and style guides.",
              icon: "brand"
            }}
          />
        </div>
      )}

      {/* Marketing & Growth Panel */}
      {activeService === "marketing" && (
        <div
          className="flex w-full max-w-[1273px] gap-[50px_44px] flex-wrap mt-[62px] max-md:max-w-full max-md:mt-10"
          role="tabpanel"
          id="marketing-panel"
          aria-labelledby="marketing-tab"
        >
          <ServiceCard
            title="Product Branding"
            description="Craft a strong brand identity that connects with your audience and drives loyalty."
            iconSrc="/icons/product-brand-icon.svg"
            isPrimary={true}
            expandedCard={{
              title: "Product Branding",
              description: "Craft a strong brand identity that connects with your audience and drives loyalty.",
              icon: "product"
            }}
          />
          <ServiceCard
            title="SEO & Website Optimization"
            description="Boost search rankings and drive organic traffic with SEO-focused content and design."
            iconSrc="/icons/seo-icon.svg"
            expandedCard={{
              title: "SEO & Website Optimization",
              description: "Boost search rankings and drive organic traffic with SEO-focused content and design.",
              icon: "seo"
            }}
          />
          <ServiceCard
            title="Social Media Marketing"
            description="Engage and grow your audience with data-driven social media strategies."
            iconSrc="/icons/social-icon.svg"
            expandedCard={{
              title: "Social Media Marketing",
              description: "Engage and grow your audience with data-driven social media strategies.",
              icon: "social"
            }}
          />
          <ServiceCard
            title="Paid Ads & PPC Management"
            description="Optimize your ad spend with performance-driven paid advertising campaigns."
            iconSrc="/icons/ppc-icon.svg"
            expandedCard={{
              title: "Paid Ads & PPC Management",
              description: "Optimize your ad spend with performance-driven paid advertising campaigns.",
              icon: "ppc"
            }}
          />
          <ServiceCard
            title="Content Marketing & Copywriting"
            description="Create high-converting content that informs, persuades, and drives engagement. Words Written for Businesses."
            iconSrc="/icons/content-icon.svg"
            expandedCard={{
              title: "Content Marketing & Copywriting",
              description: "Create high-converting content that informs, persuades, and drives engagement. Words Written for Businesses.",
              icon: "content"
            }}
          />
          <ServiceCard
            title="Email Marketing & Lead Generation"
            description="Automate customer outreach with high-converting email sequences and funnels."
            iconSrc="/icons/email-icon.svg"
            expandedCard={{
              title: "Email Marketing & Lead Generation",
              description: "Automate customer outreach with high-converting email sequences and funnels.",
              icon: "email"
            }}
          />
          <ServiceCard
            title="Influencer & Affiliate Marketing"
            description="Leverage influencer partnerships to build credibility and scale brand awareness."
            iconSrc="/icons/influencer-icon.svg"
            expandedCard={{
              title: "Influencer & Affiliate Marketing",
              description: "Leverage influencer partnerships to build credibility and scale brand awareness.",
              icon: "influencer"
            }}
          />
        </div>
      )}

      {/* Add styles to hide scrollbar on all screen sizes */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
