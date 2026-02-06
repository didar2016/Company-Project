import React from 'react';
import Image from 'next/image';
import roomtitle from '../../public/images/roomtitle.png';
import RoomSlider from '../RoomSlider';

const RelatedRooms: React.FC = () => {
  return (
    <section className="w-full bg-white relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden">
        <Image
          src={roomtitle}
          alt="Rooms Background"
          className="w-full max-w-[600px] sm:max-w-[450px] md:max-w-[700px] lg:max-w-[861px] opacity-[80%] object-contain"
          style={{
            filter:
              'brightness(0) saturate(100%) invert(26%) sepia(27%) saturate(956%) hue-rotate(197deg) brightness(99%) contrast(87%)',
          }}
          priority
        />
      </div>
      <div className="mx-auto max-w-[1720px] ">
        {/* Header Section */}
        <div className="relative ">
          {/* Background Text "ROOMS" */}

          {/* Main Title */}
          <div className="relative z-10">
            <h1 className="font-['Sansation'] font-light text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] uppercase text-[#454779] leading-tight">
              Accommodations Designed for Every Guest
            </h1>

            {/* Description */}
            <p className="font-['Poppins'] text-[#2A2D71] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] max-w-4xl">
              Your perfect space in Dubai awaits. Our thoughtfully designed suites and apartments
              blend comfort with practicality, creating a true home-away-from-home for a two-night
              getaway or a two-month residence.
            </p>
          </div>
        </div>

        {/* Room Slider */}
        <div className="relative">
          <RoomSlider />
        </div>
      </div>
    </section>
  );
};

export default RelatedRooms;
