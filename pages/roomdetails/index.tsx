import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import RoomDetails from '../../components/roomdetails/roomdetails';
import HotelFeatures from '../../components/roomdetails/HotelFeatures';
import Footer from '../../components/Footer';
import Hero from '@/components/Hero';
import MapReview from '@/components/roomdetails/map_review';
import RelatedRooms from '@/components/roomdetails/relatedRooms';
import heroimage from '../../public/images/singleroomheroimage.png';

export default function RoomDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>MENA | Room Details</title>
        <meta name="description" content="Studio Apartment - MENA Agent Hotel Alliance" />
      </Head>
      <Navbar />

      <main className="flex-grow w-full overflow-hidden">
        <Hero
          image={heroimage}
          title="studio apartment"
          description="A Smart Stay with Comfort & Style"
          component="singleroom"
        />
        <RoomDetails />
        <HotelFeatures />
        <MapReview />
        <RelatedRooms />
      </main>

      <Footer />
    </div>
  );
}
