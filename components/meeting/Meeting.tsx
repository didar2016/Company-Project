import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import AnimatedText from '../animation/AnimateText';
import visithotelicon from '../../public/images/visithotelicon.png';
import { getImageUrl } from '@/hooks/imageMake';
import Link from 'next/link';

// ─────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const facilities = [
  'Complimentary Wi-Fi and wireless AV solutions',
  'Projector and screen',
  'Integrated ceiling speakers with individual sound mixers',
  'LED wide screen with HDMI connectivity',
  'Flipcharts and stationery',
];

// ─────────────────────────────────────────
const coffeeBreaksTitleHTML = 'Coffee Breaks and Catering';

// Component
// ─────────────────────────────────────────
const MeetingComponent: React.FC<{ meeting: any }> = ({ meeting }) => {
  const meetingTitleHTML = meeting?.title || '';

  return (
    <section className="relative w-full bg-white overflow-hidden py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      {/* ── Background "EVENT" watermark ── */}

      <div className="max-w-[1720px] mx-auto relative z-10 flex flex-col gap-8 sm:gap-12 md:gap-16">
        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex flex-col gap-3 sm:gap-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-sansation uppercase text-[28px] sm:text-[38px] md:text-[50px] lg:text-[60px] xl:text-[68px] leading-tight text-[#454779]"
            style={{ fontWeight: 300 }}
          >
            <AnimatedText>
              <div dangerouslySetInnerHTML={{ __html: meetingTitleHTML }} />
            </AnimatedText>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-poppins text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#8A8BB3] leading-relaxed max-w-2xl"
            style={{ fontWeight: 300 }}
          >
            {meeting?.subtitle || ''}
          </motion.p>
        </motion.div>

        {/* ── Info Card: Room + Facilities ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="bg-[#EBEEF4] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[50px] flex flex-col md:flex-row gap-8 md:gap-12 xl:gap-20"
        >
          {/* Left – Room info */}
          <div className="flex flex-col gap-4 md:min-w-[260px] lg:min-w-[320px]">
            <h2
              className="font-sansation text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] text-[#454779] leading-tight"
              style={{ fontWeight: 700 }}
            >
              Executive Meeting Rooms
            </h2>
            <div>
              <p
                className="font-sansation uppercase text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#8A8BB3] tracking-widest mb-1"
                style={{ fontWeight: 400 }}
              >
                CAPACITY
              </p>
              <p
                className="font-sansation text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#454779]"
                style={{ fontWeight: 400 }}
              >
                Up to 60 delegates
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-[#9BA9CA]/40 self-stretch" />

          {/* Right – Facilities list */}
          <div className="flex flex-col gap-4 flex-1">
            <h3
              className="font-sansation uppercase text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] tracking-[3px] text-[#8A8BB3]"
              style={{ fontWeight: 400 }}
            >
              FACILITIES INCLUDE
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {facilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[6px] flex-shrink-0 w-[7px] h-[7px] rounded-full bg-[#00B3DD]" />
                  <span
                    className="font-sansation text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#454779] leading-relaxed"
                    style={{ fontWeight: 400 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Meeting Room Image ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px] xl:h-[600px] relative rounded-[20px] overflow-hidden shadow-xl"
        >
          <Image
            src={getImageUrl(meeting?.image)}
            alt="Executive Meeting Room"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* ── Coffee Breaks & Catering ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="bg-[#EBEEF4] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[50px] flex flex-col gap-3 sm:gap-4"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-sansation text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] text-[#454779] leading-tight"
            style={{ fontWeight: 700 }}
          >
            <AnimatedText>
              <div dangerouslySetInnerHTML={{ __html: coffeeBreaksTitleHTML }} />
            </AnimatedText>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-poppins text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#8A8BB3] leading-relaxed max-w-4xl"
            style={{ fontWeight: 300 }}
          >
            Delight your guests with a wide range of coffee breaks and customizable menus. Our
            banquet team is on hand to ensure seamless service throughout your event.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="font-poppins text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#8A8BB3] leading-relaxed max-w-4xl"
            style={{ fontWeight: 300 }}
          >
            From business meetings to private gatherings, our spaces provide the perfect setting for
            memorable events.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-start gap-3 sm:gap-4"
          >
            <Link
              href="/contact"
              className="font-sansation font-bold text-xs lg:text-sm xl:text-base inline-flex items-center px-2 lg:px-3 xl:px-4 py-1.5 lg:py-2 xl:py-2.5 border-[0.5px] border-[#9BA9CA] text-[#9BA9CA] hover:bg-accent hover:text-white rounded-full transition-all duration-300 uppercase tracking-wider group justify-between"
            >
              <span className="hidden min-[1385px]:inline"> BOOK NOW</span>
              <span className="ml-1.5 lg:ml-2 xl:ml-3 inline-block transition-all duration-300">
                <Image
                  src={visithotelicon}
                  alt="Visit Hotel Icon"
                  className="h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] [filter:brightness(0)_saturate(100%)_invert(56%)_sepia(93%)_saturate(1899%)_hue-rotate(161deg)_brightness(97%)_contrast(101%)] group-hover:[filter:brightness(0)_invert(1)] transition-all duration-300"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── CTA Buttons ── */}
      </div>
    </section>
  );
};

export default MeetingComponent;
