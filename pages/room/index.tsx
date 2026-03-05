import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import RoomSlider from '../../components/RoomSlider';
import HotelLocations from '../../components/HotelLocations';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>MENA | Agent Hotel Alliance</title>
        <meta name="description" content="Official website of MENA Agent Hotel Alliance" />
      </Head>

      <Navbar />

      <main className="flex-grow w-full overflow-hidden ">
        <Hero component="room" />

        <div className="bg-white relative py-6 sm:py-8 md:py-12 lg:py-25 xl:py-25 overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-25 xl:px-25">
          <RoomSlider />
        </div>
        <HotelLocations />
      </main>

      <Footer />
    </div>
  );
}
