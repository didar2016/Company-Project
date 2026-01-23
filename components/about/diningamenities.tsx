import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const DiningAmenities = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto p-4 lg:p-[100px] flex flex-col gap-[10px] z-[3] relative">
      <div className="w-full bg-[#EBEEF4] rounded-[20px] p-6 lg:p-[30px] flex flex-col gap-[20px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center w-full min-h-[68px] text-center">
          <h2 className="font-sansation font-light text-[32px] lg:text-[56px] leading-[40px] lg:leading-[68px] uppercase text-[#454779]">
            DINING AND AMENITIES
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col xl:flex-row items-stretch gap-[30px] w-full">
          {/* Left: Image */}
          <div className="w-full xl:w-[815px] min-h-[400px] xl:min-h-[628px] relative rounded-[20px] overflow-hidden order-1 xl:order-none">
            <Image
              src="/images/culinary.png" // Using a placeholder since the specific file name in CSS is likely local
              alt="Masa Turkish Eatery"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-between p-6 lg:p-[20px] lg:gap-[40px] gap-6 w-full xl:w-[815px] bg-white rounded-[20px] backdrop-blur-[12px] order-2 xl:order-none">
            {/* Top Text Content */}
            <div className="flex flex-col gap-6 lg:gap-[40px]">
              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-sansation font-bold text-[32px] lg:text-[42px] leading-[1.3] text-[#454779]">
                  Masa Turkish Eatery
                </h3>
                <p className="font-sansation text-[16px] lg:text-[20px] leading-[1.5] tracking-[0.5px] text-[#2A2D71]">
                  Savor the flavors of authentic Turkish cuisine at our on-site restaurant, Masa
                  Turkish Eatery, whether dining in the cozy restaurant or enjoying in-room dining,
                  every meal is crafted to delight your palate.
                </p>
              </div>

              {/* Guests can also enjoy */}
              <div className="flex flex-col gap-[20px] lg:gap-[10px]">
                <h4 className="font-sansation font-light text-[24px] lg:text-[32px] uppercase text-[#454779] leading-[1.4]">
                  GUESTS CAN ALSO ENJOY:
                </h4>

                <div className="flex flex-col gap-[20px]">
                  <AmenityItem text="A rooftop swimming pool for relaxation with a view" />
                  <AmenityItem text="A fully equipped fitness center to maintain your workout routine" />
                  <AmenityItem text="A rejuvenating sauna for ultimate relaxation" />
                  <AmenityItem text="Free Wi-Fi to stay connected throughout your stay" />
                  <AmenityItem text="Guests can also enjoy:" />
                </div>
              </div>
            </div>

            {/* Buttons - Following CSS structure logic for buttons at the bottom if needed, 
                             though not visible in the prompt image, they are present in the provided CSS. 
                         */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-[30px] mt-auto pt-4">
              {/* Outline Button */}
              <button className="w-full sm:w-[283px] h-[68px] border border-[#9BA9CA] rounded-[60px] flex items-center justify-center gap-[10px] group hover:bg-[#9BA9CA]/10 transition-colors">
                <span className="font-sansation font-bold text-[16px] lg:text-[20px] tracking-[1.25px] uppercase text-[#454779] w-auto">
                  DISCOVER MORE
                </span>
                <div className="w-[54px] h-[44px] rounded-[96px] border-2 border-[#00B3DD] flex items-center justify-center">
                  <ArrowUpRight className="text-[#00B3DD] w-[20px] h-[20px]" strokeWidth={3} />
                </div>
              </button>

              {/* Filled Button */}
              <button className="w-full sm:w-[236px] h-[68px] bg-[#00B3DD] rounded-[60px] flex items-center justify-center gap-[10px] group hover:bg-[#009ac0] transition-colors">
                <span className="font-sansation font-bold text-[16px] lg:text-[20px] tracking-[1.25px] uppercase text-[#454779] w-auto">
                  BOOK NOW
                </span>
                <div className="w-[54px] h-[44px] rounded-[96px] border-2 border-[#A4D5F0] flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <ArrowUpRight className="text-[#A4D5F0] w-[20px] h-[20px]" strokeWidth={3} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AmenityItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start lg:items-center gap-[15px]">
      <div className="w-[8px] h-[8px] bg-[#00B3DD] rotate-45 shrink-0 mt-[10px] lg:mt-0" />
      <p className="font-sansation text-[16px] lg:text-[20px] leading-[30px] tracking-[0.5px] text-[#2A2D71]">
        {text}
      </p>
    </div>
  );
};

export default DiningAmenities;
