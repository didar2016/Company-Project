import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

import burjkhalifa from '../../public/images/burjkhalifa.png';
import mountain from '../../public/images/maountain.png';
import sea from '../../public/images/sea.png';
import hotelmapicon from '../../public/images/location_map_icon.png';
import mapicon2 from '../../public/images/location_map_icon2.png';
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
    name: 'Desert Safari',
    address: 'Experience the thrill of dune bashing and traditional Bedouin hospitality',
    image: mountain,
  },
  {
    id: 2,
    name: 'Burj Khalifa',
    address: 'Experience the thrill of dune bashing and traditional Bedouin hospitality',
    image: burjkhalifa,
  },
  {
    id: 3,
    name: 'Burj Al Arab',
    address: 'Experience the thrill of dune bashing and traditional Bedouin hospitality',
    image: sea,
  },
  {
    id: 4,
    name: 'Desert Safari',
    address: 'Experience the thrill of dune bashing and traditional Bedouin hospitality',
    image: mountain,
  },
  {
    id: 5,
    name: 'Burj Khalifa',
    address: 'Experience the thrill of dune bashing and traditional Bedouin hospitality',
    image: burjkhalifa,
  },
  {
    id: 2,
    name: 'Burj Al Arab',
    address: 'Experience the thrill of dune bashing and traditional Bedouin hospitality',
    image: sea,
  },
];

const LocationSlider: React.FC = () => {
  return (
    <section id="location-slider" className="border-none bg-white">
      <div className="bg-[#9BA9CA33] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[100px] py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="max-w-[1720px] mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: hotels.length,
              el: '.swiper-pagination-location',
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="pb-12 px-2 sm:px-4"
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="flex flex-col gap-4 sm:gap-[30px] group h-full relative max-w-[540px] overflow-hidden mx-auto">
                  <div className="border-[#A4D5F0] border-l-[4px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[116px]">
                    <h4
                      className="text-[20px] sm:text-[24px] md:text-[32px] font-sansation text-[#454779] mb-1 sm:mb-2 ml-3 sm:ml-5 leading-[46px] uppercase"
                      style={{ fontWeight: 300 }}
                    >
                      {hotel.name}
                    </h4>
                    <div
                      className="flex items-start space-x-2 text-[12px] sm:text-sm mb-4 sm:mb-6 ml-3 sm:ml-[20px] text-[#6D6E87] font-poppins"
                      style={{ fontWeight: 400 }}
                    >
                      <Image src={hotelmapicon} alt="Map Icon" className="w-6 h-6" />
                      <p className="text-[20px] text-[#6D6E87] leading-[30px]">{hotel.address}</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden aspect-square w-full max-w-[540px]">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      className="object-fill object-center rounded-[15px] sm:rounded-[50px] md:rounded-[50px] w-full h-full"
                    />

                    <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4">
                      <button className="flex flex-row justify-between items-center w-[160px] sm:w-[200px] md:w-[276px] h-[48px] sm:h-[56px] md:h-[68px] gap-1.5 sm:gap-2.5 bg-white opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                        <span className="pl-2 font-sansation sm:pl-4 font-bold text-[14px] sm:text-[16px] md:text-[20px] uppercase text-[#454779] leading-[30px] tracking-[1.2px]">
                          GET DIRECTION
                        </span>
                        <Image
                          src={visithotelicon}
                          alt="Visit Hotel Icon"
                          className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px]"
                          style={{
                            filter:
                              'brightness(0) saturate(100%) invert(43%) sepia(29%) saturate(794%) hue-rotate(188deg) brightness(94%) contrast(89%)',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-location swiper-pagination mt-6 sm:mt-8 flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default LocationSlider;
