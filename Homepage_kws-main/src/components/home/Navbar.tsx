import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      
      // Don't close mobile menu when clicking hamburger icon
      const target = event.target as HTMLElement;
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

  // Close dropdown and mobile menu when navigation occurs
  useEffect(() => {
    setIsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  return (
    <div className="relative flex w-full items-center justify-between flex-wrap max-md:max-w-full">
      <div className="flex items-center gap-10 text-white">
        <div className="flex items-center gap-3 text-3xl font-semibold">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/4319b7a98399de96467f92ddbf06192c8a9d723b?placeholderIfAbsent=true"
              alt="KWS Logo"
              className="w-9"
            />
          </Link>
          <Link to="/">
            <div>KWS</div>
          </Link>
        </div>
        
        {/* Desktop Navigation - hidden on screens < 769px and visible but modified on tablet */}
        <nav className={`${isTablet || window.innerWidth < 768 ? 'hidden' : 'flex'} items-center gap-6 text-lg font-medium`}>
          <Link to="/" className={`hover:text-gray-300 transition-colors ${location.pathname === '/' ? 'text-[#913BFF]' : ''}`}>
            HOME
          </Link>
          <Link to="/project" className={`hover:text-gray-300 transition-colors ${location.pathname === '/project' ? 'text-[#913BFF]' : ''}`}>
            PROJECT
          </Link>
          <Link to="/contact" className={`hover:text-gray-300 transition-colors ${location.pathname === '/contact' ? 'text-[#913BFF]' : ''}`}>
            CONTACT
          </Link>
          {!isTablet && (
            <Link to="/cost-calculator" className={`hover:text-gray-300 transition-colors ${location.pathname === '/cost-calculator' ? 'text-[#913BFF]' : ''}`}>
              COST CALCULATOR
            </Link>
          )}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center hover:text-gray-300 transition-colors focus:outline-none ${
                ['/about', '/join', '/services', ...(isTablet ? ['/cost-calculator'] : [])].includes(location.pathname) 
                  ? 'text-[#913BFF]' 
                  : ''
              }`}
            >
              <span>COMPANY</span>
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`absolute mt-2 w-48 bg-[rgba(23,34,88,0.95)] text-white rounded-lg shadow-lg z-50 transition-all duration-300 origin-top transform ${
                isDropdownOpen 
                  ? 'opacity-100 scale-y-100' 
                  : 'opacity-0 scale-y-0 pointer-events-none'
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link 
                    to="/about" 
                    className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/about' ? 'bg-gray-700' : ''}`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/join" 
                    className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/join' ? 'bg-gray-700' : ''}`}
                  >
                    Join Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/services' ? 'bg-gray-700' : ''}`}
                  >
                    Services
                  </Link>
                </li>
                {isTablet && (
                  <li>
                    <Link 
                      to="/cost-calculator" 
                      className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/cost-calculator' ? 'bg-gray-700' : ''}`}
                    >
                      Cost Calculator
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Tablet Navigation - visible only between 768-780px */}
        {isTablet && (
          <nav className="flex items-center gap-6 text-lg font-medium">
            <Link to="/" className={`hover:text-gray-300 transition-colors ${location.pathname === '/' ? 'text-[#913BFF]' : ''}`}>
              HOME
            </Link>
            <Link to="/project" className={`hover:text-gray-300 transition-colors ${location.pathname === '/project' ? 'text-[#913BFF]' : ''}`}>
              PROJECT
            </Link>
            <Link to="/contact" className={`hover:text-gray-300 transition-colors ${location.pathname === '/contact' ? 'text-[#913BFF]' : ''}`}>
              CONTACT
            </Link>
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center hover:text-gray-300 transition-colors focus:outline-none ${
                  ['/about', '/join', '/services', '/cost-calculator'].includes(location.pathname) 
                    ? 'text-[#913BFF]' 
                    : ''
                }`}
              >
                <span>COMPANY</span>
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute mt-2 w-48 bg-[rgba(23,34,88,0.95)] text-white rounded-lg shadow-lg z-50 transition-all duration-300 origin-top transform ${
                  isDropdownOpen 
                    ? 'opacity-100 scale-y-100' 
                    : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
              >
                <ul className="py-2">
                  <li>
                    <Link 
                      to="/about" 
                      className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/about' ? 'bg-gray-700' : ''}`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/join" 
                      className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/join' ? 'bg-gray-700' : ''}`}
                    >
                      Join Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/services' ? 'bg-gray-700' : ''}`}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/cost-calculator" 
                      className={`block px-4 py-2 hover:bg-gray-700 transition-colors ${location.pathname === '/cost-calculator' ? 'bg-gray-700' : ''}`}
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

      {/* Hamburger Menu Button - visible only on screens < 768px */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`hamburger-menu text-white text-3xl focus:outline-none ${isTablet ? 'hidden' : 'md:hidden'}`}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

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
            className={`py-4 text-xl font-medium border-b border-[#272B45] w-full ${location.pathname === '/' ? 'text-[#913BFF]' : ''}`}
          >
            HOME
          </Link>
          <Link 
            to="/project" 
            className={`py-4 text-xl font-medium border-b border-[#272B45] w-full ${location.pathname === '/project' ? 'text-[#913BFF]' : ''}`}
          >
            PROJECT
          </Link>
          <Link 
            to="/contact" 
            className={`py-4 text-xl font-medium border-b border-[#272B45] w-full ${location.pathname === '/contact' ? 'text-[#913BFF]' : ''}`}
          >
            CONTACT
          </Link>
          
          {/* Mobile Company submenu */}
          <div className="py-4 text-xl font-medium border-b border-[#272B45] w-full">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center justify-between w-full focus:outline-none ${
                ['/about', '/join', '/services', '/cost-calculator'].includes(location.pathname) ? 'text-[#913BFF]' : ''
              }`}
            >
              <span>COMPANY</span>
              <svg 
                className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`mt-2 pl-4 transition-all duration-300 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <Link 
                to="/about" 
                className={`block py-2 ${location.pathname === '/about' ? 'text-[#913BFF]' : ''}`}
              >
                About Us
              </Link>
              <Link 
                to="/join" 
                className={`block py-2 ${location.pathname === '/join' ? 'text-[#913BFF]' : ''}`}
              >
                Join Team
              </Link>
              <Link 
                to="/services" 
                className={`block py-2 ${location.pathname === '/services' ? 'text-[#913BFF]' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/cost-calculator" 
                className={`block py-2 ${location.pathname === '/cost-calculator' ? 'text-[#913BFF]' : ''}`}
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
