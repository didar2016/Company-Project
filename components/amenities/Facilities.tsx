'use client';
import Image from 'next/image';
import React from 'react';
import facility2 from '../../public/images/facilities2.png';
import facility3 from '../../public/images/pool.jpg';
import facility4 from '../../public/images/sauna.png';

const facilitiesData = [
  {
    title: 'Fitness Center',
    image: facility2,
    subTitle:
      'Stay active at our fitness center, equipped with state-of-the-art cardio and strength-training equipment. Whether you’re maintaining your routine or starting fresh, our facilities cater to all your fitness needs.',
  },
  {
    title: 'Rooftop Pool',
    image: facility3,
    subTitle:
      'Relax and rejuvenate in our rooftop pool, open daily from 9:00 AM to 6:00 PM. With stunning city views, it’s the perfect spot to unwind after a busy day or enjoy quality time with family and friends.',
  },
  {
    title: 'Sauna',
    image: facility4,
    subTitle:
      'Indulge in ultimate relaxation in our sauna, available from 9:00 AM to 6:00 PM. Designed for tranquility, it’s the ideal retreat to refresh your body and mind.',
  },
];

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
    <div className="text-center px-4 space-y-[8px] ">
      <h1 className="font-['Sansation'] font-light text-4xl md:text-[72px] uppercase text-[#454779] leading-tight">
        Facilities That Enhance Your Stay
      </h1>
      <p className="font-['Poppins'] text-[#2A2D71] text-lg md:text-xl ">
        MENA ApartHotel Albarsha offers a range of facilities designed to provide comfort and MENA
        ApartHotel Albarsha offers a range of facilities designed to provide comfort and
        convenience, ensuring an exceptional experience for both short and extended stays.
      </p>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="w-full max-w-[1720px]">
      <div className="flex flex-wrap flex-row items-center justify-center gap-[30px] mx-auto">
        {facilitiesData.map((item, index) => (
          <div
            key={index}
            className="relative max-w-90 w-full rounded-[20px] overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              className="object-fill transition-transform duration-700 group-hover:scale-105 h-70 w-full"
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
  );
};
