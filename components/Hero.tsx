import React from 'react';
import Image from 'next/image';
import roomcover from '../public/images/room_cover_photo.png';
const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
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

      <div className="absolute z-20 text-center md:text-right text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto bottom-[20%] right-[5%]">
        <h1
          className="text-white font-sansation text-[90px] leading-[110px] uppercase"
          style={{ fontWeight: 700 }}
        >
          Rooms
        </h1>
        <p
          className="font-sansation font-light text-[20px] leading-[120%] text-right"
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
