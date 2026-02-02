import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Amenities from '@/components/amenities/Amenities';
import Facilities from '@/components/amenities/Facilities';
import heroimage from '../../public/images/amenitiesheroimage.png';
import MapReview from '@/components/roomdetails/map_review';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col mx-auto">
      <Head>
        <title>MENA | Agent Hotel Alliance</title>
        <meta name="description" content="Official website of MENA Agent Hotel Alliance" />
      </Head>

      <Navbar />

      <main className="w-full overflow-hidden ">
        <Hero
          image={heroimage}
          title="EXPLORE OUR FACILITIES"
          description="Designed to cater to every aspect of your stay, from relaxation to productivity, our
        facilities ensure a memorable and comfortable experience"
          component="facilities"
        />
        <Facilities />
        <Amenities />

        <MapReview />
      </main>

      <Footer />
    </div>
  );
}
