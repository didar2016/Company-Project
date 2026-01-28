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
      <div className="py-[100px]">
        <Facilities />
      </div>
      <WrapLocationSlider />
      <div className=" p-4 lg:px-[100px]">
        {' '}
        <MasaTurkishEatery />
      </div>

      <OurStory />

      <WrapMapReview />

      <HotelLocations />
    </>
  );
}

const WrapMapReview = () => (
  <div className="pt-[100px] bg-white">
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
  <div className=" bg-white">
    <div className="flex justify-center w-full px-4 lg:px-[100px] bg-[#9BA9CA33] pt-[100px]">
      <div className="flex flex-col xl:flex-row items-center gap-[100px] w-full max-w-[1720px]">
        <div className="flex flex-col items-start gap-2 w-full max-w-[1234px]">
          <h1 className="font-sansation font-light text-[32px] md:text-[56px] xl:text-[72px] leading-[1.2] xl:leading-[86px] uppercase text-[#454779]">
            Nearby Experiences
          </h1>
          <p className="font-sansation font-normal text-[16px] xl:text-[20px] leading-[30px] tracking-[0.5px] text-[#2A2D71]">
            Discover the best of Dubai with curated experiences just moments away from your
            doorstep.{' '}
          </p>
        </div>
      </div>
    </div>
    <div>
      <LocationSlider />
    </div>
  </div>
);
