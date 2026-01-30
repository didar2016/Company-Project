import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Wifi, Home, Utensils, TreePalm, Coffee } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import starIcon from '../../public/images/Star.png';
import CalendarIcon from '../../public/images/calender_icon.png';
import DropdownIcon from '../../public/images/dropdownicon.png';
import visithotelicon from '../../public/images/visithotelicon.png';
import room1 from '../../public/images/singleroom1.png';
import room2 from '../../public/images/singleroom2.png';
import room3 from '../../public/images/singleroom3.png';
import room4 from '../../public/images/singleroom4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Image from 'next/image';

interface RoomDetailsProps {
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
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
  discount = '20% OFF',
  rating = 5,
  roomType = 'STUDIO APARTMENT',
  headline = 'A SMART STAY WITH COMFORT & STYLE',
  description = "Perfect for solo travelers and couples, the Studio Suite blends modern design with practical comfort. Thoughtfully laid out, this suite offers everything you need for a relaxing city stay — whether you're visiting for business or leisure.",
  originalPrice = 999,
  discountedPrice = 799,
  checkInDate = '21 Dec 2025',
  checkOutDate = '26 Dec 2025',
  // guests = '2 Adults, 0 Children',
  // amenities = [
  //   { icon: <Home className="w-5 h-5" />, label: '45 sqm' },
  //   { icon: <Coffee className="w-5 h-5" />, label: 'Coffee' },
  //   { icon: <Wifi className="w-5 h-5" />, label: 'Free Wifi' },
  //   { icon: <UtensilsCrossed className="w-5 h-5" />, label: 'Kitchen' },
  //   { icon: <Home className="w-5 h-5" />, label: '45 sqm' },
  //   { icon: <Home className="w-5 h-5" />, label: 'Balcony' },
  // ],
  images = [room1, room2, room3, room4],
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const facilities = [
    { icon: <Home className="w-6 h-6" />, label: '45 sqm' },
    { icon: <Coffee className="w-6 h-6" />, label: 'Coffee' },
    { icon: <Wifi className="w-6 h-6" />, label: 'Free Wifi' },
    { icon: <Utensils className="w-6 h-6" />, label: 'Kitchen' },
    { icon: <TreePalm className="w-6 h-6" />, label: 'Balcony' },
  ];

  return (
    <section className="w-full bg-white relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="mx-auto max-w-[1720px]">
        {/* Split Screen Layout */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {/* Left Side - Image Gallery (60-65%) */}
          <div className="w-full lg:w-[62%] xl:w-[65%] relative">
            {/* Main Image Slider */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[573px]">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="aspect-[4/3] w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt={`${roomType} - View ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="inline-flex items-center justify-center mb-4 absolute top-0 right-0 z-20 ">
              <span
                className="text-[#101D3B] px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl text-xs sm:text-sm font-semibold tracking-wide p-[12px] sm:p-[16px] md:p-[20px] border-[1px] border-white"
                style={{ background: 'linear-gradient(90deg, #FFFFFF -37.94%, #00B3DD 100%)' }}
              >
                {discount}
              </span>
            </div>

            {/* Thumbnail Slider */}
            <div className="mt-3 sm:mt-4 sm:h-[120px] md:h-[160px] lg:h-[203px]">
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={3}
                watchSlidesProgress
                className="thumbnail-swiper"
                breakpoints={{
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                  },
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                  },
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="cursor-pointer">
                    <div className="aspect-[4/3] rounded-md sm:rounded-lg overflow-hidden border-2 border-transparent hover:border-[#00B3DD] transition-all duration-300">
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3 sm:gap-4 md:gap-6 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-[#9BA9CA33] mt-3 sm:mt-4 md:mt-[20px] p-2 sm:py-3 sm:px-5">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 md:gap-5 p-[4px] sm:p-[6px] md:p-[8px]"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full bg-[#00B3DD] flex items-center justify-center text-white flex-shrink-0">
                    {React.cloneElement(
                      facility.icon as React.ReactElement<{ className?: string }>,
                      {
                        className: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6',
                      }
                    )}
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-[#64748B] font-normal">
                    {facility.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content Panel (35-40%) */}
          <div className="relative w-full lg:w-[38%] xl:w-[35%] flex flex-col bg-[#9BA9CA33] p-4 sm:p-5 md:p-6 lg:p-[30px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
            {/* Rating & Price */}

            <div className="flex justify-items-start items-center gap-1 sm:gap-2 my-1 sm:my-2">
              {[...Array(rating)].map((_, i) => (
                <div
                  key={i}
                  className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px]"
                >
                  <Image src={starIcon} alt="*" />
                </div>
              ))}
              <span className="font-sansation text-[#454779] text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] ml-1">
                (5 Star)
              </span>
            </div>

            <div className="absolute text-center bg-white px-3 sm:px-4 md:px-[18px] py-1 sm:py-[4px] md:py-[6px] rounded-[10px] sm:rounded-[12px] md:rounded-[15.72px] top-[6px] sm:top-[8px] right-[6px] sm:right-[8px]">
              <div
                className="m-0 font-sansation text-[#FF383C] line-through text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] inline-block leading-[18px] sm:leading-[20px] md:leading-[23.58px] tracking-[0.39px]"
                style={{ fontWeight: 400, translate: '0px 8px' }}
              >
                {originalPrice}$
              </div>
              <div
                className="m-0 font-sansation text-[#00B3DD] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold"
                style={{ fontWeight: 700 }}
              >
                {discountedPrice}$
              </div>
              <div
                className="m-0 font-sansation text-[#2A2D71] text-[12px] sm:text-[14px] md:text-[16px]"
                style={{ fontWeight: 400, translate: '0px -8px' }}
              >
                / Night
              </div>
            </div>

            {/* Room Type */}
            <h2 className="text-[#454779] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light leading-[28px] sm:leading-[34px] md:leading-[40px] lg:leading-[46px] uppercase font-sansation pt-1 pb-1">
              {roomType}
            </h2>

            {/* Main Headline */}
            <h1
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#454779] pb-1"
              style={{ fontWeight: 700 }}
            >
              {headline}
            </h1>

            {/* Description */}
            <p
              className="text-[#2A2D71] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] tracking-[0.5px] mb-4 sm:mb-5 md:mb-6"
              style={{ fontWeight: 400 }}
            >
              {description}
            </p>

            {/* Booking Details */}
            <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-3 sm:p-4 md:p-5 flex flex-col gap-4 sm:gap-5 md:gap-[36px]">
              <div className="flex flex-col">
                <label className="text-[#454779] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins leading-[22px] sm:leading-[26px] md:leading-[30px] mb-[6px] sm:mb-[8px] md:mb-[10px]">
                  Check In-Date:
                </label>
                <div
                  className="flex justify-between items-center gap-2 rounded-[120px] sm:rounded-[140px] md:rounded-[160px] py-[10px] sm:py-[12px] md:py-[15px] pl-[16px] sm:pl-[22px] md:pl-[30px] pr-[10px] sm:pr-[12px] md:pr-[15px]"
                  style={{
                    background:
                      'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-sm text-gray-700">{checkInDate}</span>
                  <Image
                    src={CalendarIcon}
                    alt="Calendar Icon"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] text-gray-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[#454779] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins leading-[22px] sm:leading-[26px] md:leading-[30px] mb-[6px] sm:mb-[8px] md:mb-[10px]">
                  Check Out-Date:
                </label>
                <div
                  className="flex justify-between items-center gap-2 rounded-[120px] sm:rounded-[140px] md:rounded-[160px] py-[10px] sm:py-[12px] md:py-[15px] pl-[16px] sm:pl-[22px] md:pl-[30px] pr-[10px] sm:pr-[12px] md:pr-[15px]"
                  style={{
                    background:
                      'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-sm text-gray-700">{checkOutDate}</span>
                  <Image
                    src={CalendarIcon}
                    alt="Calendar Icon"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] text-gray-400"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex flex-col">
                <label className="text-[#454779] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins leading-[22px] sm:leading-[26px] md:leading-[30px] mb-[6px] sm:mb-[8px] md:mb-[10px]">
                  Guest:
                </label>
                <div
                  className="flex justify-between items-center gap-2 rounded-[120px] sm:rounded-[140px] md:rounded-[160px] py-[10px] sm:py-[12px] md:py-[15px] pl-[16px] sm:pl-[22px] md:pl-[30px] pr-[10px] sm:pr-[12px] md:pr-[15px]"
                  style={{
                    background:
                      'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-sm text-gray-700">{checkInDate}</span>
                  <Image
                    src={DropdownIcon}
                    alt="Dropdown Icon"
                    className="w-[12px] h-[7px] sm:w-[14px] sm:h-[8px] md:w-[16.5px] md:h-[9px] text-gray-400"
                  />
                </div>
              </div>

              <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                <span
                  className="p-2 sm:p-2.5 md:p-3 lg:p-3.5 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase text-white"
                  style={{ fontWeight: 700 }}
                >
                  {' '}
                  Check Availability
                </span>
                <Image
                  src={visithotelicon}
                  alt="Visit Hotel Icon"
                  className="object-fill object-center h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] lg:h-[40px] lg:w-[48px] filter brightness-0 invert sepia-0 saturate-100 hue-rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
