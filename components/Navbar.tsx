import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Logo from "../public/images/Logo.png";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { name: "HOME", href: "/" },
    {
      name: "ROOMS",
      href: "#rooms",
      subItems: [
        { name: "Studio Apartment", href: "#rooms" },
        { name: "One Bedroom", href: "#rooms" },
        { name: "Two Bedroom", href: "#rooms" },
      ],
    },
    {
      name: "DINING",
      href: "#dining",
      subItems: [
        { name: "All Day Dining", href: "#dining" },
        { name: "Coffee Lounge", href: "#dining" },
        { name: "Room Service", href: "#dining" },
      ],
    },
    {
      name: "AMENITIES",
      href: "#amenities",
      subItems: [
        { name: "Swimming Pool", href: "#amenities" },
        { name: "Gymnasium", href: "#amenities" },
        { name: "Spa & Wellness", href: "#amenities" },
      ],
    },
    { name: "ABOUT", href: "#about" },
    { name: "LOCATION", href: "#location" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <Image src={Logo} alt="MENA Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subItems ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex items-center text-xs font-medium text-brand hover:text-accent transition-colors tracking-wide focus:outline-none uppercase"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === link.name
                            ? "rotate-180 text-accent"
                            : "text-accent"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-in fade-in zoom-in-95 duration-200 z-50">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-xs text-gray-600 hover:bg-gray-50 hover:text-accent transition-colors border-b last:border-0 border-gray-50"
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
                    className="text-xs font-medium text-brand hover:text-accent transition-colors tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
              <Link
                href="#book"
                className="inline-flex items-center px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-wider group"
                onClick={() => setIsOpen(false)}
              >
                Book Your Stay
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute left-0 right-0 w-screen h-screen overflow-y-auto">
            <div className="px-4 pt-2 pb-20 space-y-1 sm:px-3 text-center flex flex-col items-center justify-start mt-10 h-full">
              {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              {link.subItems ? (
                <div className="flex flex-col items-center">
                  <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === link.name ? null : link.name
                  )
                }
                className="flex items-center justify-center px-3 py-4 text-lg font-heading font-medium text-gray-800 hover:text-accent w-full"
                  >
                {link.name}
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform duration-200 ${
                    activeDropdown === link.name ? "rotate-180" : ""
                  }`}
                />
                  </button>

                  {activeDropdown === link.name && (
                <div className="bg-gray-50 w-full rounded-xl py-2 mb-2">
                  {link.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block py-3 text-sm text-gray-600"
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
                  className="block px-3 py-4 text-lg font-heading font-medium text-gray-800 hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
              ))}
              <Link
            href="#book"
            className="mt-8 inline-flex items-center px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-wider group"
            onClick={() => setIsOpen(false)}
              >
            Book Your Stay
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
