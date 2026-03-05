import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import hotelmapicon from '../../public/images/location_map_icon.png';
import visithotelicon from '../../public/images/visithotelicon.png';
import burjkhalifa from '../../public/images/burjalkhlifa.png';
import mountain from '../../public/images/desertsafari.png';
import sea from '../../public/images/burjalarab.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

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
      <div className=" bg-white py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-20 xl:px-25">
        <div className="max-w-[1720px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-[20px] gap-y-8 sm:gap-y-12"
          >
            {hotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                variants={fadeInUp}
                className="flex flex-col gap-4 sm:gap-[30px] group h-full relative w-full min-w-[350px] md:min-w-[350px] max-w-[540px] xl:max-w-[540px] overflow-hidden "
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
                <div className="relative overflow-hidden aspect-square w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-fill object-center rounded-[15px] sm:rounded-[50px] md:rounded-[50px] w-full h-full"
                  />

                  <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4">
                    <button className="flex flex-row justify-between items-center gap-1.5 sm:gap-2.5 bg-white opacity-100 rounded-3xl sm:rounded-4xl p-2 sm:p-3">
                      <span className="pl-2 font-sansation sm:pl-4 font-bold text-[14px] sm:text-[16px] md:text-[20px] uppercase text-[#454779] leading-[30px] tracking-[1.2px]">
                        GET DIRECTION
                      </span>
                      <Image
                        src={visithotelicon}
                        alt="Visit Hotel Icon"
                        className="object-fill object-center h-[30px] w-[36px] sm:h-[36px] sm:w-[44px] md:h-[44px] md:w-[54px]"
                        style={{
                          filter:
                            'brightness(0) saturate(100%) invert(43%) sepia(29%) saturate(794%) hue-rotate(188deg) brightness(94%) contrast(89%)',
                        }}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
