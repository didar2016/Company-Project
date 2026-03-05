import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import visithotelicon from '../../public/images/visithotelicon.png';
import { useHotelInfo } from '@/hooks/useWebsite';
import { api } from '@/lib/api';

const ContactInfo = () => {
  const hotelInfo = useHotelInfo();
  const contact = hotelInfo?.contact;
  const socialLinks = hotelInfo?.socialLinks;
  const websiteId = process.env.NEXT_PUBLIC_WEBSITE_ID || '';

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    if (!formEmail.trim() || !formMessage.trim()) {
      setErrorMsg('Please fill in your email and message.');
      return;
    }
    setIsSending(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      await api.submitContactMessage(websiteId, {
        email: formEmail,
        phone: formPhone,
        message: formMessage,
      });
      setSuccessMsg('Your message has been sent successfully!');
      setFormEmail('');
      setFormPhone('');
      setFormMessage('');
    } catch (error: any) {
      setErrorMsg(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-5 p-5 lg:p-[100px] w-full max-w-[1920px] mx-auto bg-white">
      {/* Left Side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="flex flex-col items-start p-5 sm:p-[30px] gap-[30px] w-full lg:w-[450px] lg:min-h-[666px] bg-[rgba(155,169,202,0.2)] rounded-[30px] shrink-0"
      >
        {/* Contact Info Title */}
        <div className="flex flex-col gap-[11px] w-full">
          <h3 className="font-sansation text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] uppercase text-[#6D6E87] leading-[21px] sm:leading-[23px] md:leading-[24px] lg:leading-[27px] xl:leading-[30px] 2xl:leading-[33px]">
            Contact Info
          </h3>
          <div className="w-[75px] border-t border-[#9BA9CA]"></div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-[10px] text-[#6D6E87]">
          <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <MapPin className="w-full h-full" />
          </div>
          <span className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[29px] 2xl:leading-[30px]">
            {contact?.address || ''}
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-[10px] text-[#6D6E87]">
          <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <Mail className="w-full h-full" />
          </div>
          <span className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[29px] 2xl:leading-[30px] break-all">
            {contact?.email || ''}
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-[10px] text-[#6D6E87]">
          <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <Phone className="w-full h-full" />
          </div>
          <span className="font-poppins text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[29px] 2xl:leading-[30px]">
            {contact?.phone || ''}
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-[15px] mt-auto lg:mt-0">
          <SocialIcon
            icon={<Facebook size={20} />}
            onClick={() => window.open(socialLinks?.facebook, '_blank', 'noopener,noreferrer')}
          />
          <SocialIcon
            icon={<Instagram size={20} />}
            onClick={() => window.open(socialLinks?.instagram, '_blank', 'noopener,noreferrer')}
          />
          <SocialIcon
            icon={<Linkedin size={20} />}
            onClick={() => window.open(socialLinks?.linkedin, '_blank', 'noopener,noreferrer')}
          />
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        className="flex flex-col items-end p-5 sm:p-[30px] gap-5 sm:gap-[30px] w-full lg:flex-1 bg-[rgba(155,169,202,0.2)] rounded-[30px]"
      >
        <div className="flex flex-col items-start p-[20px] lg:p-[36px] gap-[26px] w-full h-full bg-white rounded-[30px]">
          {/* Email Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-poppins text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] text-[#454779]">
              Your Email
            </label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className="w-full h-[60px] rounded-[160px] px-[30px] border border-gray-200 text-[#8A8BB3] font-poppins text-[20px] outline-none focus:border-[#00B3DD]"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-poppins text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] text-[#454779]">
              Your Phone
            </label>
            <input
              type="tel"
              placeholder="+910123456789"
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
              className="w-full h-[60px] rounded-[160px] px-[30px] border border-gray-200 text-[#8A8BB3] font-poppins text-[20px] outline-none focus:border-[#00B3DD]"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2 w-full h-flex-1">
            <label className="font-poppins text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] text-[#454779]">
              Message
            </label>
            <textarea
              placeholder="type here"
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              className="w-full h-[120px] sm:h-[140px] md:h-[156px] lg:h-[156px] xl:h-[170px] 2xl:h-[180px] rounded-[20px] p-[20px] sm:p-[25px] md:p-[30px] border border-gray-200 text-[#8A8BB3] font-poppins text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] 2xl:text-[22px] outline-none focus:border-[#00B3DD] resize-none"
            />
          </div>

          {/* Status Messages */}
          {successMsg && <p className="text-green-600 font-poppins text-[16px]">{successMsg}</p>}
          {errorMsg && <p className="text-red-500 font-poppins text-[16px]">{errorMsg}</p>}

          {/* Submit Button */}

          <button
            onClick={handleSubmit}
            disabled={isSending}
            className="flex items-center gap-4 bg-[#00B3DD] rounded-[60px] pl-8 pr-3 py-3 text-white transition hover:bg-[#009bc0] group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="font-['Sansation'] font-bold text-lg tracking-[1.25px] uppercase">
              {isSending ? 'SENDING...' : 'SEND MESSAGE'}
            </span>
            {isSending ? (
              <Loader2 className="h-[30px] w-[30px] animate-spin" />
            ) : (
              <Image
                src={visithotelicon}
                alt="Visit Hotel Icon"
                className="object-fill object-center h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] lg:h-[30px] lg:w-[38px]"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(6502%) hue-rotate(18deg) brightness(119%) contrast(100%)',
                }}
              />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const SocialIcon = ({
  icon,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-[44px] h-[44px] shrink-0 rounded-full flex justify-center items-center transition-colors cursor-pointer ${active ? 'bg-[#00B3DD] text-white' : 'border border-[#9BA9CA] text-[#6D6E87] hover:bg-[#00B3DD] hover:text-white hover:border-[#00B3DD]'}`}
    >
      {icon}
    </div>
  );
};

export default ContactInfo;
