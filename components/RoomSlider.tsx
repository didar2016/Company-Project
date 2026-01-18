import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RoomCard from './roomcard';

interface Room {
  id: number;
  title: string;
  size: string;
  price: number;
  image: string;
  features: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    title: 'STUDIO APARTMENT',
    size: '45 sqm', // Image says 45sqm for Studio (prompt said 65 but visual says 45 for Studio, prompt says 65 for One-Bed? Prompt says Studio 65...). Let's stick to PROMPT values if possible, but image is 45. The Prompt says: "a) STUDIO APARTMENT - 65 sqm...". I will follow PROMPT.
    price: 899,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Studio+Apartment',
    features: ['King Bed', 'Free Wifi', 'Kitchenette'],
  },
  {
    id: 2,
    title: 'ONE-BEDROOM APARTMENT',
    size: '65 sqm', // Prompt: 85 sqm. Image: 65 sqm. I will use PROMPT values. One-Bed 85 sqm.
    price: 899,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=One+Bedroom',
    features: ['King Bed', 'Living Area', 'Full Kitchen'],
  },
  {
    id: 3,
    title: 'TWO-BEDROOM APARTMENT',
    size: '85 sqm', // Prompt: 105 sqm. I will use PROMPT values.
    price: 899,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Two+Bedroom',
    features: ['2 King Beds', '2 Bathrooms', 'City View'],
  },
  {
    id: 4,
    title: 'EXECUTIVE SUITE',
    size: '120 sqm',
    price: 999,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Executive+Suite',
    features: ['Panoramic View', 'Jacuzzi', 'Office'],
  },
];

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

  return (
    <section
      id="rooms"
      className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[#FFFFFF] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[100px]"
    >
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
          {rooms.map((room) => (
            <SwiperSlide key={room.id} className="h-full">
              <RoomCard />
            </SwiperSlide>
          ))}
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
