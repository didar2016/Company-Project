'use client';
import Image from 'next/image';
import React from 'react';
import facility1 from '../../public/images/facilities1.png';
import facility2 from '../../public/images/facilities2.png';
import facility3 from '../../public/images/facilities3.png';
import facility4 from '../../public/images/facilities4.png';

const facilitiesData = [
  {
    title: 'Spa & Wellness Sanctuary',
    image: facility1,
  },
  {
    title: 'State-of-the-Art Fitness Center',
    image: facility2,
    // Placeholder matching theme
  },
  {
    title: 'Rooftop Infinity Pool',
    image: facility3,
  },
  {
    title: 'Executive Business Center',
    image: facility4,
    // Placeholder matching theme
  },
];

const Facilities = () => {
  return (
    <section className="bg-white w-full mx-auto overflow-hidden">
      <div className="flex flex-col items-center space-y-15">
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
    <div className="text-center px-4 space-y-[8px] md:px-[100px]">
      <h2 className="font-sansation text-[#454779] text-3xl md:text-[72px] font-normal leading-[86px] uppercase tracking-wide">
        EXPLORE OUR FACILITIES
      </h2>
      <p className="font-sansation text-[#2A2D71] md:text-[20px] max-w-[1092px] mx-auto font-light">
        Designed to cater to every aspect of your stay, from relaxation to productivity, our
        facilities ensure a memorable and comfortable experience.
      </p>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="w-full max-w-[1720px]">
      <div className="flex flex-wrap flex-row items-center justify-center gap-[20px]">
        {facilitiesData.map((item, index) => (
          <div key={index} className="relative rounded-[20px] overflow-hidden group">
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              className="object-fill transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Box */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 
                           w-[calc(100%-40px)] md:w-[810px] 
                           
                           bg-black/20 
                           backdrop-blur-[24px] 
                           rounded-tr-[20px] 
                          rounded-tl-[20px] 
                           p-[20px]
                           flex items-center justify-start 
                           transition-all duration-300"
            >
              <h3 className="text-white text-2xl md:text-[42px] leading-[56px] font-light text-left">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
