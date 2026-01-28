'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import patatop from '../../public/images/pata_top.png';
import image1 from '../../public/images/roomcardimage1.png';
import image2 from '../../public/images/roomcardimage2.jpg';
import image3 from '../../public/images/roomcardimage3.png';
import image4 from '../../public/images/contactheroimage.png';
import image5 from '../../public/images/story05.jpg';
import image6 from '../../public/images/story06.jpg';
import image7 from '../../public/images/story07.jpg';
import image8 from '../../public/images/story01.jpg';
import image9 from '../../public/images/story02.jpg';
import image10 from '../../public/images/story03.jpg';
import image11 from '../../public/images/story04.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images (assuming these exist based on previous file listings)
// If specific images are missing, Next.js Image will show broken icon or we can use placeholders
const carouselImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const OurStory = () => {
  return (
    <section className="bg-[#2A2D71] relative py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[356px] h-auto z-0">
        <Image src={patatop} alt="Decorative Top" className="w-full h-auto object-contain" />
      </div>

      <div className="max-w-[1720px] mx-auto px-4 md:px-12 relative z-10 flex flex-col gap-20">
        {/* Header Section */}
        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center">
          <div className="py-[15px] px-[30px] sm:py-[20px] sm:px-[40px] md:py-[25px] md:px-[50px] lg:py-[30px] lg:px-[60px] backdrop-blur-[9px] bg-[#EDF7FC33] rounded-[20px]">
            <div
              className="font-sansation text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[126px] leading-[80%] text-[#00B3DD] opacity-40 uppercase"
              style={{ fontWeight: 400 }}
            >
              OUR
              <br />
              STORY
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1
              className="font-sansation text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight text-[#454779]"
              style={{ fontWeight: 300 }}
            >
              A LEGACY OF
              <br />
              <span className="text-[#00B3DD]"> HOSPITALITY </span> EXCELENCE
            </h1>
            <h2
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-relaxed font-light text-[#8A8BB3] tracking-[0.75px] mt-2 sm:mt-3 md:mt-4"
              style={{ fontWeight: 300 }}
            >
              Nestled in the vibrant heart of Al Barsha, MENA Aparthotel represents more than just a
              place to stay—it's a sanctuary where modern luxury meets the authentic warmth of
              Arabian hospitality.
            </h2>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
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
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: carouselImages.length,
              el: '.swiper-pagination-location',
            }}
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
            className="pb-12 px-2 sm:px-4"
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
