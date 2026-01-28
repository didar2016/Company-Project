'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images (assuming these exist based on previous file listings)
// If specific images are missing, Next.js Image will show broken icon or we can use placeholders
const carouselImages = [
  '/images/roomcardimage1.png',
  '/images/roomcardimage2.png',
  '/images/roomcardimage3.png',
  '/images/contactheroimage.png',
];

const OurStory = () => {
  return (
    <section className="bg-[#2A2D71] relative py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] opacity-10 pointer-events-none rotate-180 z-0">
        <Image src="/images/Pata.png" alt="Pattern" layout="fill" objectFit="contain" />
      </div>

      <div className="max-w-[1720px] mx-auto px-4 md:px-12 relative z-10 flex flex-col gap-20">
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-20">
          {/* Our Story Big Text & Title */}
          <div className="relative w-full xl:w-1/2 min-h-[200px] flex items-center">
            {/* Large Background Text */}
            <h1
              className="absolute left-0 top-1/2 -translate-y-1/2 font-['Sansation'] font-bold text-[80px] md:text-[150px] lg:text-[200px] leading-none text-transparent opacity-10 select-none whitespace-nowrap"
              style={{ WebkitTextStroke: '2px #00B3DD' }}
            >
              OUR STORY
            </h1>
          </div>

          {/* Description Text */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6 text-white text-center xl:text-left">
            <h2 className="font-['Sansation'] font-light text-3xl md:text-[56px] leading-tight uppercase">
              Unmatched Hospitality
            </h2>
            <p className="font-['Poppins'] text-[#8A8BB3] text-lg leading-relaxed">
              At MENA ApartHotel Albarsha, we take pride in providing an alcohol-free,
              family-friendly environment. Our team is dedicated to delivering personalized service
              that exceeds expectations, ensuring your stay is both comfortable and memorable.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="px-10 py-4 flex flex-col items-center gap-2 text-center">
              <span className="font-['Sansation'] text-[#00B3DD] text-5xl md:text-[80px] font-bold">
                150+
              </span>
              <span className="font-['Sansation'] text-white text-xl uppercase tracking-wider">
                Suites
              </span>
            </div>
            <div className="px-10 py-4 flex flex-col items-center gap-2 text-center">
              <span className="font-['Sansation'] text-[#00B3DD] text-5xl md:text-[80px] font-bold">
                98%
              </span>
              <span className="font-['Sansation'] text-white text-xl uppercase tracking-wider">
                Guest Satisfaction
              </span>
            </div>
            <div className="px-10 py-4 flex flex-col items-center gap-2 text-center">
              <span className="font-['Sansation'] text-[#00B3DD] text-5xl md:text-[80px] font-bold">
                24/7
              </span>
              <span className="font-['Sansation'] text-white text-xl uppercase tracking-wider">
                Concierge Service
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full py-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="w-full !pb-14"
          >
            {carouselImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] w-full rounded-[20px] overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Hotel Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Card - Discover More */}
        {/* <div className="bg-white rounded-[30px] p-8 md:p-12 lg:p-16 flex flex-col items-center text-center gap-8 mx-4 md:mx-0 shadow-xl relative z-10">
          <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
            <span className="font-['Sansation'] text-[#454779] text-base font-bold uppercase tracking-[3px]">
              Discover More
            </span>
            <p className="font-['Poppins'] text-[#8A8BB3] text-lg md:text-xl leading-relaxed">
              From shopping at the world-renowned Mall of the Emirates to exploring the vibrant
              attractions of Dubai, your stay at MENA ApartHotel Albarsha promises convenience,
              comfort, and the warmth of Arabian hospitality.
            </p>
            <p className="font-['Poppins'] text-[#8A8BB3] text-lg md:text-xl leading-relaxed mt-[-10px]">
              Book your stay today and let us create a home away from home for you in the heart of
              Dubai.
            </p>
          </div>

          <button className="mt-4 flex items-center gap-4 bg-[#00B3DD] rounded-[60px] pl-8 pr-3 py-3 text-white transition hover:bg-[#009bc0] group shadow-lg hover:shadow-xl">
            <span className="font-['Sansation'] font-bold text-lg tracking-[1.25px] uppercase">
              Book Your Stay Today
            </span>
            <div className="w-[44px] h-[44px] rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#00B3DD] transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[16px] h-[16px]"
              >
                <path
                  d="M1 13L13 1M13 1H5M13 1V9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default OurStory;
