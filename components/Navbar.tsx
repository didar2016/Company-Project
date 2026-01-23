import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../public/images/Logo.png';
import Image from 'next/image';
import visithotelicon from '../public/images/visithotelicon.png';

interface NavLink {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  //no-undef
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    { name: 'HOME', href: '/' },
    {
      name: 'ROOMS',
      href: 'rooms',
      subItems: [
        { name: 'Studio Apartment', href: 'room' },
        { name: 'One Bedroom', href: 'room' },
        { name: 'Two Bedroom', href: 'room' },
      ],
    },
    {
      name: 'AMENITIES',
      href: 'amenities',
    },

    { name: 'LOCATION', href: 'location' },
    { name: 'DINING', href: 'dining' },
    { name: 'ABOUT', href: 'about' },
    { name: 'CONTACT', href: 'contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav className="fixed w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 top-4 sm:top-8 md:top-12 left-1/2 -translate-x-1/2 rounded-full sm:rounded-[80px] md:rounded-[140px]">
      <div className="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-8 lg:py-4">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center p-1 sm:p-2 md:p-3 lg:p-4">
            <Link href="/" className="flex flex-col">
              <Image
                src={Logo}
                alt="MENA Logo"
                width={174}
                height={80}
                className="w-[80px] h-auto sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[174px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8" ref={dropdownRef}>
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
                      <div className="text-[18px] font-weight-400 absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-in fade-in zoom-in-95 duration-200 z-50">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="font-sansation font-normal not-italic text-[18px] leading-6.75 uppercase text-[#454779]  font-weight-400 block px-4 py-3 text-xs  hover:bg-gray-50 hover:text-accent transition-colors border-b last:border-0 border-gray-50"
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
              className="font-sansation font-bold text-xs lg:text-sm xl:text-base inline-flex items-center px-2 lg:px-1 xl:px-6 py-1.5 lg:py-2 xl:py-2.5 border-[0.5px] border-[#00B3DD] text-[#00B3DD] hover:bg-accent hover:text-white rounded-full transition-all duration-300 uppercase tracking-wider group justify-between "
              onClick={() => setIsOpen(false)}
            >
              <span className="hidden xl:inline">Book Your Stay</span>
              <span className="xl:hidden">Book</span>
              <span className="ml-1.5 lg:ml-2 xl:ml-3 inline-block transition-all duration-300 visit-hotel-icon">
                <Image
                  src={visithotelicon}
                  alt="Visit Hotel Icon"
                  className="w-3 h-auto lg:w-13 lg:h-auto"
                />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand focus:outline-none p-2"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute left-0 right-0 top-full w-full overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="px-4 pt-2 pb-20 space-y-1 sm:px-6 text-center flex flex-col items-center justify-start mt-6 sm:mt-10">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full">
                  {link.subItems ? (
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.name ? null : link.name)
                        }
                        className="flex items-center justify-center px-3 py-3 sm:py-4 text-base sm:text-lg font-heading font-medium text-gray-800 hover:text-accent w-full"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`ml-2 transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === link.name && (
                        <div className="bg-gray-50 w-full rounded-xl py-2 mb-2">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 sm:py-3 text-sm text-gray-600"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
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
                      className="block px-3 py-3 sm:py-4 text-base sm:text-lg font-heading font-medium text-gray-800 hover:text-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="#book"
                className="mt-6 sm:mt-8 inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 border border-accent text-accent hover:bg-accent hover:text-white rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 uppercase tracking-wider group"
                onClick={() => setIsOpen(false)}
              >
                Book Your Stay
                <span className="ml-2 sm:ml-3 md:ml-4 inline-block transition-all duration-300 visit-hotel-icon">
                  <Image
                    src={visithotelicon}
                    alt="Visit Hotel Icon"
                    className="w-3 h-auto sm:w-3.5 md:w-4"
                  />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
