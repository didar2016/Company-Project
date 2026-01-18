'use client';
import Image from 'next/image';
import React from 'react';

const facilitiesData = [
  {
    title: 'Spa & Wellness Sanctuary',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=850&auto=format&fit=crop', // Placeholder matching theme
  },
  {
    title: 'State-of-the-Art Fitness Center',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=850&auto=format&fit=crop', // Placeholder matching theme
  },
  {
    title: 'Rooftop Infinity Pool',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=850&auto=format&fit=crop', // Placeholder matching theme
  },
  {
    title: 'Executive Business Center',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=850&auto=format&fit=crop', // Placeholder matching theme
  },
];

const Facilities = () => {
  return (
    <section className="bg-white w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex flex-col items-center py-[60px] gap-[60px]">
        {/* Header Section */}
        <div className="text-center px-4 space-y-15">
          <h2 className="text-[#313131] text-3xl md:text-5xl font-normal uppercase tracking-wide">
            EXPLORE OUR FACILITIES
          </h2>
          <p className="text-[#5E5E5E] text-base md:text-lg max-w-4xl mx-auto font-light">
            Designed to cater to every aspect of your stay, from relaxation to productivity, our
            facilities ensure a memorable and comfortable experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full px-4 xl:px-[100px] rounded-[20px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px] justify-items-center">
            {facilitiesData.map((item, index) => (
              <div
                key={index}
                className="relative w-full max-w-[850px] h-[415px] rounded-[20px] overflow-hidden group"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-fill transition-transform duration-700 group-hover:scale-105"
                  width={850}
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
      </div>
    </section>
  );
};

export default Facilities;
