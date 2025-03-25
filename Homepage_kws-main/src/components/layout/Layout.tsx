import React, { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[rgba(5,13,54,1)] overflow-hidden min-h-screen">
      <header className="flex flex-col relative min-h-[100px] w-full items-center px-[52px] py-9 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/098309ac97e65ec258a25bb3581fe8df1f323b15?placeholderIfAbsent=true"
          alt="Header background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 