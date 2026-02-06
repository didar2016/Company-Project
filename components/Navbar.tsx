import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../public/images/navlogo.png';
import Image from 'next/image';
import visithotelicon from '../public/images/visithotelicon.png';
import { useRouter } from 'next/router';

interface NavLink {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  //no-undef
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '/about' },

    {
      name: 'ROOMS',
      href: '/rooms',
      subItems: [
        { name: 'Studio Apartment', href: '/room' },
        { name: 'One Bedroom', href: '/room' },
        { name: 'Two Bedroom', href: '/room' },
      ],
    },
    { name: 'DINING', href: '/dining' },

    {
      name: 'FACILITIES',
      href: '/facilities',
    },

    { name: 'LOCATIONS', href: '/locations' },
    { name: 'CONTACT', href: '/contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    // Only add event listener for wide screens (lg and above), not for mobile
    if (activeDropdown && window.innerWidth >= 1024) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <>
      <nav className="fixed w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] z-50 bg-white/95 backdrop-blur-sm shadow-sm duration-300 top-4 sm:top-8 lg:top-12 left-0 right-0 mx-auto rounded-full sm:rounded-[80px] md:rounded-[140px]">
        <div className="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-8 lg:py-4">
          <div className="flex justify-between items-center h-12 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center p-2 sm:p-2 md:p-3 lg:p-4">
              <Link href="/" className="flex flex-col">
                <Image
                  src={Logo}
                  alt="MENA Logo"
                  className="w-[60px] h-[45px] sm:w-[70px] sm:h-[50px] lg:w-[100px] lg:h-[70px] xl:w-[120px] xl:h-[80px] object-fill"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-5" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.subItems ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.name ? null : link.name)
                        }
                        className="flex flex-row font-[--font-sansation] font-normal not-italic text-[18px] leading-[27px] uppercase text-[#454779]"
                      >
                        {link.name}
                        <ChevronDown
                          size={24}
                          className={`ml-1 transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180 text-accent' : 'text-accent'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === link.name && (
                        <div className="text-[18px] font-weight-400 absolute top-full left-0 mt-4 w-[200px] bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-in fade-in zoom-in-95 duration-200 z-50">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="font-sansation font-normal not-italic text-[18px] leading-6.75 uppercase text-[#454779]  font-weight-400 block px-4 py-3 hover:bg-gray-50 hover:text-accent transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sansation not-italic text-[18px] leading-6.75 uppercase text-[#454779] text-xs font-medium  hover:text-accent transition-colors tracking-wide"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="#book"
                className="font-sansation font-bold text-xs lg:text-sm xl:text-base inline-flex items-center px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 xl:py-2.5 border-[0.5px] border-[#00B3DD] text-[#00B3DD] hover:bg-accent hover:text-white rounded-full transition-all duration-300 uppercase tracking-wider group justify-between"
                onClick={() => setIsOpen(false)}
              >
                <span className="hidden min-[1385px]:inline">Book Your Stay</span>
                <span className="min-[1385px]:hidden">Book</span>
                <span className="ml-1.5 lg:ml-2 xl:ml-3 inline-block transition-all duration-300">
                  <Image
                    src={visithotelicon}
                    alt="Visit Hotel Icon"
                    className="h-auto w-8 min-[1385px]:w-13 lg:h-auto"
                  />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-brand focus:outline-none px-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 w-full h-full bg-white/60 backdrop-blur-xl pt-30 sm:pt-35 md:pt-44 pb-10 overflow-y-auto">
          <div className="px-6 space-y-2 text-center flex flex-col items-center justify-start min-h-full">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="w-full max-w-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.subItems ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => {
                        setActiveDropdown(activeDropdown === link.name ? null : link.name);
                      }}
                      className="flex items-center justify-center px-6 py-4 text-xl font-semibold text-gray-800 hover:text-[#00B3DD] w-full rounded-2xl bg-white/20 shadow-sm hover:shadow-md hover:bg-white/50 transition-all duration-300 transform active:scale-[0.98] cursor-pointer touch-manipulation relative z-[57]"
                      type="button"
                      aria-expanded={activeDropdown === link.name}
                      aria-haspopup="true"
                    >
                      <span className="tracking-wide uppercase">{link.name}</span>
                      <ChevronDown
                        size={20}
                        className={`ml-3 transition-all duration-300 pointer-events-none ${
                          activeDropdown === link.name
                            ? 'rotate-180 text-[#00B3DD]'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>

                    {activeDropdown === link.name && (
                      <div className="w-full flex flex-col items-center gap-1 mt-2 mb-4 animate-in slide-in-from-top-2 duration-200 relative z-[60]">
                        {link.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block w-full py-2 px-6 text-lg font-bold text-[#454779]/80 hover:text-[#00B3DD] transition-all duration-300 text-center uppercase tracking-wide"
                            style={{ animationDelay: `${subIndex * 50}ms` }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-6 py-4 text-xl font-semibold text-gray-800 hover:text-[#00B3DD] rounded-2xl bg-white/20 shadow-sm hover:shadow-md hover:bg-white/50 transition-all duration-300 transform active:scale-[0.98] tracking-wide uppercase cursor-pointer touch-manipulation"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-3 py-2.5 text-[#0095B8] border border-[#0095B8] rounded-full text-sm font-bold transition-all duration-300 uppercase tracking-wider transform hover:scale-105 min-w-[160px] cursor-pointer touch-manipulation hover:bg-[#0095B8]/5 active:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  setActiveDropdown(null);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
              >
                <span>Book Your Stay</span>
                <span className="ml-2.5 inline-block transition-all duration-300 pointer-events-none">
                  <Image src={visithotelicon} alt="Visit Hotel Icon" className="w-8 h-auto" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
