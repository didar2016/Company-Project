import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import hotelimage1 from '../../public/images/hotel1.png';
import hotelimage2 from '../../public/images/hotel2.png';
import hotelimage3 from '../../public/images/hotel3.png';

import visithotelicon from '../../public/images/visithotelicon.png';

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

const Locations: React.FC = () => {
  return (
    <section id="location" className=" bg-white border-none">
      <div className=" bg-[#9BA9CA33] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[100px] py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-[1720px] mx-auto relative">
          <div className="flex flex-wrap flex-row gap-x-[20px] gap-y-[80px] justify-center">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="flex flex-col gap-4 sm:gap-[30px] group h-full relative max-w-[540px] overflow-hidden mx-auto"
              >
                {/* Image Container */}
                <div className="border-[#A4D5F0] border-l-[4px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[116px]">
                  <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-sansation font-heading text-[#454779] mb-1 sm:mb-2 ml-3 sm:ml-[20px]">
                    {hotel.name}
                  </h4>
                  <div
                    className="flex items-start space-x-2 text-[12px] sm:text-sm mb-4 sm:mb-6 ml-3 sm:ml-[20px] text-[#6D6E87] font-poppins"
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
                    className="object-fill object-center rounded-[15px] sm:rounded-[50px] md:rounded-[50px] w-full h-full"
                  />

                  <div
                    className="absolute left-3 sm:left-6 bottom-2 sm:bottom-7 py-[5px] px-[16px] rounded-[30px] flex flex-row gap-5 border border-transparent backdrop-blur-[20px]"
                    style={{
                      background:
                        'linear-gradient(#FFFFFF4D, #FFFFFF4D) padding-box, radial-gradient(84.35% 86.25% at 5.73% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.17) 100%) border-box',
                    }}
                  >
                    <MapPin size={14} className="mt-1 sm:w-4 sm:h-4" />
                    <div className="text-white">45 Min Drive</div>
                  </div>

                  <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4">
                    <button className="flex flex-row justify-between items-center w-[160px] sm:w-[200px] md:w-[264px] h-[48px] sm:h-[56px] md:h-[68px] gap-1.5 sm:gap-2.5 bg-white opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                      <span className="pl-2 font-normal sm:pl-4 font-sansation font-bold text-[14px] sm:text-[16px] md:text-[20px] uppercase text-[#454779]">
                        GET RIRECTION
                      </span>
                      <Image
                        src={visithotelicon}
                        alt="Visit Hotel Icon"
                        className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px] filter: brightness(0) saturate(100%) invert(43%) sepia(29%) saturate(794%) hue-rotate(188deg) brightness(94%) contrast(89%)"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Mockup match) */}
        {/* <div className="flex justify-center mt-12 space-x-2">
          <span className="h-1.5 w-8 bg-accent rounded-full"></span>
          <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
          <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
        </div> */}
      </div>
    </section>
  );
};

export default Locations;
