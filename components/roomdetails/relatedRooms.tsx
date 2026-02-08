import React from 'react';
import Image from 'next/image';
import roomtitle from '../../public/images/roomtitle.png';
import RoomSlider from '../RoomSlider';
import { motion, Variants } from 'framer-motion';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const charContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const focusWordVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Helper: Animated Characters
const AnimatedChars = ({ text, className = '' }: { text: string; className?: string }) => (
  <>
    {text.split('').map((char, index) => (
      <motion.span variants={charVariants} key={index} className={`inline-block ${className}`}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </>
);

const RelatedRooms: React.FC = () => {
  return (
    <section className="w-full bg-white relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden">
        <Image
          src={roomtitle}
          alt="Rooms Background"
          className="w-full max-w-[600px] sm:max-w-[450px] md:max-w-[700px] lg:max-w-[861px] opacity-[80%] object-contain"
          style={{
            filter:
              'brightness(0) saturate(100%) invert(26%) sepia(27%) saturate(956%) hue-rotate(197deg) brightness(99%) contrast(87%)',
          }}
          priority
        />
      </div>
      <div className="mx-auto max-w-[1720px] ">
        {/* Header Section */}
        <div className="relative ">
          {/* Background Text "ROOMS" */}

          {/* Main Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.h1
              variants={charContainer}
              className="font-['Sansation'] font-light text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] uppercase text-[#454779] leading-tight"
            >
              <AnimatedChars text="Accommodations Designed for " />
              <AnimatedChars text="Every Guest" className="font-bold" />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="font-['Poppins'] text-[#2A2D71] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] max-w-4xl"
            >
              Your perfect space in Dubai awaits. Our thoughtfully designed suites and apartments
              blend comfort with practicality, creating a true home-away-from-home for a two-night
              getaway or a two-month residence.
            </motion.p>
          </motion.div>
        </div>

        {/* Room Slider */}
        <div className="relative">
          <RoomSlider />
        </div>
      </div>
    </section>
  );
};

export default RelatedRooms;
