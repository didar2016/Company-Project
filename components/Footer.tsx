import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import footerimage from '../public/images/logomena.png';
import visithotelicon from '../public/images/visithotelicon.png';

const Footer = () => {
  return (
    <footer className=" bg-[#2A2D71] pt-8 lg:pt-[70px] xl:pt-[100px] px-8 lg:px-[70px] xl:px-[100px] relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-wrap flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-row items-start justify-between w-full max-w-[1720px] mx-auto gap-12 lg:gap-[40px] xl:gap-[60px] z-10 pb-10">
        {/* Column 1: Brand & Description */}
        <div className="flex flex-col items-start gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 w-full lg:w-auto xl:w-[444px] 2xl:w-[500px] lg:col-span-1 xl:shrink-0">
          <div className="relative w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[250px] h-[75px] sm:h-[85px] md:h-[95px] lg:h-[105px] xl:h-[115px] 2xl:h-[130px]">
            <Image
              src={footerimage}
              alt="MENA ApartHotel Albarsha"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <p className="font-sansation font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[22px] xl:leading-[24px] 2xl:leading-[26px] tracking-[0.75px] text-white max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] 2xl:max-w-[520px]">
            Situated in the vibrant city of Dubai, MENA ApartHotel Albarsha is the perfect choice
            for short or extended stays.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-start gap-[10px] lg:gap-[12px] xl:gap-[10px] 2xl:gap-[14px] w-full lg:w-auto xl:w-[286px] 2xl:w-[320px] lg:col-span-1 xl:shrink-0">
          <FooterLink text="HOME" link="/" />
          <FooterLink text="OUR DESTINATIONS" link="/locations" />
          <FooterLink text="OFFERS" link="/dining" />
          <FooterLink text="contact" link="/contact" />
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col items-start gap-[30px] lg:gap-[35px] xl:gap-[30px] 2xl:gap-[40px] w-full lg:w-auto xl:w-[450px] 2xl:w-[500px] lg:col-span-1 xl:shrink-0">
          {/* Header */}
          <div className="flex flex-col items-start gap-[11px] lg:gap-[13px] xl:gap-[11px] 2xl:gap-[15px] w-full">
            <h4 className="font-sansation text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] uppercase text-white leading-[24px] sm:leading-[26px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] 2xl:leading-[36px]">
              CONTACT US
            </h4>
            <div className="w-[75px] lg:w-[85px] xl:w-[75px] 2xl:w-[95px] border-t border-[#9BA9CA]"></div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[10px] 2xl:gap-[14px] w-full">
            {/* Address */}
            <div className="flex items-start gap-[10px] lg:gap-[12px] xl:gap-[10px] 2xl:gap-[14px] text-white">
              <div className="w-[24px] lg:w-[26px] xl:w-[24px] 2xl:w-[28px] h-[24px] lg:h-[26px] xl:h-[24px] 2xl:h-[28px] mt-[2px] flex items-center justify-center shrink-0">
                <MapPin
                  size={24}
                  className="text-[#6D6E87] lg:w-[26px] lg:h-[26px] xl:w-[24px] xl:h-[24px] 2xl:w-[28px] 2xl:h-[28px]"
                  fill="none"
                  stroke="currentColor"
                />
              </div>
              <span className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[33px]">
                4a Street – Al Barsha 1
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-[10px] lg:gap-[12px] xl:gap-[10px] 2xl:gap-[14px] text-white">
              <div className="w-[24px] lg:w-[26px] xl:w-[24px] 2xl:w-[28px] h-[24px] lg:h-[26px] xl:h-[24px] 2xl:h-[28px] flex items-center justify-center shrink-0">
                <Mail
                  size={24}
                  className="text-[#6D6E87] lg:w-[26px] lg:h-[26px] xl:w-[24px] xl:h-[24px] 2xl:w-[28px] 2xl:h-[28px]"
                />
              </div>
              <span className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[33px] break-all">
                menahoteluae@alhokair.com
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-[10px] lg:gap-[12px] xl:gap-[10px] 2xl:gap-[14px] text-white">
              <div className="w-[24px] lg:w-[26px] xl:w-[24px] 2xl:w-[28px] h-[24px] lg:h-[26px] xl:h-[24px] 2xl:h-[28px] flex items-center justify-center shrink-0">
                <Phone
                  size={24}
                  className="text-[#6D6E87] lg:w-[26px] lg:h-[26px] xl:w-[24px] xl:h-[24px] 2xl:w-[28px] 2xl:h-[28px]"
                />
              </div>
              <span className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[33px]">
                +97143417474
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-[15px] lg:gap-[18px] xl:gap-[15px] 2xl:gap-[20px]">
            <SocialIcon icon={<Facebook size={20} />} />
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Linkedin size={20} />} />
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col items-start w-full lg:w-auto xl:w-[286px] 2xl:w-[320px] lg:col-span-1 xl:shrink-0 h-auto lg:h-[240px] xl:h-[220px] 2xl:h-[260px] relative">
          {/* Header */}
          <div className="flex flex-col items-start gap-[11px] lg:gap-[13px] xl:gap-[11px] 2xl:gap-[15px] w-full mb-[10px] lg:mb-[12px] xl:mb-[10px] 2xl:mb-[14px]">
            <h4 className="font-sansation text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] uppercase text-white leading-[24px] sm:leading-[26px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] 2xl:leading-[36px]">
              NEWSLETTER
            </h4>
            <div className="w-[75px] lg:w-[85px] xl:w-[75px] 2xl:w-[95px] border-t border-[#9BA9CA]"></div>
          </div>

          <p className="font-sansation font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[22px] xl:leading-[24px] 2xl:leading-[26px] tracking-[0.75px] text-white mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px] xl:mb-[36px] 2xl:mb-[40px] z-10 relative">
            Get our newest offers and exclusive
            <br /> news sent right to your inbox
          </p>

          {/* <button className="w-[201px] lg:w-[220px] xl:w-[201px] 2xl:w-[240px] h-[68px] lg:h-[72px] xl:h-[68px] 2xl:h-[76px] bg-[#00B3DD] rounded-[60px] flex items-center justify-center gap-[16px] lg:gap-[18px] xl:gap-[16px] 2xl:gap-[20px] hover:bg-[#009ac0] transition-colors cursor-pointer group z-10">
            <span className="font-sansation font-bold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px] 2xl:text-[23px] tracking-[1.25px] uppercase text-white">
              SIGN UP
            </span>
            <div className="w-[54px] lg:w-[58px] xl:w-[54px] 2xl:w-[62px] h-[44px] lg:h-[48px] xl:h-[44px] 2xl:h-[52px] rounded-[96px] border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#00B3DD] text-white transition-all">
              <ArrowUpRight
                size={20}
                className="lg:w-[22px] lg:h-[22px] xl:w-[20px] xl:h-[20px] 2xl:w-[24px] 2xl:h-[24px]"
                strokeWidth={3}
              />
            </div>
          </button> */}

          <button className="flex flex-row justify-between items-center  gap-1.5 sm:gap-2.5 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
            <span className="pl-2 sm:pl-4 font-['Sansation'] text-[14px] sm:text-[16px] md:text-[20px] uppercase text-white">
              SIGN UP
            </span>
            <span className="py-2">
              <Image
                src={visithotelicon}
                alt="Visit Hotel Icon"
                className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px] filter brightness-0 invert sepia-0 saturate-100 hue-rotate-180"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white rounded-t-[20px] lg:rounded-t-[25px] xl:rounded-t-[20px] py-[20px] lg:py-[24px] xl:py-[20px] z-10 relative h-[36px] sm:h-[52] lg:h-[64px] xl:h-[76px] flex items-center justify-center">
        <p className="font-sansation font-light text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] tracking-[0.75px] text-[#454779] text-center">
          © 2025 MENA Hotels & Resorts
        </p>
      </div>

      {/* Background "M" Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 hidden lg:block xl:block 2xl:block z-0 select-none">
        <span className="font-sansation text-[400px] lg:text-[450px] xl:text-[500px] 2xl:text-[600px] leading-none text-white opacity-20 transform translate-x-16 lg:translate-x-18 xl:translate-x-20 2xl:translate-x-24 translate-y-16 lg:translate-y-18 xl:translate-y-20 2xl:translate-y-24 block">
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
    <div className="flex flex-col items-start gap-[11px] lg:gap-[13px] xl:gap-[11px] 2xl:gap-[15px] w-full group cursor-pointer">
      <Link
        href={link}
        className="font-sansation text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] uppercase text-white leading-[24px] sm:leading-[26px] md:leading-[27px] lg:leading-[30px] xl:leading-[33px] 2xl:leading-[36px] hover:text-[#00B3DD] transition-colors"
      >
        {text}
      </Link>
      <div
        className={`w-[75px] lg:w-[85px] xl:w-[75px] 2xl:w-[95px] border-t ${active ? 'border-[#00B3DD]' : 'border-[#9BA9CA] group-hover:border-[#00B3DD] transition-colors'}`}
      ></div>
    </div>
  );
};

const SocialIcon = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => {
  return (
    <div
      className={`w-[44px] lg:w-[48px] xl:w-[44px] 2xl:w-[52px] h-[44px] lg:h-[48px] xl:h-[44px] 2xl:h-[52px] shrink-0 rounded-full flex justify-center items-center transition-colors cursor-pointer ${active ? 'bg-[#00B3DD] text-white' : 'border border-[#9BA9CA] text-[#6D6E87] hover:bg-[#00B3DD] hover:text-white hover:border-[#00B3DD]'}`}
    >
      {icon}
    </div>
  );
};

export default Footer;
