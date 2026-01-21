import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import RoomSlider from '../../components/RoomSlider';
import HotelLocations from '../../components/HotelLocations';
import Footer from '../../components/Footer';
import Locations from '@/components/location/location';
import MapReview from '@/components/roomdetails/map_review';
import Amenities from '@/components/amenities/Amenities';
import heroimage from '../../public/images/locationheroimage.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>MENA | Agent Hotel Alliance</title>
        <meta name="description" content="Official website of MENA Agent Hotel Alliance" />
      </Head>

      <Navbar />

      <main className="flex-grow w-full overflow-hidden ">
        <Hero image={heroimage} />

        <div className="mt-32 md:mt-0">
          <Locations />
        </div>
        <MapReview />
        <HotelLocations />
      </main>

      <Footer />
    </div>
  );
}
