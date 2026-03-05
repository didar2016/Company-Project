'use client';
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import AnimatedText from '../animation/AnimateText';

const facilitiesTitleHTML = 'Facilities That Enhance Your Stay';
import { useFacilities } from '@/hooks/useWebsite';
import { getImageUrl } from '@/hooks/imageMake';

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

const Facilities = () => {
  return (
    <section className="bg-white w-full  py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="flex flex-col items-center space-y-15 max-w-[1720px] mx-auto">
        {/* Header Section */}
        <HeaderSection />

        {/* Cards Grid */}
        <CardGrid />
      </div>
    </section>
  );
};

export default Facilities;

const HeaderSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={staggerContainer}
      className="text-center px-4 space-y-[8px] "
    >
      <motion.h1
        variants={fadeInUp}
        className="font-['Sansation'] font-light text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] uppercase text-[#454779] leading-tight"
      >
        <AnimatedText>
          <div dangerouslySetInnerHTML={{ __html: facilitiesTitleHTML }} />
        </AnimatedText>
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="font-['Poppins'] text-[#2A2D71] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] "
      >
        MENA ApartHotel Albarsha offers a range of facilities designed to provide comfort and MENA
        ApartHotel Albarsha offers a range of facilities designed to provide comfort and
        convenience, ensuring an exceptional experience for both short and extended stays.
      </motion.p>
    </motion.div>
  );
};

const CardGrid = () => {
  const facilities = useFacilities();

  return (
    <div className="w-full max-w-[1720px]">
      <div className="mx-auto">
        {' '}
        {/* Spacer */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-[20px] gap-y-8 sm:gap-y-12">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 sm:gap-[30px] group h-full relative w-full min-w-[350px] md:min-w-[350px] max-w-[540px] xl:max-w-[540px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={getImageUrl(item.image)}
                alt={item.title}
                className="object-fill transition-transform duration-700 group-hover:scale-105 h-70 w-full"
                width={800}
                height={500}
              />

              {/* Overlay Container */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 transform translate-y-0 group-hover:-translate-y-2">
                <h3 className="text-white text-xl md:text-2xl font-light text-center mb-2 drop-shadow-lg">
                  {item.title}
                </h3>
              </div>

              {/* Subtitle - Slides up on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 pt-16 bg-gradient-to-t from-black/90 via-black/70 to-transparent 
                           transform translate-y-full group-hover:translate-y-0 
                           transition-transform duration-500 ease-out"
              >
                <div className="text-center">
                  <h3 className="text-white text-xl md:text-2xl font-light mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-4 group-hover:translate-y-0">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
