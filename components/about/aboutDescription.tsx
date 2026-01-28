import React from 'react';
import Image from 'next/image';
import space from '../../public/images/space.jpg';
import { useRouter } from 'next/router';

const AboutDescription = () => {
  const router = useRouter();
  const handlenavigation = () => {
    router.push('/about');
  };
  return (
    <section className="bg-[#9BA9CA]/20 py-24 px-4 md:px-24 flex flex-col gap-16 relative overflow-hidden">
      {/* Decorative Pata Image (Bottom Right) */}
      <div className="absolute right-0 bottom-[-60px] w-[364px] h-[409px] z-0 pointer-events-none hidden xl:block">
        <Image
          src="/images/Pata.png"
          alt="Pattern"
          layout="fill"
          objectFit="contain"
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col gap-2 max-w-[1720px] mx-auto w-full z-10">
        <h1 className="font-['Sansation'] font-light text-4xl md:text-[52px] uppercase text-[#454779] leading-tight">
          Welcome to <span className="font-bold">MENA ApartHotel Albarsha</span>
          <br />
        </h1>
        <p className="font-['Poppins'] text-[#8A8BB3] text-lg md:text-xl max-w-5xl">
          Where Comfort Meets Modern Living
        </p>

        {/* Large "ABOUT" background text opacity */}
        <div
          className="absolute top-[-80px] right-[10%] font-['Sansation'] font-bold text-[230px] leading-none text-transparent opacity-10 pointer-events-none select-none hidden 2xl:block z-0"
          style={{ WebkitTextStroke: '2px #FFFFFF' }}
        >
          ABOUT
        </div>
      </div>

      {/* Content Row: Image + Details Card */}
      <div className="flex flex-col xl:flex-row gap-8 max-w-[1720px] mx-auto w-full z-10 relative">
        {/* Image Side */}
        <div className="relative w-full xl:w-1/2 h-[400px] lg:h-[642px] rounded-[30px] overflow-hidden group">
          <Image
            src={space}
            alt="Mena Plaza Hotel Lobby"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* Play Button Overlay */}
          <div className="absolute right-[20px] bottom-[20px] flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group-hover:shadow-xl">
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 24.5V3.5L20 14L5 24.5Z"
                  stroke="#00B3DD"
                  strokeWidth="2"
                  fill="#00B3DD"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Side (White Card) */}
        <div className="w-full xl:w-1/2 bg-white rounded-[30px] p-8 md:p-12 lg:px-20 lg:py-14 flex flex-col justify-center gap-8 relative shadow-sm">
          {/* Background vector decoration (Placeholder for Vector 2/3) */}
          <div className="absolute right-0 bottom-[-60px] opacity-10 pointer-events-none">
            {/* Vector here if available */}
          </div>

          <p className="font-['Poppins'] text-[#8A8BB3] text-lg text-center leading-relaxed">
            <span>An Ideal Location</span>
            <span className="font-[500] text-[20px]">
              {' '}
              MENA ApartHotel Albarsha blends contemporary, spacious accommodations with
              warm,authentic Arabian hospitality. Located just steps from the iconic Mall of the
              Emirates, we provide the ideal and practical base for both short getaways and extended
              stays, offering outstanding value for exploring families, busy professionals and savvy
              travelers.{' '}
            </span>
            <br />
            <div className="flex flex-col items-center mt-5">
              <span className="font-['Sansation'] text-[#454779] uppercase text-xl tracking-wide font-bold">
                An Ideal Location
              </span>
              <div className="w-[75px] h-[1px] bg-[#9BA9CA]"></div>
            </div>
            <br />
            <span className="font-[300] text-[20px]">
              {' '}
              Nestled in the heart of Dubai, MENA ApartHotel Albarsha places you within easy reach
              of the city’s most famous attractions. Explore the breathtaking Burj Al Arab Tower
              (5.1 km), enjoy a leisurely stroll along The Walk at JBR(7.6 km), or indulge in luxury
              shopping at the nearby Mall of the Emirates (0.5 km). With Dubai International Airport
              only 22 km away, our hotel is conveniently positioned for seamless travel.
            </span>
          </p>

          {/* 
          <p className="font-['Poppins'] text-[#8A8BB3] text-lg text-center leading-relaxed">
            Situated close to Dubai's most famous attractions, best of the city within easy reach.
            With Dubai International Airport just 25 km away, you'll find us perfectly positioned
            for seamless travel. Mall of the Emirates (0.5 km). With Dubai International Airport
            only 22 km away, our hotel is conveniently positioned for seamless travel.
          </p> */}

          <div className="flex justify-center mt-4" onClick={handlenavigation}>
            <button className="flex items-center gap-4 bg-[#00B3DD] rounded-[60px] pl-8 pr-3 py-3 text-white transition hover:bg-[#009bc0] group">
              <span className="font-['Sansation'] font-bold text-lg tracking-[1.25px] uppercase">
                Learn More
              </span>
              <div className="w-[44px] h-[44px] rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#00B3DD] transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px]"
                >
                  <path
                    d="M1 13L13 1M13 1H5M13 1V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Accommodations Card */}
      <div className="bg-white rounded-[20px] p-8 md:p-[60px] max-w-[1720px] mx-auto w-full z-10 shadow-sm">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Left Text */}
          <div className="w-full xl:w-1/3 flex flex-col flex-wrap gap-6 my-auto">
            <h3 className="font-['Sansation'] text-[#454779] font-bold text-3xl md:text-[42px] leading-tight">
              Designed for Living
            </h3>
            <p className="font-['Poppins'] text-[#8A8BB3] text-lg leading-relaxed">
              Our suites and apartments are designed to make you feel at home, offering spacious
              layouts and amenities to ensure a relaxing and enjoyable stay.
            </p>
          </div>

          {/* Right List */}
          <div className="w-full xl:w-2/3 flex flex-col gap-8">
            <h4 className="font-['Sansation'] font-light text-[#454779] text-2xl md:text-[32px] uppercase tracking-wide">
              Your Fully-Equipped Home Includes:
            </h4>
            <ul className="grid grid-cols-1 gap-6">
              {[
                'A Private Kitchen: Prepare meals with ease thanks to a refrigerator, microwave, stovetop, washing machine, and essential cookware.',
                'Essential Comforts: Stay perfectly cool with individual air conditioning and connected with complimentary high-speed Wi-Fi.',
                'In-Room Entertainment: Relax and unwind with your favorite shows on a flat-screen TV.',
                'Refreshing Bathrooms: Private bathrooms feature a powerful shower and are stocked with quality toiletries and a hairdryer.',
                'Space to Live: One- and Two-Bedroom layouts offer separate living and sleeping areas for true comfort and privacy.',
                'Smoking and non-smoking options are available to suit your needs.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-3 w-2 h-2 bg-[#00B3DD] rotate-45 flex-shrink-0" />
                  <span className="font-['Sansation'] text-[#2A2D71] text-lg md:text-[20px] tracking-[0.5px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
