import React from 'react';
import Image from 'next/image';
import roomcover from '../public/images/room_cover_photo.png';
const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh]">
      {/* Background Image with Overlay */}
      <div className="w-full h-full">
        {/* Placeholder for Hero Image */}
        <Image
          src={roomcover}
          alt="Mena Hotel Interior"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover object-center scale-150 sm:scale-125 md:scale-110 lg:scale-100"
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="absolute z-20 text-center md:text-right text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto bottom-[10%] sm:bottom-[15%] md:bottom-[20%] right-0 sm:right-[2%] md:right-[5%] left-4 sm:left-auto">
        <h1
          className="text-white font-sansation text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] uppercase"
          style={{ fontWeight: 700 }}
        >
          Rooms
        </h1>
        <p
          className="font-sansation font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] text-center md:text-right max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none mx-auto md:mx-0"
          style={{ fontWeight: 300 }}
        >
          Mena Apart Hotels offers modern, fully equipped suites crafted for both business and
          leisure stays giving you the space to work, relax, and experience true comfort with every
          visit.
        </p>
      </div>
    </div>
  );
};

export default Hero;
