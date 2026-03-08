import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import visithotelicon from '../public/images/visithotelicon.png';
import { useRouter } from 'next/router';
import room1 from '../public/images/roomcardimage1.png';
import room2 from '../public/images/roomcardimage2.jpg';
import room3 from '../public/images/roomcardimage3.png';
import { useRooms, useSiteSettings, useMeeting } from '@/contexts/WebsiteContext';
import { getImageUrl } from '@/hooks/imageMake';

interface NavLink {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  //no-undef
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const siteSettings = useSiteSettings();

  const meeting = useMeeting();

  const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '/about' },

    {
      name: 'ROOMS',
      href: '/room',
      subItems: [
        { name: 'Studio Apartment', href: '/room?type=studio' },
        { name: 'One Bedroom Apartment', href: '/room?type=one-bedroom' },
        { name: 'Two Bedroom Apartment', href: '/room?type=two-bedroom' },
      ],
    },
    { name: 'DINING', href: '/dining' },

    {
      name: 'FACILITIES',
      href: '/facilities',
    },

    { name: 'LOCATIONS', href: '/locations' },
    { name: 'MEETING', href: '/meeting' },
    { name: 'CONTACT', href: '/contact' },
  ];

  // Helper function to check if link is active
  const isActiveLink = (href: string) => {
    if (href === '/' && router.pathname === '/') return true;
    if (href !== '/' && router.pathname.startsWith(href)) return true;
    return false;
  };

  // Helper function to get hover color based on current page
  const getHoverColor = (linkHref: string) => {
    if (isActiveLink(linkHref)) return 'text-[#00B3DD]';
    return 'hover:text-[#00B3DD]';
  };

  // Dropdown hover handlers
  const handleMouseEnterDropdown = (linkName: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(linkName);
  };

  const handleMouseLeaveDropdown = () => {
    // Set a timeout to close dropdown after 1 second
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 600);
  };

  const handleMouseEnterDropdownMenu = () => {
    // Clear timeout if hovering over dropdown menu
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

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
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [activeDropdown]);

  // Handle scroll-based navbar visibility
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Get current scroll position
        const currentScrollY = window.scrollY;

        // Show navbar when at top of page
        if (currentScrollY < 10) {
          setIsVisible(true);
        }
        // Show navbar when scrolling up, hide when scrolling down
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          // Close dropdown when hiding navbar
          setActiveDropdown(null);
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const rooms = useRooms();

  return (
    <>
      <nav
        className={`fixed w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] z-50 bg-white/95 backdrop-blur-sm shadow-sm duration-300 top-4 sm:top-8 lg:top-12 left-0 right-0 mx-auto rounded-full sm:rounded-[80px] md:rounded-[140px] transition-transform ${
          isVisible ? 'translate-y-0' : '-translate-y-[200px]'
        }`}
      >
        <div className="px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-8 lg:py-4">
          <div className="flex justify-between items-center h-12 sm:h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center p-2 sm:p-0">
              <Link href="/" className="flex flex-col">
                {!siteSettings?.logo ? (
                  <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
                ) : (
                  <Image
                    src={getImageUrl(siteSettings?.logo)}
                    alt="MENA Logo"
                    className=" h-[45px]  sm:h-[50px]  lg:h-[70px] xl:h-[80px] w-auto"
                    width={100}
                    height={100}
                  />
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-[2px] xl:space-x-1"
              ref={dropdownRef}
            >
              {navLinks.map((link) => {
                if (meeting?.available == false && link.name === 'MEETING') {
                  return null;
                }

                return (
                  <div key={link.name} className="relative group">
                    {link.subItems ? (
                      <>
                        <div
                          onMouseEnter={() => handleMouseEnterDropdown(link.name)}
                          onMouseLeave={handleMouseLeaveDropdown}
                          className="relative"
                        >
                          <Link
                            href={link.href}
                            className={`flex flex-row items-center font-[--font-sansation] font-normal not-italic text-[16px] xl:text-[18px] uppercase transition-all duration-300
                            ${
                              isActiveLink(link.href)
                                ? 'bg-[#EBF0F8] text-[#00B3DD] px-5 py-2 rounded-full'
                                : `text-[#454779] ${getHoverColor(link.href)} px-5 py-2`
                            }`}
                          >
                            {link.name}
                            <ChevronDown
                              size={24}
                              className={`ml-1 transition-transform duration-200 ${
                                activeDropdown === link.name
                                  ? 'rotate-180 text-[#00B3DD]'
                                  : `${isActiveLink(link.href) ? 'text-[#00B3DD]' : 'text-[#454779] group-hover:text-[#00B3DD]'}`
                              }`}
                            />
                          </Link>

                          {/* Dropdown Menu */}
                          {activeDropdown === link.name &&
                            (link.name === 'ROOMS' ? (
                              <div
                                onMouseEnter={handleMouseEnterDropdownMenu}
                                onMouseLeave={handleMouseLeaveDropdown}
                                className="hidden lg:flex flex-row items-center p-5 gap-4 absolute top-[170%] left-1/2 -translate-x-1/2 mt-4 w-[672px] h-[330px] bg-white/70 backdrop-blur-[5px] rounded-[20px] shadow-lg border border-gray-100 animate-in fade-in zoom-in-95 duration-200 z-50"
                              >
                                {rooms.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={`/roomdetails?id=${subItem._id}`}
                                    className="group/card flex flex-col items-start gap-2.5 w-[200px] h-full transition-all"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="w-[200px] h-[60px] flex flex-col justify-start items-start px-2.5 gap-2.5 border-l border-[#9BA9CA] group-hover/card:border-[#A4D5F0] transition-colors duration-300">
                                      <span className="font-sansation font-normal text-[20px] leading-[30px] tracking-[0.5px] text-[#454779] group-hover/card:text-[#00B3DD] transition-colors duration-300">
                                        {subItem.name}
                                      </span>
                                    </div>
                                    <div className="w-[200px] h-[200px] rounded-[18.5px] relative overflow-hidden group-hover/card:drop-shadow-[0px_30px_50px_rgba(0,179,221,0.1)] transition-all duration-300">
                                      <Image
                                        src={getImageUrl(subItem.mainImage)}
                                        alt={subItem.name}
                                        fill
                                        className="object-cover"
                                      />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <div
                                onMouseEnter={handleMouseEnterDropdownMenu}
                                onMouseLeave={handleMouseLeaveDropdown}
                                className="text-[18px] font-weight-400 absolute top-full left-0 mt-4 w-[200px] bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-in fade-in zoom-in-95 duration-200 z-50"
                              >
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
                            ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`font-sansation not-italic text-[16px] xl:text-[18px] leading-6.75 uppercase transition-colors tracking-wide px-3 py-2 ${
                          isActiveLink(link.href)
                            ? 'bg-[#EBF0F8] text-[#00B3DD] rounded-full'
                            : `text-[#454779] ${getHoverColor(link.href)}`
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}

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
            {navLinks.map((link, index) => {
              if (meeting?.available == false && link.name === 'MEETING') {
                return null;
              }
              return (
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
                        className={`flex items-center justify-center px-6 py-4 text-xl font-semibold w-full rounded-2xl bg-white/20 shadow-sm hover:shadow-md hover:bg-white/50 transition-all duration-300 transform active:scale-[0.98] cursor-pointer touch-manipulation relative z-[57] ${
                          isActiveLink(link.href)
                            ? 'text-[#00B3DD]'
                            : 'text-gray-800 hover:text-[#00B3DD]'
                        }`}
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
                              : isActiveLink(link.href)
                                ? 'text-[#00B3DD]'
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
                              className={`block w-full py-2 px-6 text-lg font-bold transition-all duration-300 text-center uppercase tracking-wide ${
                                isActiveLink(subItem.href)
                                  ? 'text-[#00B3DD]'
                                  : 'text-[#454779]/80 hover:text-[#00B3DD]'
                              }`}
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
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 text-xl font-semibold rounded-2xl bg-white/20 shadow-sm hover:shadow-md hover:bg-white/50 transition-all duration-300 transform active:scale-[0.98] tracking-wide uppercase cursor-pointer touch-manipulation ${
                        isActiveLink(link.href)
                          ? 'text-[#00B3DD]'
                          : 'text-gray-800 hover:text-[#00B3DD]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}

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
