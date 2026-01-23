import React from 'react';
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

const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-5 p-8 lg:p-[100px] w-full max-w-[1920px] mx-auto bg-white">
      {/* Left Side */}
      <div className="flex flex-col items-start p-[30px] gap-[30px] w-full lg:w-[450px] min-h-[666px] bg-[rgba(155,169,202,0.2)] rounded-[30px] shrink-0">
        {/* Contact Info Title */}
        <div className="flex flex-col gap-[11px] w-full">
          <h3 className="font-sansation text-[18px] uppercase text-[#6D6E87] leading-[27px]">
            Contact Info
          </h3>
          <div className="w-[75px] border-t border-[#9BA9CA]"></div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-[10px] text-[#6D6E87]">
          <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <MapPin className="w-full h-full" />
          </div>
          <span className="font-poppins text-[18px] leading-[28px]">4a Street – Al Barsha 1</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-[10px] text-[#6D6E87]">
          <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <Mail className="w-full h-full" />
          </div>
          <span className="font-poppins text-[18px] leading-[28px] break-all">
            menahoteluae@alhokair.com
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-[10px] text-[#6D6E87]">
          <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <Phone className="w-full h-full" />
          </div>
          <span className="font-poppins text-[18px] leading-[28px]">+97143417474</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-[15px] mt-auto lg:mt-0">
          <SocialIcon icon={<Facebook size={20} />} />
          <SocialIcon icon={<Instagram size={20} />} active />
          <SocialIcon icon={<Twitter size={20} />} />
          <SocialIcon icon={<Linkedin size={20} />} />
          <SocialIcon icon={<Youtube size={20} />} />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end p-[30px] gap-[30px] w-full lg:flex-1 min-h-[666px] bg-[rgba(155,169,202,0.2)] rounded-[30px]">
        <div className="flex flex-col items-start p-[20px] lg:p-[36px] gap-[26px] w-full h-full bg-white rounded-[30px]">
          {/* Email Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-poppins text-[20px] text-[#454779]">Your Email</label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="w-full h-[60px] rounded-[160px] px-[30px] border border-gray-200 text-[#8A8BB3] font-poppins text-[20px] outline-none focus:border-[#00B3DD]"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-poppins text-[20px] text-[#454779]">Your Phone</label>
            <input
              type="tel"
              placeholder="+910123456789"
              className="w-full h-[60px] rounded-[160px] px-[30px] border border-gray-200 text-[#8A8BB3] font-poppins text-[20px] outline-none focus:border-[#00B3DD]"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2 w-full h-flex-1">
            <label className="font-poppins text-[20px] text-[#454779]">Message</label>
            <textarea
              placeholder="type here"
              className="w-full h-[156px] rounded-[20px] p-[30px] border border-gray-200 text-[#8A8BB3] font-poppins text-[20px] outline-none focus:border-[#00B3DD] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full h-[68px] bg-[#00B3DD] rounded-[60px] flex items-center justify-between px-[32px] mt-auto hover:bg-[#009ac0] transition-colors cursor-pointer group">
            <span className="font-sansation font-bold text-[20px] tracking-[1.25px] uppercase text-white">
              SEND MESSAGE
            </span>
            <div className="w-[54px] h-[44px] rounded-[96px] border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#00B3DD] text-white transition-all">
              <ArrowUpRight size={20} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
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

export default ContactInfo;
