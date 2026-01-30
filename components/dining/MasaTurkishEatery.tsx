import React from 'react';
import Image from 'next/image';
import visithotelicon from '../../public/images/visithotelicon.png';
import culinary from '../../public/images/lobby.jpg';
import restaurent from '../../public/images/restaurent.jpg';
import { useRouter } from 'next/router';

const MasaTurkishEatery: React.FC = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/dining');
  };

  return (
    <div className="w-full relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25 ">
      <div className="sm:p-6 md:p-[30px]  mx-auto max-w-[1720px] bg-[#EBEEF4] rounded-[20px] ">
        {/* Main Title */}
        <h2
          className="text-center font-sansation text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-[#454779] uppercase mb-4"
          style={{ fontWeight: 400 }}
        >
          A CULINARY JOURNEY AWAITS
        </h2>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[528px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image src={restaurent} alt="Culinary" fill className="object-fill object-center" />
          </div>

          {/* Content Section */}
          <div className="flex flex-col bg-white rounded-[20px] p-[20px] sm:p-[25px] md:p-[30px] w-full lg:w-1/2">
            {/* Restaurant Name */}
            <h3
              className="font-sansation text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] text-[#454779] leading-tight mb-4"
              style={{ fontWeight: 700 }}
            >
              Masa Turkish Eatery
            </h3>

            {/* Description */}
            <p
              className="mb-6 sm:mb-8 font-sansation text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#454779] leading-relaxed tracking-[0.5px]"
              style={{ fontWeight: 400 }}
            >
              Savor the rich flavors of Turkish cuisine and experience the warmth of Arabian
              hospitality at MENA ApartHotel Albarsha. Our dining options are designed to delight
              every palate, offering convenience and quality for an unforgettable gastronomic
              experience.
            </p>

            {/* Hours of Operation */}
            <div className="space-y-3 sm:space-y-4 mb-6">
              <h4
                className="font-sansation text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#454779] uppercase leading-tight"
                style={{ fontWeight: 300 }}
              >
                HOURS OF OPERATION
              </h4>

              {/* Time Slots */}
              <div className="flex flex-col sm:flex-row md:justify-between items-stretch sm:items-center gap-3 sm:gap-2">
                {/* Breakfast */}
                <div className="flex flex-col items-center space-y-2 bg-[#9BA9CA33] rounded-[20px] sm:rounded-[28px] p-[10px] flex-1">
                  <div
                    className="text-center font-sansation text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#2A2D71] uppercase leading-tight"
                    style={{ fontWeight: 700 }}
                  >
                    BREAKFAST
                  </div>
                  <div className="bg-[#00B3DD] text-white px-[15px] py-[4px] text-center rounded-full min-h-[32px] sm:min-h-[38px] flex items-center justify-center w-full max-w-[222px]">
                    <span
                      className="font-sansation text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-tight"
                      style={{ fontWeight: 400 }}
                    >
                      7:00 AM – 11:00 AM
                    </span>
                  </div>
                </div>

                {/* Lunch */}
                <div className="flex flex-col items-center space-y-2 bg-[#9BA9CA33] rounded-[20px] sm:rounded-[28px] p-[10px] flex-1">
                  <div
                    className="text-center font-sansation text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#2A2D71] uppercase leading-tight"
                    style={{ fontWeight: 700 }}
                  >
                    LUNCH
                  </div>
                  <div className="bg-[#00B3DD] text-white px-[15px] py-[4px] text-center rounded-full min-h-[32px] sm:min-h-[38px] flex items-center justify-center w-full max-w-[222px]">
                    <span
                      className="font-sansation text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-tight"
                      style={{ fontWeight: 400 }}
                    >
                      12:00 PM – 3:00 PM
                    </span>
                  </div>
                </div>

                {/* Dinner */}
                <div className="flex flex-col items-center space-y-2 bg-[#9BA9CA33] rounded-[20px] sm:rounded-[28px] p-[10px] flex-1">
                  <div
                    className="text-center font-sansation text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#2A2D71] uppercase leading-tight"
                    style={{ fontWeight: 700 }}
                  >
                    DINNER
                  </div>
                  <div className="bg-[#00B3DD] text-white px-[15px] py-[4px] text-center rounded-full min-h-[32px] sm:min-h-[38px] flex items-center justify-center w-full max-w-[222px]">
                    <span
                      className="font-sansation text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[16px] leading-tight"
                      style={{ fontWeight: 400 }}
                    >
                      7:00 AM – 11:00 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-4 justify-between">
              {/* Explore Menu Button */}
              <button
                onClick={handleNavigate}
                className="flex flex-row max-w-[250px] justify-between items-center border-2 border-[#9BA9CA] gap-2 bg-white opacity-100 rounded-3xl sm:rounded-4xl px-3 py-1 flex-1 hover:bg-gray-50 transition-colors"
              >
                <span
                  className="p-2 sm:p-2.5 md:p-3 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase text-[#454779]"
                  style={{ fontWeight: 700 }}
                >
                  EXPLORE MENU
                </span>
                <Image
                  src={visithotelicon}
                  alt="Visit Hotel Icon"
                  className="object-contain h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px]"
                />
              </button>

              {/* Book Now Button */}
              {/* <button className="flex flex-row max-w-[250px] justify-between items-center gap-2 bg-[#00B3DD] opacity-100 rounded-3xl sm:rounded-4xl px-3 py-1 flex-1 hover:bg-[#009ec7] transition-colors">
                <span
                  className="p-2 sm:p-2.5 md:p-3 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] uppercase text-white leading-tight tracking-[1.25px]"
                  style={{ fontWeight: 700 }}
                >
                  BOOK NOW
                </span>
                <Image
                  src={visithotelicon}
                  alt="Visit Hotel Icon"
                  className="object-contain h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] filter brightness-0 invert"
                />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasaTurkishEatery;
