import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight } from 'lucide-react';

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
];

const HotelLocations: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-brand uppercase tracking-wide">The Hotels</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-light">
            Located just minutes from the Mall of the Emirates, MENA ApartHotel Al Barsha places you at the center of Dubai's attractions, shopping, and business hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-96 w-full">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-transparent to-transparent opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                   <h3 className="text-xl font-heading font-bold text-accent mb-2">{hotel.name}</h3>
                   <div className="flex items-start space-x-2 text-gray-300 text-sm mb-6">
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">{hotel.address}</p>
                   </div>
                   
                   <button className="w-full py-3 bg-accent/20 hover:bg-accent backdrop-blur-sm border border-accent/50 text-white rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 flex items-center justify-center group-hover:bg-accent">
                      Visit Hotel
                      <ArrowUpRight size={16} className="ml-2" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots (Mockup match) */}
        <div className="flex justify-center mt-12 space-x-2">
            <span className="h-1.5 w-8 bg-accent rounded-full"></span>
            <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-1.5 w-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default HotelLocations;
