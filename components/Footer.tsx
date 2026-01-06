import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
    
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration (optional 'M' subtle background?) */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-5">
         <span className="text-[20rem] font-heading font-bold leading-none">M</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex flex-col">
              <span className="text-4xl font-heading font-bold tracking-tight">MENA</span>
              <span className="text-xs font-light tracking-widest uppercase opacity-70">ApartHotel Alliance</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                Located just minutes from the Mall of the Emirates, MENA ApartHotel Al Barsha places you at the center.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
                {['Home', 'Our Destinations', 'Offers', 'Contact', 'Careers'].map((item) => (
                    <li key={item}>
                        <Link href="#" className="hover:text-white transition-colors flex items-center group">
                           <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li className="flex items-start space-x-3">
                    <MapPin size={16} className="mt-0.5 text-accent" />
                    <span>4a Street – Al Barsha 1</span>
                </li>
                 <li className="flex items-center space-x-3">
                    <Mail size={16} className="text-accent" />
                    <a href="mailto:menahotels@alhokair.com" className="hover:text-white transition-colors">menahotels@alhokair.com</a>
                </li>
                 <li className="flex items-center space-x-3">
                    <Phone size={16} className="text-accent" />
                    <a href="tel:+97143417474" className="hover:text-white transition-colors">+971 4 341 7474</a>
                </li>
            </ul>
            
            {/* Socials */}
            <div className="flex space-x-4 mt-8">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="p-2 border border-gray-600 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all text-gray-400">
                        <Icon size={16} />
                    </a>
                ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-accent">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4">Get our news, offers and the latest happenings right in your inbox.</p>
            
            <form className="flex flex-col space-y-3">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-brand-light/20 border border-gray-700 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-accent text-white placeholder-gray-500"
                />
                <button type="submit" className="bg-accent hover:bg-white hover:text-brand text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider transition-all flex items-center justify-between group">
                    Sign Up
                    <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500 font-light">
           <p>© {currentYear} MENA Hotels & Resorts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
