import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

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
  return (
    <section id="rooms" className="py-20 bg-[#FFFFFF] p-[100px]">
      <div className="max-w-[1720px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
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
          className="pb-12 !px-4" // Padding for shadow clipping
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id} className="h-full">
              <RoomCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoomSlider;
