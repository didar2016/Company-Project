import React from 'react';
import { Home, Wifi, Utensils, Coffee, Wine, Waves, Dumbbell, Car, TreePalm } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

interface HotelFeaturesProps {
  discount?: string;
  rating?: number;
  roomType?: string;
  headline?: string;
  description?: string;
  originalPrice?: number;
  discountedPrice?: number;
  checkInDate?: string;
  checkOutDate?: string;
  guests?: string;
  amenities?: Array<{ icon: React.ReactNode; label: string }>;
  images?: string[];
  room?: any;
}

const HotelFeatures: React.FC<HotelFeaturesProps> = ({ room }) => {
  const popularFacilities = [
    { icon: <Waves className="w-7 h-7" />, label: '2 swimming pools' },
    { icon: <Wine className="w-7 h-7" />, label: 'Bar' },
    { icon: <Wifi className="w-7 h-7" />, label: 'Free Wifi' },
    { icon: <Dumbbell className="w-7 h-7" />, label: 'Fitness centre' },
    { icon: <Home className="w-7 h-7" />, label: '45 sqm' },
    { icon: <TreePalm className="w-7 h-7" />, label: 'Beachfront' },
    { icon: <Coffee className="w-7 h-7" />, label: 'Coffee' },
    { icon: <Utensils className="w-7 h-7" />, label: 'Kitchen' },
    { icon: <Car className="w-7 h-7" />, label: 'Free parking' },
    { icon: <TreePalm className="w-7 h-7" />, label: 'Balcony' },
  ];

  return (
    <section
      className={`w-full bg-white relative py-6 sm:py-8 md:py-12 lg:pb-25 xl:pb-25 lg:pt-0 xl:pt-0 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25`}
    >
      <div className="max-w-[1720px] mx-auto">
        {/* Main Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-[#5B6B9C] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-normal tracking-wide mb-6 sm:mb-8">
            EXPERIENCE WORLD-CLASS SERVICE
          </h1>

          {/* FEATURES Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-3 sm:mb-4">
              FEATURES
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {room?.features?.map((feature: any) => (
                <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                  <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AMENITIES Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-3 sm:mb-4">
              AMENITIES
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {room?.amenities?.map((amenity: any, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed"
                >
                  <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                  <span className="text-sm sm:text-base">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="flex items-center gap-2 my-4">
            <div className="w-2 h-2 bg-[#00B3DD] rounded-full flex-shrink-0 mt-2"></div>
            <span className="text-[#1E293B] text-sm sm:text-[24px] italic">
              Ideal for solo travelers or couples seeking comfort and practicality.
            </span>
          </div> */}

          {/* SERVICES INCLUDED Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-3 sm:mb-4">
              SERVICES INCLUDED FOR ALL ROOMS AND APARTMENTS:
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {room?.servicesIncluded?.map((service: any, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed"
                >
                  <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                  <span className="text-sm sm:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MOST POPULAR FACILITIES Section */}
          <div>
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-4 sm:mb-6">
              MOST POPULAR FACILITIES
            </h2>

            {/* First Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {popularFacilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B9DC3] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#00B3DD] flex-shrink-0">
                    {React.cloneElement(
                      facility.icon as React.ReactElement<{ className?: string }>,
                      {
                        className: 'w-5 h-5 sm:w-7 sm:h-7',
                      }
                    )}
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-[#1E293B] font-normal">
                    {facility.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelFeatures;
