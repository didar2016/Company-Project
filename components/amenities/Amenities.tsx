import React from 'react';
import Image from 'next/image';
import visithotelicon from '../../public/images/visithotelicon.png';

interface AmenityItem {
  title: string;
  description: string;
  icon: any; // Using any for imported image type
}

const amenitiesData: AmenityItem[] = [
  {
    title: 'ROOFTOP POOL',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: visithotelicon,
  },
  {
    title: 'FITNESS CENTER',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: visithotelicon,
  },
  {
    title: 'SAUNA',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: visithotelicon,
  },
  {
    title: '24/7 SUPPORT',
    description: 'Concierge & 24/7 Service',
    icon: visithotelicon,
  },
  {
    title: 'FREE PARKING',
    description: 'Airport Shuttle & Free Parking',
    icon: visithotelicon,
  },
  {
    title: 'WIFI',
    description: 'Free Wi-Fi Everywhere',
    icon: visithotelicon,
  },
  {
    title: 'ROOFTOP POOL',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: visithotelicon,
  },
  {
    title: 'FITNESS CENTER',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: visithotelicon,
  },
  {
    title: 'SAUNA',
    description: 'Rejuvenate after a busy day in our tranquil sauna.',
    icon: visithotelicon,
  },
  {
    title: '24/7 SUPPORT',
    description: 'Concierge & 24/7 Service',
    icon: visithotelicon,
  },
  {
    title: 'FREE PARKING',
    description: 'Airport Shuttle & Free Parking',
    icon: visithotelicon,
  },
  {
    title: 'WIFI',
    description: 'Free Wi-Fi Everywhere',
    icon: visithotelicon,
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
              'invert(87%) sepia(18%) saturate(996%) hue-rotate(172deg) brightness(97%) contrast(93%)',
          }}
          // Color #A4D5F0 approx filter
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-center sm:text-left space-y-2">
        <h4
          className="font-sansation font-light text-[24px] tracking-wide text-[#454779] uppercase leading-none"
          style={{ fontWeight: 300 }} // H4 font weight
        >
          {title}
        </h4>
        <p
          className="font-sansation text-[16px] text-[#2A2D71] leading-relaxed"
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
    <div className="w-full bg-white py-[100px] px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] justify-items-center">
          {amenitiesData.map((item, index) => (
            <AmenityCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
