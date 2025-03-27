import React, { useState } from "react";

const Services: React.FC = () => {
  // State to track which service is active (null means all services are shown)
  const [activeService, setActiveService] = useState<number | null>(null);

  // Service card data
  const services = [
    {
      title: "Web Design & Development",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33334L3.33334 10L20 16.6667L36.6667 10L20 3.33334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33334 23.3333L20 30L36.6667 23.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.33334 16.6667L20 23.3333L36.6667 16.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "Build modern, responsive, and user-friendly websites tailored to your brand identity. Over 325 successful projects delivered!",
      metric: "325 Projects",
      details: "Our web design and development services create responsive, user-friendly websites that reflect your brand identity perfectly. From simple landing pages to complex e-commerce platforms, we build websites that convert visitors into customers. Using the latest technologies and best practices, we ensure your website is fast, secure, and optimized for all devices."
    },
    {
      title: "Cyber Security Solutions",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 36.6667C20 36.6667 33.3333 30 33.3333 20V8.33334L20 3.33334L6.66667 8.33334V20C6.66667 30 20 36.6667 20 36.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "Protect against malicious assets with optimized penetration testing, code auditing, and risk assessment services.",
      metric: "Securing Businesses Globally.",
      details: "Our cybersecurity solutions provide comprehensive protection for your digital assets. We conduct thorough penetration testing, code auditing, and risk assessments to identify vulnerabilities before they can be exploited. Our team of security experts stays updated with the latest threats and countermeasures to keep your business safe from evolving cyber threats."
    },
    {
      title: "Blockchain Development",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6.66666L10 13.3333V26.6667L20 33.3333L30 26.6667V13.3333L20 6.66666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 13.3333L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 20L20 33.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 20L30 13.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 10L25 16.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "Revolutionize your business with decentralized applications, smart contracts, and NFT marketplaces.",
      metric: "Empowering Over 200 Clients.",
      details: "We specialize in blockchain technology solutions that revolutionize how businesses operate. From developing decentralized applications (dApps) to creating smart contracts and NFT marketplaces, our blockchain services help businesses increase transparency, reduce costs, and enhance security. We work with established blockchain protocols and can custom-build solutions for your unique needs."
    },
    {
      title: "Digital Fashion Innovation",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6667 3.33334H13.3333L6.66667 16.6667L20 36.6667L33.3333 16.6667L26.6667 3.33334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 36.6667L20 13.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.6667 3.33334L20 13.3333L13.3333 3.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "Lead the future of fashion with AR experiences, metaverse skins, and NFT solutions.",
      metric: "Blending Creativity With Technology.",
      details: "Our digital fashion innovation services are at the intersection of creativity and technology. We create AR fashion experiences, metaverse wearables, and digital fashion NFTs that push the boundaries of what's possible. Our solutions help fashion brands enter the digital realm, create new revenue streams, and engage with customers in novel ways that weren't possible before."
    },
    {
      title: "AI-Powered SaaS Tools",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6.66667" y="6.66666" width="11.6667" height="11.6667" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="6.66667" y="21.6667" width="11.6667" height="11.6667" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="21.6667" y="6.66666" width="11.6667" height="11.6667" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="21.6667" y="21.6667" width="11.6667" height="11.6667" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: "Enhance business operations with tailored AI-driven solutions that boost productivity.",
      metric: "Customized Tools For Every Need.",
      details: "Our AI-powered SaaS tools transform how businesses operate by automating repetitive tasks, generating insights from data, and personalizing customer experiences. We develop custom AI solutions that integrate with your existing workflow, from intelligent chatbots to predictive analytics systems. Our solutions are designed to be scalable, secure, and user-friendly, providing immediate value to your business."
    },
    {
      title: "Penetration Testing & Bug Hunting",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3333 31.6667C25.6971 31.6667 31.6667 25.6971 31.6667 18.3333C31.6667 10.9695 25.6971 5 18.3333 5C10.9695 5 5 10.9695 5 18.3333C5 25.6971 10.9695 31.6667 18.3333 31.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 35L28.3333 28.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.3333 13.3333V23.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3333 18.3333H23.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: "Identify vulnerabilities and ensure your system is always secured against threats.",
      metric: "Trusted By Industry Leaders.",
      details: "Our penetration testing and bug hunting services help organizations identify and fix security vulnerabilities before they can be exploited by malicious actors. Our ethical hackers use the same techniques as real attackers to test your systems' defenses, providing detailed reports on vulnerabilities found and recommendations for remediation. Regular security assessments ensure your systems remain protected as new threats emerge."
    }
  ];

  // Handler for service card clicks
  const handleServiceClick = (index: number) => {
    // If clicking the already active service, reset to show all services
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
    }
  };

  return (
    <section className="w-full flex flex-col items-center md:pt-10 lg:px-8">
      <div className="w-full max-w-7xl px-4">
        <div className="mb-12">
          <h2 className="text-[25px] lg:text-[48px] text-center lg:text-start font-semibold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-white text-[17px] lg:text-[23px] text-center lg:text-start">
            Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {activeService === null ? (
            // Grid view when no service is selected
            services.map((service, index) => (
              <div 
                key={index} 
                className={`
                  relative bg-[#0a0e35] border border-[#595F80] border-[0.5px] rounded-md p-2 md:p-4 
                  transition-all duration-300 ease-in-out cursor-pointer
                  group hover:bg-[rgba(145,59,255,0.9)] hover:border-[rgba(145,59,255,1)]
                  ${index === 0 ? 'bg-[rgba(145,59,255,1)] border-[rgba(145,59,255,1)]' : ''}
                `}
                onClick={() => handleServiceClick(index)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-white w-12 h-12 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                
                <p className="text-white text-base mb-6">
                  {service.description}
                </p>
                
                <div className="text-white text-sm font-medium mt-auto">
                  {service.metric}
                </div>
              </div>
            ))
          ) : (
            // Detailed view when a service is selected
            <div className=" lg:col-span-3 flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out">
              {/* Selected service card on the left */}
              <div 
                className="w-full md:w-1/3 bg-[rgba(145,59,255,1)] border border-[rgba(145,59,255,1)] rounded-md p-6 cursor-pointer"
                onClick={() => handleServiceClick(activeService)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-white w-12 h-12 flex items-center justify-center">
                    {services[activeService].icon}
                  </div>
                  <div className="text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4">{services[activeService].title}</h3>
                
                <p className="text-white text-base mb-6">
                  {services[activeService].description}
                </p>
                
                <div className="text-white text-sm font-medium mt-auto">
                  {services[activeService].metric}
                </div>
              </div>

              {/* Details panel on the right */}
              <div className="w-full md:w-2/3 bg-[#0a0e35] border border-[#595F80] border-[0.5px] rounded-md p-8 animate-fade-in transition-all duration-500 ease-in-out">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl text-white font-bold">
                    {services[activeService].title}
                  </h3>
                  <button 
                    className="text-white text-xl hover:text-gray-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(null);
                    }}
                  >
                    ✕
                  </button>
                </div>
                <div className="text-white text-lg">
                  {services[activeService].details}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
