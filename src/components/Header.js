import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../images/logo icon.jpg";
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from './LanguageContext'; // Import LanguageContext

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useContext(LanguageContext); // Use LanguageContext

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Language options with emoji flags
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'German' },
  ];

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Update language in context
  };

  return (
    <header className="bg-white sticky top-0 left-0 w-full z-50 shadow-md" aria-label="Main header">
      <div className='container'>
        <div className='logo flex items-center justify-between gap-4 px-4 relative'>
          <div className='flex items-center justify-center gap-3'>
            <div className='image w-20 h-20 flex items-center justify-center'>
              <img src={logo} alt="Company logo" loading="lazy" />
            </div>
            <h1 className='text-2xl font-bold text-[#1a2d40]'>VIVA Track</h1>
          </div>

          {/* Language Select Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
              aria-label="Select language"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="block md:hidden text-3xl text-[#1a2d40] relative" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span
              className={`transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              aria-hidden="true"
            >
              {'☰'}
            </span>
            <FaArrowRight
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
              aria-hidden="true"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            <NavLink 
              to='/' 
              className={({ isActive }) => 
                isActive 
                  ? 'text-accent font-medium' 
                  : 'text-primary font-medium md:hover:text-accent'
              }
              aria-label="Go to Home page"
            >
              Home
            </NavLink>
            <NavLink 
              to='/about' 
              className={({ isActive }) => 
                isActive 
                  ? 'text-accent font-medium' 
                  : 'text-primary font-medium md:hover:text-accent'
              }
              aria-label="Go to About page"
            >
              About
            </NavLink>
            <a 
              className='text-primary font-medium md:hover:text-accent'
              href='https://tracktech-gps.com/objects'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Open the server dashboard in a new tab"
            >
              Server
            </a>
            <NavLink 
              to='/services' 
              className={({ isActive }) => 
                isActive 
                  ? 'text-accent font-medium' 
                  : 'text-primary font-medium md:hover:text-accent'
              }
              aria-label="Go to Services page"
            >
              Services
            </NavLink>
            <NavLink 
              to='/contact' 
              className={({ isActive }) => 
                isActive 
                  ? 'text-accent font-medium' 
                  : 'text-primary font-medium md:hover:text-accent'
              }
              aria-label="Go to Contact page"
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`w-3/4 h-[100vh] absolute left-0 bg-white transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
          aria-hidden={!isMenuOpen}
        >
          <ul className='flex flex-col gap-1'>
            <NavLink 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-accent text-white px-4 font-medium py-3' 
                  : 'text-primary px-4 font-medium py-3'
              }
              to={'/'}
              aria-label="Go to Home page"
            >
              Home
            </NavLink>
            <NavLink 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-accent text-white px-4 font-medium py-3' 
                  : 'text-primary px-4 font-medium py-3'
              }
              to={'/about'}
              aria-label="Go to About page"
            >
              About
            </NavLink>
            <a 
              className='text-primary px-4 font-medium py-3'
              href='https://tracktech-gps.com/objects'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Open the server dashboard in a new tab"
            >
              Server
            </a>
            <NavLink 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-accent text-white px-4 font-medium py-3' 
                  : 'text-primary px-4 font-medium py-3'
              }
              to={'/services'}
              aria-label="Go to Services page"
            >
              Services
            </NavLink>
            <NavLink 
              className={({ isActive }) => 
                isActive 
                  ? 'bg-accent text-white px-4 font-medium py-3' 
                  : 'text-primary px-4 font-medium py-3'
              }
              to={'/contact'}
              aria-label="Go to Contact page"
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveHeader;