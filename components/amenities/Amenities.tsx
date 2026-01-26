import React from 'react';
import Image from 'next/image';
import rooftopicon from '../../public/images/rooftop_pool_icon.png';
import fitnesscenricon from '../../public/images/fitness_center_icon.png';
import sauna_icon from '../../public/images/sauna_icon.png';
import support_icon from '../../public/images/247_support_icon.png';
import wifi_con from '../../public/images/wifi_icon.png';

interface AmenityItem {
  title: string;
  description: string;
  icon: any; // Using any for imported image type
}

const amenitiesData: AmenityItem[] = [
  {
    title: 'ROOFTOP POOL',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: rooftopicon,
  },
  {
    title: 'FITNESS CENTER',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: fitnesscenricon,
  },

  {
    title: '24/7 SUPPORT',
    description: 'Concierge & 24/7 Service',
    icon: support_icon,
  },
  {
    title: 'FREE PARKING',
    description: 'Airport Shuttle & Free Parking',
    icon: support_icon,
  },
  {
    title: 'SAUNA',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: wifi_con,
  },
];

const AmenityCard: React.FC<AmenityItem> = ({ title, description, icon }) => {
  return (
    <div
      className="relative flex flex-col sm:flex-row items-center gap-[30px] p-[30px] w-full max-w-[530px] min-h-[174px] rounded-[160px] bg-white transition-all duration-300 hover:shadow-lg"
      style={{
        background:
          'linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
        border: '1px solid transparent',
      }}
    >
      {/* Icon Circle */}
      <div className="flex-shrink-0 w-[100px] h-[100px] rounded-full border-[2.75px] border-[#A4D5F0] flex items-center justify-center p-4">
        <Image
          src={icon}
          alt={title}
          className="w-full h-full object-contain filter brightness-0 invert saturate-100 sepia-[.3] hue-rotate-[180deg]"
          // Applying a filter to match the blue theme if the icon is not already blue/correct color
          // The previous code had a complex filter for blue: "brightness-0 invert sepia-0 saturate-100 hue-rotate-180" (this makes it inverted white)
          // For blue-ish: brightness(0) saturate(100%) invert(81%) sepia(31%) saturate(545%) hue-rotate(180deg) brightness(96%) contrast(92%) #A4D5F0 approximation
          style={{
            filter:
              'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(4758%) hue-rotate(155deg) brightness(97%) contrast(104%)',
          }}
          // Color #A4D5F0 approx filter
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-center sm:text-left space-y-2">
        <h4
          className="font-sansation font-light text-[32px] tracking-wide text-[#454779] uppercase leading-[46px]"
          style={{ fontWeight: 300 }} // H4 font weight
        >
          {title}
        </h4>
        <p
          className="font-sansation text-[20px] text-[#2A2D71] leading-[30px] tracking-[0.5px]"
          style={{ fontWeight: 400 }} // Strong 1 font weight
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Amenities: React.FC = () => {
  return (
    <div className="w-full bg-white p-[100px] flex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] justify-items-center max-w-[1720px] mx-auto">
          {amenitiesData.map((item, index) => (
            <AmenityCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
