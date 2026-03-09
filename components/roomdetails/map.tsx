import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import visithotelicon from '../../public/images/visithotelicon.png';
import { ALLDATA } from '@/contexts/titles';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const Map: React.FC = () => {
  return (
    <section
      className={`relative w-full bg-white py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25`}
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Interactive Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className=" relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
          >
            {/* Map Container */}
            <div className="absolute inset-0 bg-gray-200">
              {/* Replace this iframe with your actual map implementation */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68284117486!2d54.947650190449806!3d25.076381026356393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1642345678901!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Info Overlay Card */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-8 lg:right-auto lg:max-w-[648px]">
              <div className="bg-[#171B43] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl backdrop-blur-sm bg-opacity-95">
                {/* Main Heading */}
                <h2 className="font-sansation text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[46px] font-light mb-3 sm:mb-4 md:mb-6 tracking-wide">
                  INTERACTIVE CITY MAP
                </h2>

                {/* Description */}
                <p className="font-sansation text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[28px] lg:leading-[36px] mb-4 sm:mb-6 md:mb-8 tracking-[0.5px] sm:tracking-[0.75px]">
                  Located in the vibrant heart of downtown, our hotel is just minutes from major
                  attractions, business districts, and cultural landmarks, offering unparalleled
                  access to the citys best.
                </p>

                <a href={ALLDATA.map.link} target="_blank" rel="noopener noreferrer">
                  <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 border-1 border-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                    <span
                      className="p-2 sm:p-3 md:p-4 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] uppercase text-white"
                      style={{ fontWeight: 700 }}
                    >
                      {' '}
                      GET DIRECTION
                    </span>
                    <Image
                      src={visithotelicon}
                      alt="Visit Hotel Icon"
                      className="h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px]"
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(56%) sepia(93%) saturate(1899%) hue-rotate(161deg) brightness(97%) contrast(101%)',
                      }}
                    />
                  </button>
                </a>
              </div>
            </div>

            {/* Location Pin Popup (Optional - shown on map) */}
            <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 hidden lg:block">
              <div className="bg-white rounded-lg shadow-xl p-3 sm:p-4 min-w-[160px] sm:min-w-[200px]">
                <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  MENA ApartHotel
                </h3>
                <div className="h-1 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
