import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#2A2D71] flex flex-col items-center pt-[80px] lg:pt-[120px] pb-[100px] px-8 lg:px-[100px] gap-[60px] relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col xl:flex-row items-start justify-between w-full max-w-[1720px] gap-12 xl:gap-[60px] z-10">
        {/* Column 1: Brand & Description */}
        <div className="flex flex-col items-start gap-5 w-full xl:w-[444px] shrink-0">
          <div className="relative w-[193px] h-[103px]">
            <Image
              src="/images/Logo.png"
              alt="MENA ApartHotel Albarsha"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <p className="font-sansation font-light text-[16px] leading-[20px] tracking-[0.75px] text-white max-w-[444px]">
            Located just minutes from the Mall of the Emirates, MENA ApartHotel Albarsha places.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-start gap-[10px] w-full xl:w-[286px] shrink-0">
          <FooterLink text="HOME" link="/" />
          <FooterLink text="OUR DESTINATIONS" link="/locations" />
          <FooterLink text="OFFERS" link="/dining" />
          <FooterLink text="contact" link="/contact" />
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col items-start gap-[30px] w-full xl:w-[450px] shrink-0">
          {/* Header */}
          <div className="flex flex-col items-start gap-[11px] w-full">
            <h4 className="font-sansation text-[18px] uppercase text-white leading-[27px]">
              CONTACT US
            </h4>
            <div className="w-[75px] border-t border-[#9BA9CA]"></div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-[10px] w-full">
            {/* Address */}
            <div className="flex items-start gap-[10px] text-white">
              <div className="w-[24px] h-[24px] mt-[2px] flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-[#6D6E87]" fill="none" stroke="currentColor" />
              </div>
              <span className="font-poppins text-[18px] leading-[28px]">
                4a Street – Al Barsha 1
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-[10px] text-white">
              <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
                <Mail size={24} className="text-[#6D6E87]" />
              </div>
              <span className="font-poppins text-[18px] leading-[28px] break-all">
                menahoteluae@alhokair.com
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-[10px] text-white">
              <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
                <Phone size={24} className="text-[#6D6E87]" />
              </div>
              <span className="font-poppins text-[18px] leading-[28px]">+97143417474</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-[15px]">
            <SocialIcon icon={<Facebook size={20} />} />
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Linkedin size={20} />} />
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col items-start w-full xl:w-[286px] shrink-0 h-[220px] relative">
          {/* Header */}
          <div className="flex flex-col items-start gap-[11px] w-full mb-[10px]">
            <h4 className="font-sansation text-[18px] uppercase text-white leading-[27px]">
              NEWSLETTER
            </h4>
            <div className="w-[75px] border-t border-[#9BA9CA]"></div>
          </div>

          <p className="font-sansation font-light text-[16px] leading-[20px] tracking-[0.75px] text-white mb-[28px] z-10 relative">
            Get our newest offers and exclusive news sent right to your inbox
          </p>

          <button className="w-[201px] h-[68px] bg-[#00B3DD] rounded-[60px] flex items-center justify-center gap-[16px] hover:bg-[#009ac0] transition-colors cursor-pointer group z-10">
            <span className="font-sansation font-bold text-[20px] tracking-[1.25px] uppercase text-white">
              SIGN UP
            </span>
            <div className="w-[54px] h-[44px] rounded-[96px] border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#00B3DD] text-white transition-all">
              <ArrowUpRight size={20} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto w-full">
        <div className="max-w-[1720px] w-[90%] bg-white rounded-t-[20px] py-[20px] z-10 relative mt-auto xl:mt-0 xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2 h-[76px] flex items-center justify-center">
          <p className="font-sansation font-light text-[18px] lg:text-[24px] leading-[36px] tracking-[0.75px] text-[#454779] text-center">
            © 2025 MENA Hotels & Resorts
          </p>
        </div>
      </div>

      {/* Background "M" Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 hidden xl:block z-0 select-none">
        <span className="font-sansation text-[500px] leading-none text-white opacity-20 transform translate-x-20 translate-y-20 block">
          M
        </span>
        {/* This is a fallback if no specific image is available. 
                     If the large 'M' image is strictly required, we'd place an <Image /> here. 
                     Based on file list, no obvious 'watermark.png' found, so css text fallback or empty div. */}
      </div>
    </footer>
  );
};

const FooterLink = ({
  text,
  link,
  active = false,
}: {
  text: string;
  link: string;
  active?: boolean;
}) => {
  return (
    <div className="flex flex-col items-start gap-[11px] w-full group cursor-pointer">
      <Link
        href={link}
        className="font-sansation text-[18px] uppercase text-white leading-[27px] hover:text-[#00B3DD] transition-colors"
      >
        {text}
      </Link>
      <div
        className={`w-[75px] border-t ${active ? 'border-[#00B3DD]' : 'border-[#9BA9CA] group-hover:border-[#00B3DD] transition-colors'}`}
      ></div>
    </div>
  );
};

const SocialIcon = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => {
  return (
    <div
      className={`w-[44px] h-[44px] shrink-0 rounded-full flex justify-center items-center transition-colors cursor-pointer ${active ? 'bg-[#00B3DD] text-white' : 'border border-[#9BA9CA] text-[#6D6E87] hover:bg-[#00B3DD] hover:text-white hover:border-[#00B3DD]'}`}
    >
      {icon}
    </div>
  );
};

export default Footer;
