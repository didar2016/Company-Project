import React from 'react';
import Image from 'next/image';
import restaurent from '../../public/images/restaurent.jpg';
import { useRouter } from 'next/router';
import res2 from '../../public/images/res2.jpg';

const Description = () => {
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
        <h1 className="font-['Sansation'] font-light text-4xl md:text-[72px] uppercase text-[#454779] leading-tight">
          Live the <span className="font-bold">Mena Apart</span> Experience
        </h1>
        <p className="font-['Poppins'] text-[#8A8BB3] text-lg md:text-xl max-w-4xl">
          Modern spaces, exceptional service, and everything you need for a seamless stay in the
          city
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
            src={res2}
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
            <span className="font-500 text-[20px]">
              {' '}
              Situated in the vibrant city of Dubai, MENA ApartHotel Albarsha is the perfect choice
              for short or extended stays. A short walk from the Mall of the Emirates, we combine
              the comforts of home with genuine hospitality, offering outstanding value for
              families, business travelers, and explorers.
            </span>
            <br />
            {/* <span className="font-[400] text-[18px]"></span> Unwind in our fully furnished, spacious
            suites and apartments—each designed for living, not just staying. Enjoy delicious,
            authentic Turkish cuisine at the on-site Masa Turkish Eatery. Recharge with a swim in
            the rooftop pool or a workout in the health club. Our dedicated team is here to ensure
            your stay is smooth, comfortable, and memorable. */}
            <br />
            <span className="font-[700] text-[20px]">
              {' '}
              Book your stay today and experience the perfect blend of modern living and warm
              hospitality at MENA ApartHotel Albarsha.
            </span>
          </p>

          {/* <div className="flex flex-col items-center gap-4">
            <span className="font-['Sansation'] text-[#454779] uppercase text-lg tracking-wide">
              An Ideal Location
            </span>
            <div className="w-[75px] h-[1px] bg-[#9BA9CA]"></div>
          </div> */}
        </div>
      </div>

      {/* Accommodations Card */}
      <div className="bg-white rounded-[20px] p-8 md:p-[60px] max-w-[1720px] mx-auto w-full z-10 shadow-sm">
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Left Text */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6">
            <h3 className="font-['Sansation'] text-[#454779] font-bold text-3xl md:text-[42px] leading-tight">
              Exceptional Accommodations
            </h3>
            <p className="font-['Poppins'] text-[#8A8BB3] text-lg leading-relaxed">
              Our suites and apartments are designed to make you feel at home, offering spacious
              layouts and premium amenities to ensure a relaxing and enjoyable stay.
            </p>
          </div>

          {/* Right List */}
          <div className="w-full xl:w-2/3 flex flex-col gap-8">
            <h4 className="font-['Sansation'] font-light text-[#454779] text-2xl md:text-[32px] uppercase tracking-wide">
              Every suite and apartment includes:
            </h4>
            <ul className="grid grid-cols-1 gap-6">
              {[
                'Fully equipped kitchens with a fridge, microwave, washing machine, and essential appliances',
                'Air conditioning and free high-speed Wi-Fi',
                'Flat-screen TVs with interactive entertainment systems',
                'Private bathrooms featuring a refreshing shower, free toiletries, and a hairdryer',
                'Separate living areas for added comfort in One- and Two-Bedroom Apartments',
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

export default Description;
