import React from 'react';
import { motion, Variants } from 'framer-motion';
import Hero from '../Hero';
import HotelLocations from '../HotelLocations';
import menaheroimage from '../../public/images/menaapartheroimage.png';
import Description from '@/components/about/description';
import RelatedRooms from '@/components/roomdetails/relatedRooms';
import WeekendOffer from '@/components/dining/WeekendOffer';
import Facilities from '@/components/amenities/Facilities';
import OurStory from '@/components/about/ourstory';
import MasaTurkishEatery from '@/components/dining/MasaTurkishEatery';
import MapReview from '@/components/roomdetails/map_review';
import LocationSlider from '../location/locationSlider';

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
      staggerChildren: 0.2, // Stagger main elements (H2, H1, P)
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

export default function HomePage() {
  return (
    <>
      <Hero
        image={menaheroimage}
        title="Welcome to MENA ApartHotel Albarsha"
        description=""
        component="index"
      />
      <Description />
      <RelatedRooms />
      <WeekendOffer />
      <Facilities />
      <WrapLocationSlider />
      <MasaTurkishEatery />
      <OurStory />
      <WrapMapReview />
      <HotelLocations />
    </>
  );
}

const WrapMapReview = () => (
  <div className=" pt-[40px] lg:pt-[100px] bg-white">
    <div className="flex justify-center w-full px-4 lg:px-[100px]">
      <div className="flex flex-col xl:flex-row items-center gap-[100px] w-full max-w-[1720px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="flex flex-col items-start gap-2 w-full max-w-[1234px]"
        >
          <motion.h1
            variants={charContainer}
            className="font-sansation font-light text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[1.2] xl:leading-[86px] uppercase text-[#454779]"
          >
            <AnimatedChars text="WHAT GUESTS ARE SAYING" />
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="font-sansation font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-[30px] tracking-[0.5px] text-[#2A2D71]"
          >
            Discover our ideal location in the vibrant heart of the city and hear what our esteemed
            guests have to say about their stays.
          </motion.p>
        </motion.div>
      </div>
    </div>
    <div>
      <MapReview />
    </div>
  </div>
);

const WrapLocationSlider = () => (
  <div className="bg-[#9BA9CA33] py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
    <div className="flex justify-center w-full ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainer}
        className="flex flex-col xl:flex-row items-center gap-[100px] w-full max-w-[1720px]"
      >
        <div className="flex flex-col items-start gap-2 w-full max-w-[1234px]">
          <motion.h1
            variants={charContainer}
            className="font-['Sansation'] font-light text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] uppercase text-[#454779] leading-tight"
          >
            <AnimatedChars text="Nearby Experiences" />
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="font-['Poppins'] text-[#8A8BB3] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] max-w-4xl"
          >
            Discover the best of Dubai with curated experiences just moments away from your
            doorstep.{' '}
          </motion.p>
        </div>
      </motion.div>
    </div>
    <div className="mt-10 sm:mt-12">
      <LocationSlider />
    </div>
  </div>
);
