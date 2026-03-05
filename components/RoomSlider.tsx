import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RoomCard from './roomcard';
import { useRooms } from '@/contexts/WebsiteContext';

const RoomSlider: React.FC = () => {
  const prevRef = React.useRef<HTMLButtonElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);
  const swiperRef = React.useRef<SwiperType | null>(null);

  const handleSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  React.useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper && prevRef.current && nextRef.current) {
      const navigation = swiper.params.navigation;
      if (navigation && typeof navigation !== 'boolean') {
        const params = {
          ...navigation,
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        };
        swiper.params.navigation = params;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  const rooms = useRooms();

  return (
    <section id="rooms" className="mt-10 lg:mt-12 bg-[#FFFFFF] ">
      <div className="max-w-[1720px] mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={handleSwiper}
          // pagination={{ clickable: true }}
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
          className="pb-12 !px-2 sm:!px-4" // Padding for shadow clipping
        >
          {rooms.length > 0 ? (
            rooms.map((room, index) => (
              <SwiperSlide key={index} className="h-full">
                <RoomCard room={room} index={index} />
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center w-full py-20">
              <p className="text-gray-500 text-lg">No rooms available at the moment.</p>
            </div>
          )}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="swiper-button-prev-custom absolute top-1/2 left-0 sm:-left-2 md:-left-3 lg:-left-3.5 z-10 w-[40px] h-[36px] sm:w-[50px] sm:h-[42px] md:w-[60px] md:h-[50px] -translate-y-1/2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-[#A4D5F0] rounded-2xl sm:rounded-3xl bg-white"
        >
          <span className="">
            <ArrowLeft
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              style={{ color: '#00B3DD' }}
            />
          </span>
        </button>

        <button
          ref={nextRef}
          className="swiper-button-next-custom absolute top-1/2 right-0 sm:-right-2 md:-right-3 z-10 w-[40px] h-[36px] sm:w-[50px] sm:h-[42px] md:w-[60px] md:h-[50px] -translate-y-1/2 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-[#A4D5F0] rounded-2xl sm:rounded-3xl bg-white"
        >
          <span className="">
            <ArrowRight
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              style={{ color: '#00B3DD' }}
            />
          </span>
        </button>
      </div>
    </section>
  );
};

export default RoomSlider;
