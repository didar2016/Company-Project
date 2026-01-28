import React from 'react';
import { Home, Wifi, Utensils, Coffee, Wine, Waves, Dumbbell, Car, TreePalm } from 'lucide-react';

interface HotelFeaturesProps {
  className?: string;
}

const HotelFeatures: React.FC<HotelFeaturesProps> = ({ className = '' }) => {
  const popularFacilities = [
    { icon: <Waves className="w-7 h-7" />, label: '2 swimming pools' },
    { icon: <Wine className="w-7 h-7" />, label: 'Bar' },
    { icon: <Wifi className="w-7 h-7" />, label: 'Free Wifi' },
    { icon: <Dumbbell className="w-7 h-7" />, label: 'Fitness centre' },
    { icon: <Home className="w-7 h-7" />, label: '45 sqm' },
    { icon: <TreePalm className="w-7 h-7" />, label: 'Beachfront' },
  ];

  const popularFacilitiesRow2 = [
    { icon: <Home className="w-7 h-7" />, label: '45 sqm' },
    { icon: <Coffee className="w-7 h-7" />, label: 'Coffee' },
    { icon: <Wifi className="w-7 h-7" />, label: 'Free Wifi' },
    { icon: <Utensils className="w-7 h-7" />, label: 'Kitchen' },
    { icon: <Car className="w-7 h-7" />, label: 'Free parking' },
    { icon: <TreePalm className="w-7 h-7" />, label: 'Balcony' },
  ];

  return (
    <section
      className={`w-full bg-white px-4 sm:px-6 md:px-12 lg:pl-[100px] mx-auto flex justify-center  z-10 ${className}`}
    >
      <div className="max-w-[1720px] px-4 sm:px-0 flex justify-start items-start">
        {/* Main Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12 align-start">
          <h1 className="text-[#5B6B9C] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-normal tracking-wide mb-6 sm:mb-8">
            EXPERIENCE WORLD-CLASS SERVICE
          </h1>

          {/* FEATURES Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-3 sm:mb-4">
              FEATURES
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">
                  A studio-style suite featuring a large double bed, a seating area, and a fully
                  equipped open kitchen for added convenience.
                </span>
              </li>
            </ul>
          </div>

          {/* Location & Room Description Paragraphs */}
          {/* <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10 text-[#1E293B] text-sm sm:text-base leading-relaxed">
            <p>
              Located on Dubais Palm Jumeirah Island and enjoys a private sandy beach, the 5-star
              Atlantis offers stunning views of the Arabian Gulf. It provides complimentary daily
              access to the worlds largest waterpark at Aquaventure World and the Lost World
              Aquarium.
            </p>
            <p>
              All the Arabian and oceanic dcor inspired rooms feature a balcony with scenic views.
              They include a flat-screen satellite TV, a seating area, complimentary tea/coffee
              making facilities and a mini bar. Some rooms include a stunning large terrace with
              panoramic views of the palm or an over sized spa bath located in the center of the
              bathroom.
            </p>
          </div> */}

          {/* AMENITIES Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-3 sm:mb-4">
              AMENITIES
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">
                  Fully equipped kitchen with fridge, microwave, washing machine, and toaster
                </span>
              </li>

              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">
                  Air conditioning, free Wi-Fi, HDTV with interactive entertainment
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">
                  Private bathroom with premium toiletries
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">Iron, ironing board</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 my-4">
            <div className="w-2 h-2 bg-[#00B3DD] rounded-full flex-shrink-0 mt-2"></div>
            <span className="text-[#1E293B] text-sm sm:text-[24px] italic">
              Ideal for solo travelers or couples seeking comfort and practicality.
            </span>
          </div>

          {/* SERVICES INCLUDED Section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-[#5B6B9C] text-lg sm:text-xl md:text-2xl font-normal tracking-wide mb-3 sm:mb-4">
              SERVICES INCLUDED FOR ALL ROOMS AND APARTMENTS:
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">Daily housekeeping between 9am to 10pm</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">Concierge service</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">
                  Free high-speed Wi-Fi and interactive TV
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">Laundry and ironing facilities</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-[#1E293B] leading-relaxed">
                <span className="text-[#00B3DD] mt-1 sm:mt-1.5 flex-shrink-0">●</span>
                <span className="text-sm sm:text-base">
                  Smoking and non-smoking options available
                </span>
              </li>
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

            {/* Second Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {popularFacilitiesRow2.map((facility, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default HotelFeatures;
