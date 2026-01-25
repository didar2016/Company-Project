import React from 'react';
import Image from 'next/image';
import visithotelicon from '../public/images/visithotelicon.png';
const Hero: React.FC<{ image: any; title: string; description: string; component: string }> = ({
  image,
  title,
  description,
  component,
}) => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      {component === 'index' ? (
        <div className="w-full h-[100vh]  xl:h-[1400px] min-[1490px]:h-[1980px] min-[1911px]:h-[1500px]">
          {/* Placeholder for Hero Image */}
          <Image
            src={image}
            alt="Mena Hotel Interior"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center scale-150 sm:scale-125 md:scale-110 lg:scale-100"
            priority
            quality={90}
            style={{ objectFit: 'fill' }}
          />
        </div>
      ) : (
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[694px]">
          <Image
            src={image}
            alt="Mena Hotel Interior"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center scale-150 sm:scale-125 md:scale-110 lg:scale-100"
            priority
            quality={90}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      {component === 'index' && (
        <>
          <div
            className="absolute top-0 right-0 w-3/5 h-full z-10"
            style={{
              backdropFilter: 'blur(14px)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 54px)',
              maskImage: 'linear-gradient(to right, transparent, black 54px)',
              background:
                'radial-gradient(98.23% 73.71% at 16.71% 87.33%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.205) 39.42%)',
            }}
          />

          <div className="absolute z-20 text-center md:text-right text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1130px] mx-auto top-[10%] sm:top-[15%] xl:top-[25%] right-0 sm:right-[2%] md:right-[5%] left-4 sm:left-auto ">
            <h2 className="font-sansation font-bold text-[18px] md:text-[24px] lg:text-[30px] leading-[1.3] text-[#A4D5F0] uppercase text-right mb-2 lg:mb-[18px]">
              WELCOME TO MENA APARTHOTEL ALBARSHA
            </h2>
            <h1 className="font-sansation-light font-light text-[36px] md:text-[60px] lg:text-[90px] leading-[1.1] lg:leading-[110px] text-white uppercase text-right mb-2 lg:mb-[18px]">
              YOUR <span className="font-bold font-sansation">HOME BASE</span> IN THE{' '}
              <span className="font-bold font-sansation">HEART</span> OF THE DUBAI.
            </h1>
            <p className="font-sansation-light font-light text-[14px] md:text-[18px] lg:text-[20px] leading-[1.2] text-white text-right md:max-w-full">
              Mena Apart Hotels offers modern, fully equipped suites crafted for both business and
              leisure stays giving you the space to work, relax, and experience true comfort with
              every visit.
            </p>
          </div>

          {/* Search Bar Section */}
          <div className="max-w-[1720px] z-20 absolute bottom-[18%] sm:bottom-[22%] md:bottom-[25%] lg:bottom-[8%]  right-[20%] left-[50%]  xl:left-1/2 transform -translate-x-1/2 xl:w-[83%] xl:right-20 min-h-[100px] lg:min-h-[178px] bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(234,234,234,0.3)] backdrop-blur-[12px] rounded-[10px] p-4 lg:p-[40px] flex flex-wrap flex-col xl:flex-row items-end gap-4 lg:gap-[30px] pointer-events-auto shadow-lg">
            {/* Check In */}
            <div className="flex flex-col gap-[8px] w-full xl:w-[202px]">
              <span className="font-poppins text-white text-[14px] lg:text-[20px]">
                Check In-Date
              </span>
              <div className="flex items-center justify-between border border-[rgba(255,255,255,0.4)] rounded-[160px] h-[50px] lg:h-[60px] px-[15px] lg:px-[30px] w-full">
                <span className="font-poppins text-white text-[14px] lg:text-[20px]">
                  21 Dec 2025
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                >
                  <path
                    d="M19 4H18V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z"
                    fill="#A4D5F0"
                  />
                </svg>
              </div>
            </div>

            {/* Check Out */}
            <div className="flex flex-col gap-[8px] w-full xl:w-[202px]">
              <span className="font-poppins text-white text-[14px] lg:text-[20px]">
                Check Out-Date
              </span>
              <div className="flex items-center justify-between border border-[rgba(255,255,255,0.4)] rounded-[160px] h-[50px] lg:h-[60px] px-[15px] lg:px-[30px] w-full">
                <span className="font-poppins text-white text-[14px] lg:text-[18px]">
                  26 Dec 2025
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 lg:w-6 lg:h-6"
                >
                  <path
                    d="M19 4H18V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V4H8V3C8 2.44772 7.55228 2 7 2C6.44772 2 6 2.44772 6 3V4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z"
                    fill="#A4D5F0"
                  />
                </svg>
              </div>
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-[8px] w-full xl:w-[331px]">
              <span className="font-poppins text-white text-[14px] lg:text-[20px]">Guests</span>
              <div className="flex items-center justify-between border border-[rgba(255,255,255,0.4)] rounded-[160px] h-[50px] lg:h-[60px] px-[15px] lg:px-[30px] w-full cursor-pointer">
                <span className="font-poppins text-white text-[14px] lg:text-[20px]">
                  2 Adults, 1 Children
                </span>
                <span className="text-white text-xs lg:text-sm">▼</span>
              </div>
            </div>

            {/* Room Type */}
            <div className="flex flex-col gap-[8px] w-full xl:w-[331px]">
              <span className="font-poppins text-white text-[14px] lg:text-[20px]">Room Type</span>
              <div className="flex items-center justify-between border border-[rgba(255,255,255,0.4)] rounded-[160px] h-[50px] lg:h-[60px] px-[15px] lg:px-[30px] w-full cursor-pointer">
                <span className="font-poppins text-white text-[14px] lg:text-[20px]">
                  Deluxe Suite
                </span>
                <span className="text-white text-xs lg:text-sm">▼</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="flex flex-row justify-between items-center gap-0 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-2 sm:px-3 border-1"
              style={{
                background: '#00B3DD',
                // : 'white',
                borderColor: '#00B3DD',
                // '#00B3DD',
              }}
            >
              <span
                className="pr-[2px]! p-2 sm:p-2.5 md:p-3 lg:p-3.5 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase text-white tracking-[1.25px]"
                style={{
                  fontWeight: 700,
                  color: 'white',
                  // : '#454779'
                }}
              >
                {' '}
                CHECK AVAILABILITY
              </span>
              <Image
                src={visithotelicon}
                alt="Visit Hotel Icon"
                className="object-fill object-center h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] lg:h-[40px] lg:w-[48px]
              "
                //
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(6502%) hue-rotate(18deg) brightness(119%) contrast(100%)',
                  // : 'brightness(0) saturate(100%) invert(41%) sepia(21%) saturate(1108%) hue-rotate(188deg) brightness(100%) contrast(88%)',
                }}
              />
            </button>
          </div>
        </>
      )}

      {(component === 'amenities' ||
        component === 'location' ||
        component === 'dining' ||
        component === 'room' ||
        component === 'singleroom' ||
        component === 'about' ||
        component === 'contact') && (
        <>
          <div
            className="absolute top-0 right-0 w-3/5 h-full z-10"
            style={{
              backdropFilter: 'blur(14px)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 54px)',
              maskImage: 'linear-gradient(to right, transparent, black 54px)',
              background:
                'radial-gradient(98.23% 73.71% at 16.71% 87.33%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.205) 39.42%)',
            }}
          />
          <div className="absolute z-20 text-center md:text-right text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1130px] mx-auto bottom-[10%] sm:bottom-[15%] md:bottom-[32%] right-0 sm:right-[2%] md:right-[5%] left-4 sm:left-auto ">
            <h1
              className="text-white font-sansation text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[50px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] uppercase"
              style={{ fontWeight: 700 }}
            >
              {title}
            </h1>
            <p
              className="font-sansation font-light text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[32px] leading-[120%] text-center md:text-right max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none mx-auto md:mx-0 uppercase"
              style={{ fontWeight: 700 }}
            >
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
