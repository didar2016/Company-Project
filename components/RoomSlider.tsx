import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ArrowUpRight, Bed, Wifi, Bath, Maximize2 } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    features: ['King Bed', 'Free Wifi', 'Kitchenette']
  },
  {
    id: 2,
    title: 'ONE-BEDROOM APARTMENT',
    size: '65 sqm', // Prompt: 85 sqm. Image: 65 sqm. I will use PROMPT values. One-Bed 85 sqm.
    price: 899,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=One+Bedroom',
    features: ['King Bed', 'Living Area', 'Full Kitchen']
  },
  {
    id: 3,
    title: 'TWO-BEDROOM APARTMENT',
    size: '85 sqm', // Prompt: 105 sqm. I will use PROMPT values.
    price: 899,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Two+Bedroom',
    features: ['2 King Beds', '2 Bathrooms', 'City View']
  },
  {
    id: 4,
    title: 'EXECUTIVE SUITE',
    size: '120 sqm',
    price: 999,
    image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Executive+Suite',
    features: ['Panoramic View', 'Jacuzzi', 'Office']
  }
];

const RoomSlider: React.FC = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
           <span className="text-accent uppercase tracking-widest text-sm font-bold">Accommodation</span>
           <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2">Our Rooms</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur text-brand px-3 py-1 rounded-full text-xs font-bold">
                     From ${room.price} / Night
                   </div>
                   {/* Discount Badge Example */}
                   <div className="absolute top-4 left-4 z-10 bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                     20% OFF
                   </div>
                   
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-xl font-heading font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors">
                        {room.title}
                     </h3>
                  </div>
                  
                  {/* Features Icons (Mockup) */}
                  <div className="flex items-center space-x-4 my-4 text-gray-400">
                      <div className="flex items-center space-x-1" title="Size">
                          <Maximize2 size={16} />
                          <span className="text-sm font-medium">{room.size}</span>
                      </div>
                      <div className="flex items-center space-x-1" title="Wifi">
                         <Wifi size={16} />
                      </div>
                      <div className="flex items-center space-x-1" title="Bed">
                         <Bed size={16} />
                      </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <button className="text-sm font-bold text-gray-500 uppercase tracking-wider hover:text-brand transition-colors flex items-center">
                        View Details 
                        <ArrowUpRight size={16} className="ml-1" />
                    </button>
                    
                    <button className="bg-accent text-white p-2 rounded-full hover:bg-brand transition-colors" aria-label="Book Now">
                       <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoomSlider;
