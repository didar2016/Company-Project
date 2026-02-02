import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Coffee, Wifi, Gift, Printer, Bed } from 'lucide-react';
import visithotelicon from '../public/images/visithotelicon.png';
import { useRouter } from 'next/router';

interface RoomCardProps {
  title?: string;
  subtitle?: string;
  price?: number;
  currency?: string;
  area?: number;
  unit?: 'sqm' | 'sqft';
  imageSrc?: string;
  onViewDetails?: () => void;
  amenities?: string[];
  room: any;
  index?: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title = 'STUDIO',
  subtitle = 'APARTMENT',
  price = 899,
  currency = '$',
  amenities = ['maximize', 'coffee', 'wifi', 'gift', 'printer', 'bed'],
  room = {},
  index = 1,
}) => {
  const router = useRouter();

  // const [isHovered, setIsHovered] = useState(false);

  const handleViewDetailsClick = () => {
    router.push('./roomdetails');
  };

  return (
    <div
      className="relative w-full max-w-[540px] bg-white overflow-hidden mx-auto cursor-pointer"
      onClick={handleViewDetailsClick}
    >
      {/* Header Section with Title and Pricing */}

      <div className="flex flex-row justify-between pt-4 sm:pt-6 pb-3 sm:pb-4">
        {/* Title */}
        <div className="">
          <h2
            className="font-sansation font-light text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[28px] 2xl:text-[32px] leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] xl:leading-[46px] uppercase"
            style={{ fontWeight: 400, color: index % 2 == 1 ? '#00B3DD' : '#454779' }}
          >
            {room.title}
            <br />
            {room.subTitle}
          </h2>
        </div>

        {/* Pricing Section */}
        <div className="flex items-end justify-between content-start border-r-2 sm:border-r-4 border-[#9BA9CA]">
          <div className="flex items-end gap-1 sm:gap-2 pr-2 sm:pr-5">
            <div className="flex flex-col">
              <span
                className="font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[17px] 2xl:text-[18px] text-[#2A2D71] text-right"
                style={{ fontWeight: 300 }}
              >
                From
              </span>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-sansation text-[20px] sm:text-[26px] md:text-[32px] lg:text-[42px] xl:text-[38px] 2xl:text-[42px] font-black text-gray-900 leading-none"
                  style={{ fontWeight: 700, color: index % 2 == 1 ? '#00B3DD' : '#454779' }}
                >
                  {price} {currency}
                </span>
              </div>
              <span
                className="font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[17px] 2xl:text-[18px] text-[#2A2D71] mt-0.5 text-right"
                style={{ fontWeight: 300 }}
              >
                / Night
              </span>
            </div>
          </div>

          {/* Discount Badge */}
        </div>
      </div>

      {/* <div style={{ paddingTop: isHovered ? '0' : '138px' }}></div> */}
      {/* Room Image */}
      <div
        className="relative overflow-hidden aspect-square w-full max-w-[540px]"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        {room.discountPercentage && (
          // <div
          //   className="font-sansation text-[#00B3DD] text-xs font-bold px-3 py-1 absolute top-4 left-4 z-40 border border-solid rounded-full"
          //   style={cardStyle}
          // >
          //   {room.discountPercentage}
          // </div>
          <div className=" absolute top-4 left-4 z-40 rounded-full backdrop-blur-[20px] bg-white/30">
            <div
              className="absolute inset-0 rounded-[30px] pointer-events-none"
              style={{
                padding: '1px',
                background: `linear-gradient(#FFFFFF4D, #FFFFFF4D) padding-box,
          radial-gradient(84.35% 86.25% at 5.73% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.17) 100%) border-box`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className=" px-5 xl:px-4 2xl:px-5 py-[5px] text-[#00B3DD] font-bold font-sansation font-700 text-[18px] sm:text-[20px] xl:text-[18px] 2xl:text-[20px] leading-[30px] tracking-[1.25px]">
              {room.discountPercentage}
            </div>
          </div>
        )}

        <Image
          src={room.image}
          alt={`${title} ${subtitle}`}
          fill
          className="object-fill object-center rounded-[30px]"
          sizes="(max-width: 768px) 100vw, 540px"
        />

        {/* Area Info Overlay */}
        {/* <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-cyan-400 text-white px-3 py-2 rounded-full">
          <Maximize2 className="w-4 h-4" />
          <span className="text-lg font-medium">{area} {unit}</span>
        </div> */}

        {/* Amenity Icons Overlay */}
        <div
          className={`absolute bottom-3 sm:bottom-5 right-[20px] left-[20px] justify-between flex items-center gap-1 sm:gap-2  rounded-full sm:rounded-[30px] px-2.5 sm:px-5 py-2.5 sm:py-2.5 backdrop-blur-[9px] bg-white/30 transition-opacity duration-300`}
        >
          <div className="flex flex-row gap-1 sm:gap-2 justify-start">
            <div className="bg-[#00B3DD] text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:h-8 xl:w-8 rounded-full flex items-center justify-center">
              <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </div>
            <div
              className="text-[#454779] font-sansation font-normal not-italic text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[16px]"
              style={{ fontWeight: 400, alignSelf: 'center' }}
            >
              45 sqm
            </div>
          </div>

          <div className="flex flex-row gap-1 sm:gap-2 xl:gap-1.5 2xl:gap-2">
            {amenities.slice(1).map((amenity, index) => {
              const IconComponent =
                amenity === 'coffee'
                  ? Coffee
                  : amenity === 'wifi'
                    ? Wifi
                    : amenity === 'gift'
                      ? Gift
                      : amenity === 'printer'
                        ? Printer
                        : amenity === 'bed'
                          ? Bed
                          : null;

              return IconComponent ? (
                <div className="flex flex-wrap flex-row gap-1 justify-center items-center">
                  <div
                    key={index}
                    className="bg-[#00B3DD] text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 rounded-full flex items-center justify-center"
                  >
                    <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  </div>
                  {/* <div
                    className="text-[#454779] font-sansation font-normal not-italic text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[16px]"
                    style={{ fontWeight: 400, alignSelf: 'center' }}
                  >
                    {amenity}
                  </div> */}
                </div>
              ) : null;
            })}
          </div>
        </div>

        {/* View Details Button Overlay */}
      </div>

      {/* View Details Button */}
    </div>
  );
};

export default RoomCard;
