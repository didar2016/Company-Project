import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HotelLocations from '../components/HotelLocations';
import Footer from '../components/Footer';
import menaheroimage from '../public/images/menaapartheroimage.png';
import Description from '@/components/about/description';
import RelatedRooms from '@/components/roomdetails/relatedRooms';
import WeekendOffer from '@/components/dining/WeekendOffer';
import Facilities from '@/components/amenities/Facilities';
import OurStory from '@/components/about/ourstory';
import MasaTurkishEatery from '@/components/dining/MasaTurkishEatery';
import MapReview from '@/components/roomdetails/map_review';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>MENA | Agent Hotel Alliance</title>
        <meta name="description" content="Official website of MENA Agent Hotel Alliance" />
      </Head>

      <Navbar />

      <main className="flex-grow w-full overflow-hidden">
        <Hero
          image={menaheroimage}
          title="MENA Agent Hotel Alliance"
          description=""
          component="index"
        />
        <Description />
        <RelatedRooms />
        <WeekendOffer />
        <div className="py-[100px]">
          <Facilities />
        </div>
        <MasaTurkishEatery />

        <OurStory />

        <MapReview />

        <HotelLocations />
      </main>

      <Footer />
    </div>
  );
}
