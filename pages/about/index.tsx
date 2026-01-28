import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import heroimage from '../../public/images/aboutusheroimage.png';
import MapReview from '@/components/roomdetails/map_review';
import OurStory from '@/components/about/ourstory';
import DiningAmenities from '@/components/about/diningamenities';
import AboutDescription from '@/components/about/aboutDescription';

export default function About() {
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
          title="About us"
          description="A Smart Stay with Comfort & Style"
          component="about"
        />

        <AboutDescription />
        <DiningAmenities />
        <OurStory />
        <MapReview />
      </main>

      <Footer />
    </div>
  );
}
