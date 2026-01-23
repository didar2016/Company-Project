import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

import contactheroimage from '../../public/images/contactheroimage.png';

import ContactInfo from '@/components/contact/contactinfo';
import Map from '@/components/roomdetails/map';

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
          image={contactheroimage}
          title="contact us"
          description="A Smart Stay with Comfort & Style"
          component="contact"
        />

        <ContactInfo />
        <Map />
      </main>

      <Footer />
    </div>
  );
}
