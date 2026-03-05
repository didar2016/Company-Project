import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Waves, Wine, Wifi, Dumbbell, Home, Coffee, Utensils, Car, Eye } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import starIcon from '../../public/images/Star.png';
import CalendarIcon from '../../public/images/calender_icon.png';
import DropdownIcon from '../../public/images/dropdownicon.png';
import visithotelicon from '../../public/images/visithotelicon.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { getImageUrl } from '@/hooks/imageMake';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Lightbox
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

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
  room?: any;
  setSingleroomName?: React.Dispatch<React.SetStateAction<string>>;
  setSingleroomDescription?: React.Dispatch<React.SetStateAction<string>>;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
  rating = 5,
  roomType = 'STUDIO APARTMENT',
  headline = 'A SMART STAY WITH COMFORT & STYLE',
  description = "Perfect for solo travelers and couples, the Studio Suite blends modern design with practical comfort. Thoughtfully laid out, this suite offers everything you need for a relaxing city stay — whether you're visiting for business or leisure.",
  originalPrice = 999,
  discountedPrice = 799,
  checkInDate = '21 Dec 2025',
  checkOutDate = '26 Dec 2025',
  room,
  setSingleroomName,
  setSingleroomDescription,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Booking details state
  const [checkIn, setCheckIn] = useState<Date>(new Date(checkInDate));
  const [checkOut, setCheckOut] = useState<Date>(new Date(checkOutDate));
  const [guestCount, setGuestCount] = useState<string>('2 Adults/1 Children');
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  // Handlers
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const guestOptions = [
    '1 Adult',
    '2 Adults',
    '2 Adults/1 Children',
    '2 Adults/2 Children',
    '3 Adults',
    '3 Adults/1 Children',
    '4 Adults',
    '4 Adults/2 Children',
  ];

  // Handle click outside to close dropdowns
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowGuestsDropdown(false);
        setShowCheckInCalendar(false);
        setShowCheckOutCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayRoomType = room?.name || roomType;
  const displayDescription = room?.description || description;
  const displayOriginalPrice = room?.basePrice || originalPrice;
  const displayDiscountedPrice = room?.discountPrice || discountedPrice;

  // Update parent state if setters are provided
  React.useEffect(() => {
    if (setSingleroomName) {
      setSingleroomName(displayRoomType);
    }
    if (setSingleroomDescription) {
      setSingleroomDescription(displayDescription);
    }
  }, [displayRoomType, displayDescription, setSingleroomName, setSingleroomDescription]);

  const ALL_FACILITIES = [
    { id: 'swimming-pools', label: 'Swimming Pools', icon: Waves },
    { id: 'bar', label: 'Bar', icon: Wine },
    { id: 'free-wifi', label: 'Free Wifi', icon: Wifi },
    { id: 'fitness-centre', label: 'Fitness Centre', icon: Dumbbell },
    { id: '45-sqm', label: '45 sqm', icon: Home },
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'kitchen', label: 'Kitchen', icon: Utensils },
    { id: 'free-parking', label: 'Free Parking', icon: Car },
    { id: 'beachfront', label: 'Beachfront', icon: Home },
  ];

  return (
    <section className="w-full bg-white relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="mx-auto max-w-[1720px]">
        {/* Split Screen Layout */}
        <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {/* Left Side - Image Gallery (60-65%) */}
          <div className="w-full  xl:w-[65%] relative">
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
                {room?.detailImages &&
                  room?.detailImages?.map((image: any, index: number) => (
                    <SwiperSlide key={index}>
                      <div
                        className="relative w-full h-full group cursor-pointer"
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                      >
                        <Image
                          src={getImageUrl(image)}
                          alt={`${displayRoomType} - View ${index + 1}`}
                          fill
                          className="object-fill w-full h-full"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#454779]" />
                            </div>
                            <span
                              className="font-sansation text-white text-[13px] sm:text-[14px] md:text-[16px] tracking-wider uppercase"
                              style={{ fontWeight: 700 }}
                            >
                              View Gallery
                            </span>
                          </div>
                        </div>
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
                {room?.discountPercentage}
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
                {room?.detailImages?.length > 0 &&
                  room?.detailImages?.map((image: any, index: number) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                      <div className="aspect-[4/3] rounded-md sm:rounded-lg overflow-hidden border-2 border-transparent hover:border-[#00B3DD] transition-all duration-300">
                        <Image
                          src={getImageUrl(image)}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            {room?.popularFacilities?.length > 0 && (
              <div className="flex flex-wrap justify-start md:justify-between items-start gap-3 sm:gap-4 md:gap-6 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-[#9BA9CA33] mt-3 sm:mt-4 md:mt-[20px] p-2 sm:py-3 sm:px-5">
                {ALL_FACILITIES.filter((facility) =>
                  room?.popularFacilities?.some(
                    (f: any) => f === facility.id || f?.id === facility.id
                  )
                ).map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 md:gap-5 xl:gap-3.5 p-[4px] sm:p-[6px] md:p-[8px]"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 rounded-full bg-[#00B3DD] flex items-center justify-center text-white flex-shrink-0">
                      <facility.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-[#64748B] font-normal">
                      {facility.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Content Panel (35-40%) */}
          <div className="relative w-full  xl:w-[35%] flex flex-col bg-[#9BA9CA33] p-4 sm:p-5 md:p-6 lg:p-[30px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
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
                {displayOriginalPrice}$
              </div>
              <div
                className="m-0 font-sansation text-[#00B3DD] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold"
                style={{ fontWeight: 700 }}
              >
                {displayDiscountedPrice}$
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
              {displayRoomType}
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
              className="text-[#2A2D71] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] tracking-[0.5px] mb-4 sm:mb-5 md:mb-6 break-words"
              style={{ fontWeight: 400 }}
            >
              {displayDescription}
            </p>

            {/* Booking Details */}
            <div
              ref={containerRef}
              className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-3 sm:p-4 md:p-5 flex flex-col gap-4 sm:gap-5 md:gap-[36px]"
            >
              <div className="flex flex-col relative">
                <label className="text-[#454779] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins leading-[22px] sm:leading-[26px] md:leading-[30px] mb-[6px] sm:mb-[8px] md:mb-[10px]">
                  Check In-Date:
                </label>
                <div
                  className="flex justify-between items-center gap-2 rounded-[120px] sm:rounded-[140px] md:rounded-[160px] py-[10px] sm:py-[12px] md:py-[15px] pl-[16px] sm:pl-[22px] md:pl-[30px] pr-[10px] sm:pr-[12px] md:pr-[15px] cursor-pointer"
                  onClick={() => {
                    setShowCheckInCalendar(!showCheckInCalendar);
                    setShowCheckOutCalendar(false);
                    setShowGuestsDropdown(false);
                  }}
                  style={{
                    background:
                      'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-sm text-gray-700">{formatDate(checkIn)}</span>
                  <Image
                    src={CalendarIcon}
                    alt="Calendar Icon"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] text-gray-400"
                  />
                </div>
                {showCheckInCalendar && (
                  <div className="absolute top-[85px] left-0 z-50 bg-white border border-gray-200 shadow-lg rounded-lg p-2">
                    <DatePicker
                      selected={checkIn}
                      onChange={(date: Date | null) => {
                        if (date) {
                          setCheckIn(date);
                          setShowCheckInCalendar(false);
                        }
                      }}
                      minDate={new Date()}
                      inline
                      className="font-poppins"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col relative">
                <label className="text-[#454779] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins leading-[22px] sm:leading-[26px] md:leading-[30px] mb-[6px] sm:mb-[8px] md:mb-[10px]">
                  Check Out-Date:
                </label>
                <div
                  className="flex justify-between items-center gap-2 rounded-[120px] sm:rounded-[140px] md:rounded-[160px] py-[10px] sm:py-[12px] md:py-[15px] pl-[16px] sm:pl-[22px] md:pl-[30px] pr-[10px] sm:pr-[12px] md:pr-[15px] cursor-pointer"
                  onClick={() => {
                    setShowCheckOutCalendar(!showCheckOutCalendar);
                    setShowCheckInCalendar(false);
                    setShowGuestsDropdown(false);
                  }}
                  style={{
                    background:
                      'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-sm text-gray-700">{formatDate(checkOut)}</span>
                  <Image
                    src={CalendarIcon}
                    alt="Calendar Icon"
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] text-gray-400"
                  />
                </div>
                {showCheckOutCalendar && (
                  <div className="absolute top-[85px] left-0 z-50 bg-white border border-gray-200 shadow-lg rounded-lg p-2">
                    <DatePicker
                      selected={checkOut}
                      onChange={(date: Date | null) => {
                        if (date) {
                          setCheckOut(date);
                          setShowCheckOutCalendar(false);
                        }
                      }}
                      minDate={checkIn}
                      inline
                      className="font-poppins"
                    />
                  </div>
                )}
              </div>

              {/* Guests */}
              <div className="flex flex-col relative">
                <label className="text-[#454779] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins leading-[22px] sm:leading-[26px] md:leading-[30px] mb-[6px] sm:mb-[8px] md:mb-[10px]">
                  Guest:
                </label>
                <div
                  className="flex justify-between items-center gap-2 rounded-[120px] sm:rounded-[140px] md:rounded-[160px] py-[10px] sm:py-[12px] md:py-[15px] pl-[16px] sm:pl-[22px] md:pl-[30px] pr-[10px] sm:pr-[12px] md:pr-[15px] cursor-pointer"
                  onClick={() => {
                    setShowGuestsDropdown(!showGuestsDropdown);
                    setShowCheckInCalendar(false);
                    setShowCheckOutCalendar(false);
                  }}
                  style={{
                    background:
                      'linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(77, 84, 100, 0) 0%, #9BA9CA 100%) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  <span className="text-xs sm:text-sm text-gray-700">{guestCount}</span>
                  <div
                    className={`transition-transform duration-300 ${showGuestsDropdown ? 'rotate-180' : ''}`}
                  >
                    <Image
                      src={DropdownIcon}
                      alt="Dropdown Icon"
                      className="w-[12px] h-[7px] sm:w-[14px] sm:h-[8px] md:w-[16.5px] md:h-[9px] text-gray-400"
                    />
                  </div>
                </div>
                {showGuestsDropdown && (
                  <div className="absolute top-[85px] w-full z-50 bg-white border border-gray-200 shadow-lg rounded-[20px] overflow-hidden max-h-[200px] overflow-y-auto">
                    {guestOptions.map((option, index) => (
                      <div
                        key={index}
                        className="px-6 py-3 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 font-poppins transition-colors border-b border-gray-100 last:border-0"
                        onClick={() => {
                          setGuestCount(option);
                          setShowGuestsDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
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

      {room?.detailImages && room.detailImages.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          plugins={[Thumbnails]}
          thumbnails={{
            position: 'bottom',
            width: 100,
            height: 75,
            border: 1,
            borderRadius: 4,
            padding: 4,
            gap: 8,
          }}
          slides={room.detailImages.map((image: any) => ({
            src: getImageUrl(image),
            alt: displayRoomType,
          }))}
        />
      )}
    </section>
  );
};

export default RoomDetails;
