import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import visithotelicon from '../../public/images/visithotelicon.png';
import starIcon from '../../public/images/Star.png';
import { ALLDATA } from '@/contexts/titles';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const MapReview: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Zbeshion Holder',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: '"Absolutely one of the best stays I have ever had. The room was spotless, the bed was incredibly comfortable, and the view was breathtaking. The complimentary breakfast was a delight — fresh, varied, and beautifully presented. The staff remembered my name from day one and made every interaction feel genuinely warm. Truly a 5-star experience in every sense."',
    },
    {
      id: 2,
      name: 'Prashika Rajuya',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 4,
      text: '"From the moment I arrived, I felt like a VIP. The check-in was seamless and the room exceeded all expectations — beautifully decorated, impeccably clean, and stocked with every amenity you could think of. The rooftop pool and the spa were outstanding. I especially loved the 24-hour in-room dining; the food was restaurant-quality at any hour. Will absolutely return!"',
    },
    {
      id: 3,
      name: 'Yogesh Singhmar',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: '"MENA Apart Hotel is a hidden gem in the heart of the city. The fitness centre is top-notch with modern equipment, and the free high-speed WiFi worked flawlessly throughout my stay. The location is perfect — just minutes from major landmarks and business hubs. Special shoutout to the concierge team for arranging everything with a smile. Phenomenal service!"',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=25',
      rating: 4,
      text: '"I travel frequently for work and this hotel has set a new benchmark for me. The executive suite was stunning — spacious, modern, and immaculately maintained. The business facilities were excellent, and the complimentary airport transfer was a wonderful touch. The restaurant served some of the finest cuisine I have had on any business trip. Highly recommended for both leisure and corporate stays!"',
    },
    {
      id: 5,
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=60',
      rating: 5,
      text: '"A perfect blend of luxury and comfort. The swimming pool area is stunning, the bar serves excellent cocktails, and the room service was prompt and delicious. What really stood out was how attentive the housekeeping team was — the room was always immaculate and refreshed beautifully each day. My family and I loved every single moment of our stay here!"',
    },
  ];

  return (
    <section
      className={`relative w-full bg-white overflow-hidden mx-auto  px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16 2xl:px-18 [@media(min-width:1920px)]:px-25 py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16 2xl:py-18 [@media(min-width:1920px)]:py-25 `}
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="flex flex-col justify-between items-center xl:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Interactive Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className=" relative w-full xl:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
          >
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

                <a
                  href={ALLDATA.map.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 border-1 border-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3 transition-all duration-300 group-hover:bg-[#00B3DD]">
                    <span
                      className="p-2 sm:p-3 md:p-4 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] uppercase text-white transition-colors duration-300"
                      style={{ fontWeight: 700 }}
                    >
                      {' '}
                      GET DIRECTION
                    </span>
                    <Image
                      src={visithotelicon}
                      alt="Visit Hotel Icon"
                      className="h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] transition-all duration-300 [filter:brightness(0)_saturate(100%)_invert(56%)_sepia(93%)_saturate(1899%)_hue-rotate(161deg)_brightness(97%)_contrast(101%)] group-hover:[filter:brightness(0)_invert(1)]"
                    />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Review Slider with Swiper */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="max-w-[760px] relative w-full xl:w-1/2 flex items-center justify-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapReview;
