import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative w-full h-full">
           {/* Placeholder for Hero Image */}
           <Image
            src="https://placehold.co/1920x1080/eef2f5/2b2a59?text=Modern+Hotel+Room"
            alt="Mena Hotel Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        {/* Logo Mark (optional, mimicking style) */}
        <div className="mb-6">
            {/* Could put a logo icon here */}
        </div>
        
        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight mb-4 drop-shadow-lg">
          MENA
        </h1>
        
        <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-gray-100 drop-shadow-md max-w-2xl mx-auto">
          Agent Hotel Alliance 
        </p>
        
        <div className="mt-8 max-w-3xl mx-auto">
             <p className="text-sm md:text-base font-light text-gray-200 leading-relaxed md:max-w-xl mx-auto">
                Mena ApartHotel offers modern, fully equipped suites suited for both business and leisure stays giving you the space to work, relax, and experience true comfort with every visit.
             </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
