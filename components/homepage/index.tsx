import React from 'react';
import Hero from '../Hero';
import HotelLocations from '../HotelLocations';
import menaheroimage from '../../public/images/menaapartheroimage.png';
import Description from '@/components/about/description';
import RelatedRooms from '@/components/roomdetails/relatedRooms';
import WeekendOffer from '@/components/dining/WeekendOffer';
import Facilities from '@/components/amenities/Facilities';
import OurStory from '@/components/about/ourstory';
import MasaTurkishEatery from '@/components/dining/MasaTurkishEatery';
import MapReview from '@/components/roomdetails/map_review';
import LocationSlider from '../location/locationSlider';

export default function HomePage() {
  return (
    <>
      <Hero
        image={menaheroimage}
        title="Welcome to MENA ApartHotel Albarsha"
        description=""
        component="index"
      />
      <Description />
      <RelatedRooms />
      <WeekendOffer />
      <Facilities />
      <WrapLocationSlider />
      <MasaTurkishEatery />
      <OurStory />
      <WrapMapReview />
      <HotelLocations />
    </>
  );
}

const WrapMapReview = () => (
  <div className=" pt-[40px] lg:pt-[100px] bg-white">
    <div className="flex justify-center w-full px-4 lg:px-[100px]">
      <div className="flex flex-col xl:flex-row items-center gap-[100px] w-full max-w-[1720px]">
        <div className="flex flex-col items-start gap-2 w-full max-w-[1234px]">
          <h1 className="font-sansation font-light text-[32px] md:text-[56px] xl:text-[72px] leading-[1.2] xl:leading-[86px] uppercase text-[#454779]">
            WHAT GUESTS ARE SAYING
          </h1>
          <p className="font-sansation font-normal text-[16px] xl:text-[20px] leading-[30px] tracking-[0.5px] text-[#2A2D71]">
            Discover our ideal location in the vibrant heart of the city and hear what our esteemed
            guests have to say about their stays.
          </p>
        </div>
      </div>
    </div>
    <div>
      <MapReview />
    </div>
  </div>
);

const WrapLocationSlider = () => (
  <div className="bg-[#9BA9CA33] py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
    <div className="flex justify-center w-full ">
      <div className="flex flex-col xl:flex-row items-center gap-[100px] w-full max-w-[1720px]">
        <div className="flex flex-col items-start gap-2 w-full max-w-[1234px]">
          <h1 className="font-['Sansation'] font-light text-4xl md:text-[72px] uppercase text-[#454779] leading-tight">
            Nearby Experiences
          </h1>
          <p className="font-['Poppins'] text-[#8A8BB3] text-lg md:text-xl max-w-4xl">
            Discover the best of Dubai with curated experiences just moments away from your
            doorstep.{' '}
          </p>
        </div>
      </div>
    </div>
    <div className="mt-10 sm:mt-12">
      <LocationSlider />
    </div>
  </div>
);
