import React from 'react';
import Image from 'next/image';
import roomtitle from '../../public/images/roomtitle.png';
import RoomSlider from '../RoomSlider';

const RelatedRooms: React.FC = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="absolute top-0 left-0 w-full pointer-events-none overflow-hidden">
        <Image
          src={roomtitle}
          alt="Rooms Background"
          className="w-full max-w-[600px] sm:max-w-[450px] md:max-w-[700px] lg:max-w-[861px] opacity-[80%] object-contain"
          style={{
            filter:
              'filter: brightness(0) saturate(100%) invert(26%) sepia(27%) saturate(956%) hue-rotate(197deg) brightness(99%) contrast(87%);',
          }}
          priority
        />
      </div>
      <div className="mx-auto max-w-[1720px]">
        {/* Header Section */}
        <div className="relative xl:px-[100px] xl:pt-[100px]">
          {/* Background Text "ROOMS" */}

          {/* Main Title */}
          <div className="relative z-10">
            <h2 className="font-sansation text-[#454779] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-light leading-tight tracking-[0.02em] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              RELATED ROOMS
            </h2>

            {/* Description */}
            <p className="font-poppins text-[#2A2D71] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px]">
              Enjoy your stay in our thoughtfully designed suites and apartments, offering the ideal
              combination of comfort and functionality for both short visits and extended stays.
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
