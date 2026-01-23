import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import MasaTurkishEatery from '../../components/dining/MasaTurkishEatery';
import WeekendOffer from '../../components/dining/WeekendOffer';
import Footer from '../../components/Footer';
import MapReview from '@/components/roomdetails/map_review';
import Diningheroimage from '../../public/images/diningheroimage.png';

export default function Dining() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>Dining | MENA Agent Hotel Alliance</title>
        <meta
          name="description"
          content="Experience exceptional dining at MENA ApartHotel - Turkish cuisine and exclusive weekend offers"
        />
      </Head>

      <Navbar />

      <main className="flex-grow w-full overflow-hidden">
        <Hero
          image={Diningheroimage}
          title="Dining Experiences"
          description="From casual cafés to fine dining, discover a world of flavors crafted by our talented culinary team."
          component="dining"
        />

        <MasaTurkishEatery />
        <WeekendOffer />
        <MapReview />
      </main>

      <Footer />
    </div>
  );
}
