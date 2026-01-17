import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import hotelimage from '../public/images/hotel.png';
import visithotelicon from '../public/images/visithotelicon.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

interface Hotel {
  id: number;
  name: string;
  address: string;
  image: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'MENA HOTEL TABUK',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Hotel+Tabuk',
  },
  {
    id: 2,
    name: 'MENA ANDALUSIA RIYADH',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Andalusia',
  },
  {
    id: 3,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Jubail',
  },
  {
    id: 4,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Jubail',
  },
  {
    id: 5,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Jubail',
  },
  {
    id: 2,
    name: 'MENA ANDALUSIA RIYADH',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Andalusia',
  },
  {
    id: 3,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Jubail',
  },
  {
    id: 4,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Jubail',
  },
  {
    id: 5,
    name: 'MENA JUBAIL',
    address: 'Street 13 - Al Barsha - Al Barsha 1 - Dubai - United Arab Emirates',
    image: 'https://placehold.co/600x500/e2e8f0/1e293b?text=Mena+Jubail',
  },
];

const HotelLocations: React.FC = () => {
  return (
    <section id="location" className=" bg-white border-none">
      <div className=" bg-[#9BA9CA33]  p-[100px]">
        <div className="text-center mb-16">
          <h2
            className="text-[72px] font-sansation font-light text-brand uppercase tracking-wide"
            style={{ fontWeight: 300 }}
          >
            The Hotels
          </h2>
          <p
            className="mt-4 text-[#454779] max-w-5xl mx-auto font-light text-[24px]"
            style={{ fontWeight: 300 }}
          >
            Located just minutes from the Mall of the Emirates, MENA ApartHotel Al Barsha places you
            at the center of Dubais attractions, shopping, and business hubs.
          </p>
        </div>

        <div className="max-w-[1720px] mx-auto relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation={{
            //   prevEl: prevRef.current,
            //   nextEl: nextRef.current,
            // }}
            // onSwiper={setSwiperInstance}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: hotels.length,
              el: '.swiper-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12 px-4"
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index} className="h-full">
                <div
                  key={hotel.id}
                  className="flex flex-col gap-[30px] group h-full relative max-w-[540px] overflow-hidden transition-all w-[540px] h-[540px]"
                >
                  {/* Image Container */}
                  <div className="border-[#A4D5F0] border-l-[4px] h-[116px]">
                    <h4 className="text-[32px] font-sansation font-heading text-[#00B3DD] mb-2 ml-[20px]">
                      {hotel.name}
                    </h4>
                    <div
                      className="flex items-start space-x-2 text-sm mb-6 ml-[20px] text-[#454779] font-poppins"
                      style={{ fontWeight: 400 }}
                    >
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">{hotel.address}</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-[540px] w-[540px]">
                    <Image
                      src={hotelimage}
                      alt={hotel.name}
                      className="object-fill  object-center rounded-[25px]"
                    />

                    <div className="absolute right-4 bottom-4">
                      <button className="flex flex-row justify-between items-center w-[244px] h-[68px] gap-2.5 bg-[#00B3DD] opacity-100 rounded-4xl px-3">
                        <span className="pl-4 font-['Sansation'] text-[20px] uppercase [color:var(--Buttons-Color-Text-Color-White,#FFFFFF)] [font-weight:var(--Text-Button-font-weight)] [font-size:var(--Text-Button-font-size)] leading-[var(--Text-Button-line-height)] tracking-[var(--Text-Button-letter-spacing)]">
                          Visit Hotel
                        </span>
                        <Image
                          src={visithotelicon}
                          alt="Visit Hotel Icon"
                          className="object-fill  object-center h-[44px] w-[54px] filter brightness-0 invert sepia-0 saturate-100 hue-rotate-180"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-8"></div>
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

export default HotelLocations;
