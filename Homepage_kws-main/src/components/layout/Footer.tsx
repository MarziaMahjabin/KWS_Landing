import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="z-10 w-full bg-[#050C2E] text-white">
      {/* Main call to action section */}
      <div className="flex flex-col items-center py-20 px-4 text-center">
        <h2 className="text-[45px] font-bold leading-tight max-w-[800px] mx-auto">
          Have project in mind? let's make it happen.
        </h2>
            <Link
              to="/contact"
          className="mt-8 bg-[#913BFF] hover:bg-[#7B32D9] transition-colors duration-300 text-white font-medium px-8 py-3 rounded-md"
            >
              contact us
            </Link>
      </div>

      {/* Horizontal divider line */}
      <div className="border-t border-[#272B45] w-full max-w-[1200px] mx-auto"></div>

      {/* Footer content with three columns */}
      <div className="py-16 px-8 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left column - Help text and Let's Chat */}
        <div className="flex flex-col">
          <p className="text-[15px] leading-[23px] font-medium">
            We're here to help turn your ideas into reality. Get in touch with our 
            expert team and start your journey with KWS Technology.
          </p>
          <div className="flex items-center mt-4">
            <Link to="/contact" className="text-[28px] font-bold flex items-center hover:text-[#913BFF] transition-colors duration-300">
              Let's Chat
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Middle column - Navigation links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-[17px] font-medium mb-4 md:mb-6">
            <Link to="/about" className="hover:text-[#913BFF] transition-colors duration-300">About Us</Link>
          </h3>
          <h3 className="text-[17px] font-medium mb-4 md:mb-6">
            <Link to="/contact" className="hover:text-[#913BFF] transition-colors duration-300">Contact Us</Link>
          </h3>
          <h3 className="text-[17px] font-medium mb-4 md:mb-6">
            <Link to="/services" className="hover:text-[#913BFF] transition-colors duration-300">Services</Link>
          </h3>
          <h3 className="text-[17px] font-medium">
            <Link to="/join" className="hover:text-[#913BFF] transition-colors duration-300">Join Team</Link>
          </h3>
        </div>

        {/* Right column - Contact info */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-[17px] font-medium mb-2">Become Our Partner</h3>
            <a
              href="mailto:support@kws.technology"
            className="text-[15px] hover:text-[#913BFF] transition-colors duration-300"
            >
              support@kws.technology
            </a>
          <p className="text-[14px] text-gray-400 mt-2">
            Kuala Lumpur, Malaysia
          </p>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-[#272B45] py-6">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[14px] text-gray-400 mb-4 md:mb-0">
            © 2024, Kws Technology. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#913BFF] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#913BFF] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#913BFF] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#913BFF] transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 