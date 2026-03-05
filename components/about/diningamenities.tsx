import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import restaurent from '../../public/images/restaurent.jpg';
import visithotelicon from '../../public/images/visithotelicon.png';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
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

const DiningAmenities = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/dining');
  };
  return (
    <section className="w-full mx-auto flex flex-col gap-[10px] z-[3] relative  py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="w-full bg-[#EBEEF4] rounded-[20px] p-6 lg:p-[30px] flex flex-col gap-[20px] max-w-[1720px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="mx-auto flex flex-col items-center justify-center w-full min-h-[68px] text-center"
        >
          <motion.h2
            variants={charContainer}
            className="font-sansation font-light text-[32px] lg:text-[56px] leading-[40px] lg:leading-[68px] uppercase text-[#454779]"
          >
            <AnimatedChars text="DINING AND AMENITIES" />
          </motion.h2>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row items-stretch gap-[30px] w-full">
          {/* Left: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="w-full xl:w-[815px] min-h-[400px] xl:min-h-[628px] relative rounded-[20px] overflow-hidden order-1 xl:order-none"
          >
            <Image src={restaurent} alt="Masa Turkish Eatery" fill className="object-cover" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="flex flex-col justify-between p-6 lg:p-[20px] lg:gap-[40px] gap-6 w-full xl:w-[815px] bg-white rounded-[20px] backdrop-blur-[12px] order-2 xl:order-none"
          >
            {/* Top Text Content */}
            <div className="flex flex-col gap-6 lg:gap-[40px]">
              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-sansation font-bold text-[32px] lg:text-[42px] leading-[1.3] text-[#454779]">
                  Masa Turkish Eatery
                </h3>
                <p className="font-sansation text-[16px] lg:text-[20px] leading-[1.5] tracking-[0.5px] text-[#2A2D71]">
                  Savor the flavors of authentic Turkish cuisine at our on-site restaurant, Masa
                  Turkish Eatery, whether dining in the cozy restaurant or enjoying in-room dining,
                  every meal is crafted to delight your palate.
                </p>
              </div>

              {/* Guests can also enjoy */}
              <div className="flex flex-col gap-[20px] lg:gap-[10px]">
                <h4 className="font-sansation font-light text-[24px] lg:text-[32px] uppercase text-[#454779] leading-[1.4]">
                  Guests can also enjoy:
                </h4>

                <div className="flex flex-col gap-[20px]">
                  <AmenityItem text="A rooftop swimming pool for relaxation with a view" />
                  <AmenityItem text="A fully equipped fitness center to maintain your workout routine" />
                  <AmenityItem text="A rejuvenating sauna for ultimate relaxation" />
                  <AmenityItem text="Free Wi-Fi to stay connected throughout your stay" />
                </div>
              </div>
            </div>

            {/* Buttons - Following CSS structure logic for buttons at the bottom if needed, 
                             though not visible in the prompt image, they are present in the provided CSS. 
                         */}
            <div className=" pt-4">
              {/* Outline Button */}

              <button className="flex flex-row justify-between items-center  gap-1.5 sm:gap-2.5 border-2 border-[#9BA9CA] bg-white  opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                <span
                  onClick={handleNavigate}
                  className="pl-2 sm:pl-4 font-sansation font-[700] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase text-[#454779]"
                >
                  DISCOVER MORE
                </span>
                <span className="py-2">
                  <Image
                    src={visithotelicon}
                    alt="Visit Hotel Icon"
                    className="object-contain h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px]"
                    style={{
                      filter:
                        'brightness(0) saturate(100%) invert(56%) sepia(93%) saturate(1899%) hue-rotate(161deg) brightness(97%) contrast(101%)',
                    }}
                  />
                </span>
              </button>

              {/* Filled Button */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AmenityItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start lg:items-center gap-[15px]">
      <div className="w-[8px] h-[8px] bg-[#00B3DD] rotate-45 shrink-0 mt-[10px] lg:mt-0" />
      <p className="font-sansation text-[16px] lg:text-[20px] leading-[30px] tracking-[0.5px] text-[#2A2D71]">
        {text}
      </p>
    </div>
  );
};

export default DiningAmenities;
