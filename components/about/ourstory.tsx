'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useOurStory } from '@/contexts/WebsiteContext';
import { getImageUrl } from '@/hooks/imageMake';

// Counter animation hook
const useCounter = (endValue: number, duration: number = 1000, suffix: string = '') => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const incrementTime = duration / endValue;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= endValue) {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [isInView, endValue, duration]);

  const displayValue = () => {
    if (suffix === '%') return `${count}%`;
    if (suffix === '+') return `${count}+`;
    if (suffix === '/7') return count >= 24 ? '24/7' : `${count}/7`;
    return count.toString();
  };

  return { displayValue: displayValue(), countRef };
};

const OurStory = () => {
  const suitesCounter = useCounter(150, 500, '+');
  const satisfactionCounter = useCounter(98, 1000, '%');
  const conciergeCounter = useCounter(24, 1500, '/7');

  const ourstory = useOurStory();

  return (
    <section className="bg-[#2A2D71] relative overflow-hidden mx-auto">
      <div className="py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
        <div className="mx-auto max-w-[1720px] relative z-10 flex flex-col gap-10 sm:gap-20">
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
                Nestled in the vibrant heart of Al Barsha, MENA Aparthotel represents more than just
                a place to stay—it's a sanctuary where modern luxury meets the authentic warmth of
                Arabian hospitality.
              </h2>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="px-10 py-4 flex flex-col items-center gap-2 text-center">
                <span
                  ref={suitesCounter.countRef}
                  className="font-['Sansation'] text-[#00B3DD] text-5xl md:text-[80px] font-bold"
                >
                  {suitesCounter.displayValue}
                </span>
                <span className="font-['Sansation'] text-white text-xl uppercase tracking-wider">
                  Suites
                </span>
              </div>
              <div className="px-10 py-4 flex flex-col items-center gap-2 text-center">
                <span
                  ref={satisfactionCounter.countRef}
                  className="font-['Sansation'] text-[#00B3DD] text-5xl md:text-[80px] font-bold"
                >
                  {satisfactionCounter.displayValue}
                </span>
                <span className="font-['Sansation'] text-white text-xl uppercase tracking-wider">
                  Guest Satisfaction
                </span>
              </div>
              <div className="px-10 py-4 flex flex-col items-center gap-2 text-center">
                <span
                  ref={conciergeCounter.countRef}
                  className="font-['Sansation'] text-[#00B3DD] text-5xl md:text-[80px] font-bold"
                >
                  {conciergeCounter.displayValue}
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
                dynamicMainBullets: ourstory?.images?.length,
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
              {ourstory?.images?.length > 0 &&
                ourstory?.images?.map((src: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-[400px] w-full rounded-[20px] overflow-hidden group">
                      <Image
                        src={getImageUrl(src)}
                        alt={`Hotel Image ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
