import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import hotelimage1 from '../public/images/hotel1.png';
import hotelimage2 from '../public/images/hotel2.png';
import hotelimage3 from '../public/images/hotel3.png';
import { motion, Variants } from 'framer-motion';
import AnimatedText from './animation/AnimateText';

import visithotelicon from '../public/images/visithotelicon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

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

interface Hotel {
  id: number;
  name: string;
  address: string;
  image: any;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'MENA HOTEL TABUK',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage1,
  },
  {
    id: 2,
    name: 'MENA ANDALUSIA RIYADH',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage2,
  },
  {
    id: 3,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage3,
  },
  {
    id: 4,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage1,
  },
  {
    id: 5,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage2,
  },
  {
    id: 2,
    name: 'MENA ANDALUSIA RIYADH',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage3,
  },
  {
    id: 3,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage1,
  },
];

const HotelLocations: React.FC = () => {
  return (
    <section id="location" className=" bg-white border-none">
      <div className=" bg-[#9BA9CA33] relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-sansation font-light text-brand uppercase tracking-wide"
            style={{ fontWeight: 300 }}
          >
            <AnimatedText>
              <div dangerouslySetInnerHTML={{ __html: 'MENA Hotels' }} />
            </AnimatedText>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-3 sm:mt-4 text-[#454779] max-w-5xl mx-auto font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] px-4 sm:px-0"
            style={{ fontWeight: 300 }}
          >
            Explore all our locations
          </motion.p>
        </motion.div>

        <div className="max-w-[1720px] mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            // navigation={{
            //   prevEl: prevRef.current,
            //   nextEl: nextRef.current,
            // }}
            // onSwiper={setSwiperInstance}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: hotels.length,
              el: '.swiper-pagination-location',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="pb-12 px-2 sm:px-4"
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index} className="h-full">
                <div
                  key={hotel.id}
                  className="flex flex-col gap-4 sm:gap-[30px] group h-full relative max-w-[540px] overflow-hidden mx-auto"
                >
                  {/* Image Container */}
                  <div className="border-[#A4D5F0] border-l-[4px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[116px]">
                    <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[26px] 2xl:text-[32px] font-sansation font-heading text-[#00B3DD] mb-1 sm:mb-2 ml-3 sm:ml-[20px]">
                      {hotel.name}
                    </h4>
                    <div
                      className="flex items-start space-x-2 text-[12px] sm:text-sm mb-4 sm:mb-6 ml-3 sm:ml-[20px] text-[#454779] font-poppins"
                      style={{ fontWeight: 400 }}
                    >
                      <MapPin size={14} className="mt-1 flex-shrink-0 sm:w-4 sm:h-4" />
                      <p className="leading-relaxed">{hotel.address}</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden aspect-square w-full max-w-[540px]">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      className="object-fill object-center rounded-[15px] sm:rounded-[20px] md:rounded-[25px] w-full h-full"
                    />

                    <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4">
                      <button className="flex flex-row justify-between items-center w-[160px] sm:w-[200px] md:w-[244px] h-[48px] sm:h-[56px] md:h-[68px] gap-1.5 sm:gap-2.5 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                        <span className="pl-2 sm:pl-4 font-['Sansation'] text-[14px] sm:text-[16px] md:text-[20px] uppercase text-white">
                          Visit Hotel
                        </span>
                        <Image
                          src={visithotelicon}
                          alt="Visit Hotel Icon"
                          className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px] filter brightness-0 invert sepia-0 saturate-100 hue-rotate-180"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-6 sm:mt-8"></div>
        </div>

        {/* Pagination Dots (Mockup match) */}
        {/* <div className="flex justify-center mt-12 space-x-2">
          <span className="h-1.5 w-8 bg-accent rounded-full"></span>
          <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
        </div> */}
      </div>
    </section>
  );
};

export default HotelLocations;
