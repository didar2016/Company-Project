import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import hotelimage1 from '../public/images/hotel1.png';
import hotelimage2 from '../public/images/hotel2.png';
import hotelimage3 from '../public/images/hotel3.png';

import visithotelicon from '../public/images/visithotelicon.png';

interface Hotel {
  id: number;
  name: string;
  address: string;
  image: any;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'MENA HOTEL TABUK',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage1,
  },
  {
    id: 2,
    name: 'MENA ANDALUSIA RIYADH',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage2,
  },
  {
    id: 3,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage3,
  },
  {
    id: 4,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage1,
  },
  {
    id: 5,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage2,
  },
  {
    id: 2,
    name: 'MENA ANDALUSIA RIYADH',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: hotelimage3,
  },
];

const Hotels: React.FC = () => {
  return (
    <section id="location" className=" bg-white border-none">
      <div className=" bg-[#9BA9CA33] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[100px] py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-sansation font-light text-brand uppercase tracking-wide"
            style={{ fontWeight: 300 }}
          >
            The Hotels
          </h2>
          <p
            className="mt-3 sm:mt-4 text-[#454779] max-w-5xl mx-auto font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] px-4 sm:px-0"
            style={{ fontWeight: 300 }}
          >
            Located just minutes from the Mall of the Emirates, MENA ApartHotel Al Barsha places you
            at the center of Dubais attractions, shopping, and business hubs.
          </p>
        </div>

        <div className="max-w-[1720px] mx-auto relative">
          <div className="flex flex-wrap flex-row gap-x-[20px] gap-y-[80px] justify-center items-center">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex flex-col gap-4 sm:gap-[30px] group h-full relative max-w-[540px] overflow-hidden mx-auto"
              >
                {/* Image Container */}
                <div className="border-[#A4D5F0] border-l-[4px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[116px]">
                  <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-sansation font-heading text-[#00B3DD] mb-1 sm:mb-2 ml-3 sm:ml-[20px]">
                    {hotel.name}
                  </h4>
                  <div
                    className="flex items-start space-x-2 text-[12px] sm:text-sm mb-4 sm:mb-6 ml-3 sm:ml-[20px] text-[#454779] font-poppins"
                    style={{ fontWeight: 400 }}
                  >
                    <MapPin size={14} className="mt-1 flex-shrink-0 sm:w-4 sm:h-4" />
                    <p className="leading-relaxed">{hotel.address}</p>
                  </div>
                </div>
                <div className="relative overflow-hidden aspect-square w-full max-w-[540px]">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-fill object-center rounded-[15px] sm:rounded-[20px] md:rounded-[25px] w-full h-full"
                  />

                  <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4">
                    <button className="flex flex-row justify-between items-center w-[160px] sm:w-[200px] md:w-[244px] h-[48px] sm:h-[56px] md:h-[68px] gap-1.5 sm:gap-2.5 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                      <span className="pl-2 sm:pl-4 font-['Sansation'] text-[14px] sm:text-[16px] md:text-[20px] uppercase text-white">
                        Visit Hotel
                      </span>
                      <Image
                        src={visithotelicon}
                        alt="Visit Hotel Icon"
                        className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px] filter brightness-0 invert sepia-0 saturate-100 hue-rotate-180"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
