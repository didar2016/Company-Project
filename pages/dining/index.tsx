import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import MasaTurkishEatery from '../../components/dining/MasaTurkishEatery';
import Footer from '../../components/Footer';
import Map from '@/components/roomdetails/map';
import WeekendOffer from '@/components/dining/WeekendOffer';

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
        <Hero component="dining" />
        <MasaTurkishEatery />
        <WeekendOffer />
        <Map />
      </main>

      <Footer />
    </div>
  );
}
