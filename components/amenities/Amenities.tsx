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
      className="relative flex flex-col sm:flex-row items-center 
                 gap-4 sm:gap-6 lg:gap-[30px] 
                 p-4 sm:p-6 lg:p-[30px] 
                 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[530px] 
                 min-h-[120px] sm:min-h-[150px] lg:min-h-[174px] 
                 rounded-[40px] sm:rounded-[80px] lg:rounded-[160px] 
                 bg-white transition-all duration-300 hover:shadow-lg"
      style={{
        background:
          'linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
        border: '1px solid transparent',
      }}
    >
      {/* Icon Circle */}
      <div
        className="flex-shrink-0 
                      w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] 
                      rounded-full border-2 sm:border-[2.5px] lg:border-[2.75px] border-[#A4D5F0] 
                      flex items-center justify-center 
                      p-2 sm:p-3 lg:p-4"
      >
        <Image
          src={icon}
          alt={title}
          className="w-full h-full object-contain"
          style={{
            filter:
              'brightness(0) saturate(100%) invert(62%) sepia(61%) saturate(4758%) hue-rotate(155deg) brightness(97%) contrast(104%)',
          }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-center sm:text-left space-y-1 sm:space-y-2">
        <h4
          className="font-sansation font-light 
                     text-lg sm:text-2xl lg:text-[32px] 
                     tracking-wide text-[#454779] uppercase 
                     leading-tight sm:leading-normal lg:leading-[46px]"
          style={{ fontWeight: 300 }}
        >
          {title}
        </h4>
        <p
          className="font-sansation 
                     text-sm sm:text-base lg:text-[20px] 
                     text-[#2A2D71] 
                     leading-relaxed sm:leading-normal lg:leading-[30px] 
                     tracking-[0.5px]"
          style={{ fontWeight: 400 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Amenities: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-[100px] flex justify-center">
      <div className="w-full">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
                        gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[60px] 
                        justify-items-center max-w-[1720px] mx-auto"
        >
          {amenitiesData.map((item, index) => (
            <AmenityCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
