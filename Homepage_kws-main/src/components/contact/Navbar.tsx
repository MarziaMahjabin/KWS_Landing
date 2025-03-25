import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  // Check for tablet size of exactly 768x771px
  const isTabletSize = () => {
    return window.innerWidth >= 768 && window.innerWidth <= 780;
  };

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTablet(isTabletSize());
    };

    // Initial check
    checkScreenSize();

    // Check on resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Handle company dropdown
      if (
        companyDropdownRef.current && 
        !companyDropdownRef.current.contains(target) 
      ) {
        setIsCompanyDropdownOpen(false);
      }
      
      // Handle mobile menu
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(target) && 
        !target.closest('.hamburger-menu')
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full"
      aria-label="Navigation"
    >
      <div className="self-stretch flex min-w-60 items-center gap-[40px_100px] text-white whitespace-nowrap flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch flex gap-3 text-3xl font-semibold leading-none my-auto">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4319b7a98399de96467f92ddbf06192c8a9d723b?placeholderIfAbsent=true"
              className="aspect-[0.9] object-contain w-9 shrink-0"
              alt="KWS Logo"
            />
          </Link>
          <Link to="/">
            <div>KWS</div>
          </Link>
        </div>
        
        {/* Desktop Navigation - hidden on screens < 769px and visible but modified on tablet */}
        <nav className={`self-stretch ${isTablet || window.innerWidth < 768 ? 'hidden' : 'flex'} min-w-60 items-center gap-[27px] text-lg font-medium leading-none my-auto`}>
          <Link
            to="/"
            className="self-stretch gap-[9px] my-auto hover:text-purple-400 transition-colors"
          >
            HOME
          </Link>
          <Link
            to="/project"
            className="self-stretch gap-[5px] my-auto hover:text-purple-400 transition-colors"
          >
            PROJECT
          </Link>
          <Link
            to="/contact"
            className="self-stretch gap-[5px] my-auto hover:text-purple-400 transition-colors"
          >
            CONTACT
          </Link>
          <div 
            ref={companyDropdownRef}
            className="self-stretch flex items-center gap-[5px] my-auto cursor-pointer hover:text-purple-400 transition-colors relative"
          >
            <button
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <div className="self-stretch my-auto">COMPANY</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/f37dcfba10b81d31cc2a4000ba9268fdf2eb6d10?placeholderIfAbsent=true"
                className={`aspect-[1.83] object-contain w-[11px] self-stretch shrink-0 my-auto transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                alt="Dropdown arrow"
              />
            </button>
            
            {/* Company dropdown menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-[rgba(23,34,88,0.95)] text-white rounded-lg shadow-lg z-50 transition-all duration-300 origin-top transform ${
                isCompanyDropdownOpen 
                  ? 'opacity-100 scale-y-100' 
                  : 'opacity-0 scale-y-0 pointer-events-none'
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link 
                    to="/about" 
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/join" 
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    Join Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/cost-calculator" 
                    className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                  >
                    Cost Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Tablet Navigation - visible only between 768-780px */}
        {isTablet && (
          <nav className="self-stretch flex min-w-60 items-center gap-[27px] text-lg font-medium leading-none my-auto">
            <Link
              to="/"
              className="self-stretch gap-[9px] my-auto hover:text-purple-400 transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/project"
              className="self-stretch gap-[5px] my-auto hover:text-purple-400 transition-colors"
            >
              PROJECT
            </Link>
            <Link
              to="/contact"
              className="self-stretch gap-[5px] my-auto hover:text-purple-400 transition-colors"
            >
              CONTACT
            </Link>
            <div 
              ref={companyDropdownRef}
              className="self-stretch flex items-center gap-[5px] my-auto cursor-pointer hover:text-purple-400 transition-colors relative"
            >
              <button
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <div className="self-stretch my-auto">COMPANY</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/f37dcfba10b81d31cc2a4000ba9268fdf2eb6d10?placeholderIfAbsent=true"
                  className={`aspect-[1.83] object-contain w-[11px] self-stretch shrink-0 my-auto transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                  alt="Dropdown arrow"
                />
              </button>
              
              {/* Company dropdown menu with Cost Calculator */}
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-[rgba(23,34,88,0.95)] text-white rounded-lg shadow-lg z-50 transition-all duration-300 origin-top transform ${
                  isCompanyDropdownOpen 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <ul className="py-2">
                  <li>
                    <Link 
                      to="/about" 
                      className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/join" 
                      className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                      Join Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/cost-calculator" 
                      className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                      Cost Calculator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>

      <div className="self-stretch flex items-center gap-[21px] my-auto">
        {/* Search and other icons - stay visible on all screen sizes */}
        <button aria-label="Search">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/0362e3079252eef8a1a702bcc56c2365682aeada?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[37px] self-stretch shrink-0 my-auto"
            alt="Search icon"
          />
        </button>
        <div className="self-stretch flex w-[37px] shrink-0 h-[38px] my-auto rounded-[19px] border-[rgba(145,59,255,1)] border-solid border-2" />

        {/* Hamburger Menu Button - visible only on screens < 768px */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`hamburger-menu text-white text-3xl focus:outline-none ${isTablet ? 'hidden' : 'md:hidden'}`}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-full h-screen bg-[rgba(5,13,54,0.95)] z-50 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isTablet ? 'hidden' : 'md:hidden'}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#272B45]">
          <div className="flex items-center gap-3 text-3xl font-semibold text-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4319b7a98399de96467f92ddbf06192c8a9d723b?placeholderIfAbsent=true"
              alt="KWS Logo"
              className="w-9"
            />
            <span>KWS</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <nav className="flex flex-col items-start p-6 text-white">
          <Link 
            to="/" 
            className="py-4 text-xl font-medium border-b border-[#272B45] w-full"
          >
            HOME
          </Link>
          <Link 
            to="/project" 
            className="py-4 text-xl font-medium border-b border-[#272B45] w-full"
          >
            PROJECT
          </Link>
          <Link 
            to="/contact" 
            className="py-4 text-xl font-medium border-b border-[#272B45] w-full"
          >
            CONTACT
          </Link>
          
          {/* Mobile Company submenu */}
          <div className="py-4 text-xl font-medium border-b border-[#272B45] w-full">
            <div 
              className="flex items-center justify-between w-full"
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
            >
              <span>COMPANY</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/f37dcfba10b81d31cc2a4000ba9268fdf2eb6d10?placeholderIfAbsent=true"
                className={`aspect-[1.83] object-contain w-[11px] transition-transform ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                alt="Dropdown arrow"
              />
            </div>
            
            <div className={`mt-2 pl-4 transition-all duration-300 ${isCompanyDropdownOpen ? 'block' : 'hidden'}`}>
              <Link 
                to="/about" 
                className="block py-2"
              >
                About Us
              </Link>
              <Link 
                to="/join" 
                className="block py-2"
              >
                Join Team
              </Link>
              <Link 
                to="/services" 
                className="block py-2"
              >
                Services
              </Link>
              <Link 
                to="/cost-calculator" 
                className="block py-2"
              >
                Cost Calculator
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
