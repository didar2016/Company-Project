import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Locations from '@/components/location/location';
import MapReview from '@/components/roomdetails/map_review';
import heroimage from '../../public/images/locationheroimage.png';
import Hotels from '@/components/hotels';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>MENA | Agent Hotel Alliance</title>
        <meta name="description" content="Official website of MENA Agent Hotel Alliance" />
      </Head>

      <Navbar />

      <main className="flex-grow w-full overflow-hidden ">
        <Hero
          image={heroimage}
          title="Locations"
          description="A Smart Stay with Comfort & Style"
          component="location"
        />
        <Hotels />
        <div className="mt-32 md:mt-0">
          <Locations />
        </div>
        <MapReview />
      </main>

      <Footer />
    </div>
  );
}
