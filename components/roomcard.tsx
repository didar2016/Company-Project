import React from 'react';
import Image from 'next/image';
import { Maximize2, Coffee, Wifi, Gift, Printer, Bed } from 'lucide-react';
import roomcard from '../public/images/roomcardimage.png';
import visithotelicon from '../public/images/visithotelicon.png';

interface RoomCardProps {
  title?: string;
  subtitle?: string;
  price?: number;
  currency?: string;
  discountPercentage?: number;
  area?: number;
  unit?: 'sqm' | 'sqft';
  imageSrc?: string;
  onViewDetails?: () => void;
  showButton?: boolean;
  amenities?: string[];
}

const RoomCard: React.FC<RoomCardProps> = ({
  title = 'STUDIO',
  subtitle = 'APARTMENT',
  price = 899,
  currency = '$',
  discountPercentage = 20,
  showButton = true,
  amenities = ['maximize', 'coffee', 'wifi', 'gift', 'printer', 'bed'],
}) => {
  const amenityIcons: { [key: string]: React.ReactNode } = {
    maximize: <Maximize2 className="w-5 h-5" />,
    coffee: <Coffee className="w-5 h-5" />,
    wifi: <Wifi className="w-5 h-5" />,
    gift: <Gift className="w-5 h-5" />,
    printer: <Printer className="w-5 h-5" />,
    bed: <Bed className="w-5 h-5" />,
  };

  const cardStyle = {
    border: '1px solid transparent',
    borderRadius: '50px',
    background: `linear-gradient(#FFFFFF4D, #FFFFFF4D) padding-box,
          radial-gradient(84.35% 86.25% at 5.73% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.17) 100%) border-box`,
    backgroundClip: 'padding-box, border-box',
    WebkitBackgroundClip: 'padding-box, border-box',
    backgroundOrigin: 'border-box',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  };

  return (
    <div className="relative w-full max-w-[540px] bg-white overflow-hidden mx-auto">
      {/* Header Section with Title and Pricing */}
      <div className="flex flex-row justify-between pt-4 sm:pt-6 pb-3 sm:pb-4">
        {/* Title */}
        <div className="">
          <h2
            className="text-[#454779] font-sansation font-light text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] xl:leading-[46px] uppercase"
            style={{ fontWeight: 400 }}
          >
            {title}
            <br />
            {subtitle}
          </h2>
        </div>

        {/* Pricing Section */}
        <div className="flex items-end justify-between content-start border-r-2 sm:border-r-4 border-[#9BA9CA]">
          <div className="flex items-end gap-1 sm:gap-2 pr-2 sm:pr-5">
            <div className="flex flex-col">
              <span
                className="font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#2A2D71] text-right"
                style={{ fontWeight: 300 }}
              >
                From
              </span>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-sansation text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[42px] font-black text-gray-900 leading-none"
                  style={{ fontWeight: 700 }}
                >
                  {price} {currency}
                </span>
              </div>
              <span
                className="font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#2A2D71] mt-0.5 text-right"
                style={{ fontWeight: 300 }}
              >
                / Night
              </span>
            </div>
          </div>

          {/* Discount Badge */}
        </div>
      </div>

      {/* Room Image */}
      <div className="relative overflow-hidden aspect-square w-full max-w-[540px]">
        {discountPercentage && (
          <div
            className="font-sansation text-[#00B3DD] text-xs font-bold px-3 py-1 absolute top-4 left-4 z-40 border border-solid rounded-full"
            style={cardStyle}
          >
            {discountPercentage}% OFF
          </div>
        )}

        <Image
          src={roomcard}
          alt={`${title} ${subtitle}`}
          fill
          className="object-fill object-center rounded-[25px]"
          sizes="(max-width: 768px) 100vw, 540px"
        />

        {/* Area Info Overlay */}
        {/* <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-cyan-400 text-white px-3 py-2 rounded-full">
          <Maximize2 className="w-4 h-4" />
          <span className="text-lg font-medium">{area} {unit}</span>
        </div> */}

        {/* Amenity Icons Overlay */}
        <div className="absolute bottom-2 sm:bottom-4 right-[2%] left-[2%] justify-between flex items-center gap-1 sm:gap-2 h-12 sm:h-15 rounded-[20px] sm:rounded-[30px] px-2 sm:px-5 py-1.5 sm:py-2.5 backdrop-blur-[9px] bg-white/30 opacity-100">
          <div className="flex flex-row gap-1 sm:gap-2 justify-start">
            <div className="bg-[#00B3DD] text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center">
              <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </div>
            <div
              className="text-[#454779] font-sansation font-normal not-italic text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[130%]"
              style={{ fontWeight: 400, alignSelf: 'center' }}
            >
              45 sqm
            </div>
          </div>

          <div className="flex flex-row gap-1 sm:gap-2">
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
                <div
                  key={index}
                  className="bg-[#00B3DD] text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center"
                >
                  <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>

      {/* View Details Button */}
      <div className="flex justify-end mt-4 sm:mt-6 md:mt-8">
        {showButton && (
          <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
            <span
              className="p-2 sm:p-2.5 md:p-3 lg:p-3.5 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase text-white"
              style={{ fontWeight: 700 }}
            >
              {' '}
              VIEW DETAILS
            </span>
            <Image
              src={visithotelicon}
              alt="Visit Hotel Icon"
              className="object-fill object-center h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] lg:h-[40px] lg:w-[48px] filter brightness-0 invert sepia-0 saturate-100 hue-rotate-180"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
