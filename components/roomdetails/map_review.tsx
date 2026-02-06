import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import visithotelicon from '../../public/images/visithotelicon.png';
import starIcon from '../../public/images/Star.png';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

interface MapReviewProps {
  className?: string;
}

const MapReview: React.FC<MapReviewProps> = ({ className = '' }) => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Zbeshion Holder',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: '"It\'s really a nice Hotel for both eally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for botheally a nice Hotel for both (Business and Pleasure) Stay.. Located on prime location just 7 minutes from Airport..All living hood on Door step."',
    },
    {
      id: 2,
      name: 'Prashika Rajuya',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: '"A well maintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the office and eateries. Special thanks to Sabina Lama for keeping my room in tip top condition. She has been seeing to my request of dust free and clean room. Kudos! Thank you"',
    },
    {
      id: 3,
      name: 'Yogesh Singhmar',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: '"MENA Apart hotel is an amazing budget hotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgehotel is an amazing budgefriendly place in dubai. They provide some great services and care taking. All hotel staff is very friendly and amazing in behaviour"',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=25',
      rating: 5,
      text: '"Exceptional service anmaintained comfy place thational service anmaintained comfy place thional service anmaintained comfy place thional service anmaintained comfy place thional service anmaintained comfy place thional service anmaintained comfy place thional service anmaintained comfy place thional service anmaintained comfy place ths near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the od beautiful location. The staff went above and beyond to make our stay comfortable. Highly recommend!"',
    },
    {
      id: 5,
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=60',
      rating: 5,
      text: '"Perfect blend of comfort and maintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the omaintained comfy place thats near the o luxury. The rooms are spacious, clean, and well-maintained. Will definitely return!"',
    },
  ];

  return (
    <section
      className={`relative w-full bg-white py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25`}
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="flex flex-col justify-between items-center xl:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Interactive Map */}
          <div className=" relative w-full xl:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            {/* Map Container */}
            <div className="absolute inset-0 bg-gray-200">
              {/* Replace this iframe with your actual map implementation */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68284117486!2d54.947650190449806!3d25.076381026356393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1642345678901!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Info Overlay Card */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-8 lg:right-auto lg:max-w-[648px]">
              <div className="bg-[#171B43] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl backdrop-blur-sm bg-opacity-95">
                {/* Main Heading */}
                <h2 className="font-sansation text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[46px] font-light mb-3 sm:mb-4 md:mb-6 tracking-wide">
                  INTERACTIVE CITY MAP
                </h2>

                {/* Description */}
                <p className="font-sansation text-white text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] leading-[18px] sm:leading-[22px] md:leading-[28px] lg:leading-[36px] mb-4 sm:mb-6 md:mb-8 tracking-[0.5px] sm:tracking-[0.75px]">
                  Located in the vibrant heart of downtown, our hotel is just minutes from major
                  attractions, business districts, and cultural landmarks, offering unparalleled
                  access to the citys best.
                </p>

                <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 border-1 border-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3">
                  <span
                    className="p-2 sm:p-3 md:p-4 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] uppercase text-white"
                    style={{ fontWeight: 700 }}
                  >
                    {' '}
                    GET DIRECTION
                  </span>
                  <Image
                    src={visithotelicon}
                    alt="Visit Hotel Icon"
                    className="h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px]"
                    style={{
                      filter:
                        'brightness(0) saturate(100%) invert(56%) sepia(93%) saturate(1899%) hue-rotate(161deg) brightness(97%) contrast(101%)',
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Location Pin Popup (Optional - shown on map) */}
            <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 hidden lg:block">
              <div className="bg-white rounded-lg shadow-xl p-3 sm:p-4 min-w-[160px] sm:min-w-[200px]">
                <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                  MENA ApartHotel
                </h3>
                <div className="h-1 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Review Slider with Swiper */}
          <div className="max-w-[760px] relative w-full xl:w-1/2 flex items-center justify-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
            <div className="relative w-full flex items-center gap-2 sm:gap-4 lg:gap-8">
              {/* Swiper Container */}
              <div className="flex-1 w-full">
                <Swiper
                  direction="vertical"
                  slidesPerView={1.2}
                  spaceBetween={20}
                  mousewheel={true}
                  pagination={{
                    el: '.review-pagination-vertical',
                    clickable: true,
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                  }}
                  modules={[Pagination, Mousewheel]}
                  className="review-swiper h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                  breakpoints={{
                    640: {
                      slidesPerView: 1.3,
                      spaceBetween: 25,
                    },
                    768: {
                      slidesPerView: 1.4,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 1.5,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                      <div className="flex items-center justify-between h-full px-2 sm:px-4">
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full">
                          {/* Reviewer Info - Avatar on left, Stars on right */}
                          <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0">
                            {/* Left side: Avatar and Name stacked */}
                            <div className="flex flex-col gap-2 sm:gap-3">
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
                              />
                              <p className="text-[#9CA3AF] text-xs sm:text-sm font-light">
                                — {review.name}
                              </p>
                            </div>

                            {/* Right side: Star Rating aligned to top */}
                            <div className="flex justify-items-start items-center gap-1 sm:gap-2 my-1 sm:my-2">
                              {[...Array(review.rating)].map((_, i) => (
                                <div
                                  key={i}
                                  className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px]"
                                >
                                  <Image src={starIcon} alt="*" />
                                </div>
                              ))}
                              <span className="font-sansation text-[#454779] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] ml-1">
                                ({review.rating} Star)
                              </span>
                            </div>
                          </div>

                          {/* Review Text */}
                          <div className="mb-4 sm:mb-6">
                            <p className="text-[#9CA3AF] text-xs sm:text-sm md:text-base leading-relaxed font-light line-clamp-4 sm:line-clamp-5">
                              {review.text}
                            </p>
                          </div>

                          {/* Divider */}
                          <div className="border-t border-[#E5E7EB] mb-4 sm:mb-6"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Vertical Pagination Dots */}
              <div className="review-pagination-vertical flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapReview;

// Add this to your global CSS file (globals.css)
// Custom Swiper pagination styles for vertical dots
/*
.review-pagination-vertical {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.custom-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D1D5DB;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
}

.custom-bullet:hover {
  background: #9CA3AF;
}

.custom-bullet-active {
  width: 8px;
  height: 32px;
  border-radius: 4px;
  background: #00B3DD !important;
}

.review-swiper {
  width: 100%;
}

.review-swiper .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 640px) {
  .review-pagination-vertical {
    gap: 8px;
  }
  
  .custom-bullet {
    width: 6px;
    height: 6px;
  }
  
  .custom-bullet-active {
    width: 6px;
    height: 24px;
  }
}
*/
