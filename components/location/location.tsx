import React from 'react';
import Image from 'next/image';
import hotelmapicon from '../../public/images/location_map_icon.png';
import visithotelicon from '../../public/images/visithotelicon.png';
import burjkhalifa from '../../public/images/burjalkhlifa.png';
import mountain from '../../public/images/desertsafari.png';
import sea from '../../public/images/burjalarab.png';

interface Hotel {
  id: number;
  name: string;
  address: string;
  image: any;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Desert Safari',
    address: 'Visit desert safari for an unforgettable adventure',
    image: mountain,
  },
  {
    id: 2,
    name: 'Burj Khalifa',
    address: 'Visit Burj Khalifa for an unforgettable experience',
    image: burjkhalifa,
  },
  {
    id: 3,
    name: 'Burj Al Arab',
    address: 'Visit Burj Al Arab for an unforgettable experience',
    image: sea,
  },
];

const Locations: React.FC = () => {
  return (
    <section id="location" className=" bg-white border-none">
      <div className=" bg-white py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
        <div className="max-w-[1720px] mx-auto">
          <div className="flex flex-wrap flex-row gap-x-[20px] gap-y-8 sm:gap-y-12 justify-center">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex flex-col gap-4 sm:gap-[30px] group h-full relative max-w-[540px] overflow-hidden mx-auto"
              >
                {/* Image Container */}
                <div className="border-[#A4D5F0] border-l-[4px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[116px]">
                  <h4
                    className="text-[20px] sm:text-[24px] md:text-[32px] font-sansation text-[#454779] mb-1 sm:mb-2 ml-3 sm:ml-5 leading-[46px] uppercase"
                    style={{ fontWeight: 300 }}
                  >
                    {hotel.name}
                  </h4>
                  <div
                    className="flex items-start space-x-2 text-[12px] sm:text-sm mb-4 sm:mb-6 ml-3 sm:ml-[20px] text-[#6D6E87] font-poppins"
                    style={{ fontWeight: 400 }}
                  >
                    <Image src={hotelmapicon} alt="Map Icon" className="w-6 h-6" />
                    <p className="text-[20px] text-[#6D6E87] leading-[30px]">{hotel.address}</p>
                  </div>
                </div>
                <div className="relative overflow-hidden aspect-square w-full max-w-[540px]">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-fill object-center rounded-[15px] sm:rounded-[50px] md:rounded-[50px] w-full h-full"
                  />

                  {/* <div className="absolute left-3 sm:left-6 bottom-2 sm:bottom-7 py-[5px] px-[16px] rounded-[30px] flex flex-row gap-[10px] backdrop-blur-[20px]">
                    <div
                      className="absolute inset-0 rounded-[30px] pointer-events-none"
                      style={{
                        padding: '1px',
                        background:
                          'radial-gradient(84.35% 86.25% at 5.73% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.17) 100%)',
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <Image
                      src={mapicon2}
                      alt="Map Icon"
                      className="w-[16px] h-[21px] translate-y-[3px]"
                    />
                    <div className="text-white font-poppins text-[20px] leading-[30px] font-[400]">
                      45 Min Drive
                    </div>
                  </div> */}

                  <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4">
                    <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 bg-white opacity-100 rounded-3xl sm:rounded-4xl p-2 sm:p-3">
                      <span className="pl-2 font-sansation sm:pl-4 font-bold text-[14px] sm:text-[16px] md:text-[20px] uppercase text-[#454779] leading-[30px] tracking-[1.2px]">
                        GET DIRECTION
                      </span>
                      <Image
                        src={visithotelicon}
                        alt="Visit Hotel Icon"
                        className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px] filter: brightness(0) saturate(100%) invert(43%) sepia(29%) saturate(794%) hue-rotate(188deg) brightness(94%) contrast(89%)"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default Locations;
