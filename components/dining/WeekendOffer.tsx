import React from 'react';
import Image from 'next/image';
import visithotelicon from '../../public/images/visithotelicon.png';
import patatop from '../../public/images/pata_top.png';
import offertop from '../../public/images/offer_top.png';
import chef from '../../public/images/chef.png';
import chiken from '../../public/images/chiken.png';

const WeekendOffer: React.FC = () => {
  return (
    <div className="relative w-full bg-[#A4D5F0] py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
      <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[356px] h-auto z-0">
        <Image src={patatop} alt="Decorative Top" className="w-full h-auto object-contain" />
      </div>

      {/* <div className="hidden lg:block absolute bottom-0 right-0 w-[400px] lg:w-[550px] xl:w-[778px] h-auto z-0">
        <Image src={chef} alt="Decorative Chef" className="w-full h-auto object-contain" />
      </div> */}

      <div className="absolute top-2 sm:top-4 right-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[733px] z-0">
        <Image src={offertop} alt="Decorative Top" className="w-full h-auto object-contain" />
      </div>
      <div className="max-w-[1720px] space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20 mx-auto">
        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center">
          <div className="py-[15px] px-[30px] sm:py-[20px] sm:px-[40px] md:py-[25px] md:px-[50px] lg:py-[30px] lg:px-[60px] backdrop-blur-[9px] bg-[#EDF7FC33] rounded-[20px]">
            <div
              className="font-sansation text-[48px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[126px] leading-[80%] text-[#00B3DD] opacity-40 uppercase"
              style={{ fontWeight: 400 }}
            >
              WEEK
              <br />
              END
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h1
              className="font-sansation text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight text-[#454779]"
              style={{ fontWeight: 300 }}
            >
              Limited Time:{' '}
              <span
                className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight font-bold"
                style={{ fontWeight: 700 }}
              >
                20% Off
              </span>{' '}
              Weekend Lunch
            </h1>
            <h2
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-relaxed font-light text-[#8A8BB3] tracking-[0.75px] mt-2 sm:mt-3 md:mt-4"
              style={{ fontWeight: 300 }}
            >
              Savor exquisite flavors crafted by our master chefs in an ambiance of pure elegance.
              Indulge in a culinary journey that delights your senses with every bite!
            </h2>
          </div>
        </div>

        <div className="text-center sm:text-left max-w-[1142px]">
          <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-relaxed font-light text-[#8A8BB3] tracking-[0.75px]">
            <h2
              className="font-sansation text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-tight text-[#454779] mb-3 sm:mb-4 md:mb-5"
              style={{ fontWeight: 600 }}
            >
              A Taste of Turkey
            </h2>
            <p
              className="font-sansation text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-relaxed text-[#8A8BB3] tracking-[0.75px]"
              style={{ fontWeight: 300 }}
            >
              Discover the rich flavors of Turkish cuisine at Masa Turkish Eatery, open from 7:00 AM
              – 11:30 PM. From hearty breakfasts to authentic dinners, our family-friendly
              restaurant offers a dining experience that's both convenient and delicious. For added
              privacy, take advantage of our in-room dining service.
            </p>
          </div>
        </div>

        <div className="max-w-[1142px] bg-gradient-to-r from-white/32 to-white/0 p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
          <div className="border-[#A4D5F0] border-l-[3px] sm:border-l-[4px] h-auto min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[116px]">
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-sansation font-heading text-[#2A2D71] mb-2 sm:mb-3 ml-3 sm:ml-4 md:ml-5 lg:ml-[20px]">
              Offer expires soon!
            </h4>
            <div className="bg-[#00B3DD] text-white px-[15px] py-[6px] sm:py-[8px] text-center rounded-full min-h-[32px] sm:min-h-[38px] flex items-center justify-center w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[222px] ml-3 sm:ml-4 md:ml-5 lg:ml-[20px]">
              <span
                className="font-sansation text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[20px] leading-tight"
                style={{ fontWeight: 400 }}
              >
                7:00 AM – 11:00 AM
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 md:mt-6">
            <Image
              src={chiken}
              alt="Delicious Chicken Dish"
              className="w-full h-auto rounded-[15px] sm:rounded-[20px]"
            />
          </div>
          <div className="flex justify-center sm:justify-end mt-6 sm:mt-7 md:mt-8 lg:mt-9">
            <button className="flex flex-row justify-between items-center gap-2 sm:gap-2.5 bg-[#00B3DD] hover:bg-[#009ec7] opacity-100 rounded-[60px] px-3 sm:px-4 py-1 transition-colors">
              <span
                className="p-2 sm:p-2.5 md:p-3 lg:p-3.5 font-sansation text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase text-white"
                style={{ fontWeight: 700 }}
              >
                Book & Direct Save
              </span>
              <Image
                src={visithotelicon}
                alt="Visit Hotel Icon"
                className="object-contain h-[24px] w-[28px] sm:h-[30px] sm:w-[36px] md:h-[36px] md:w-[42px] lg:h-[40px] lg:w-[48px] filter brightness-0 invert"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekendOffer;
