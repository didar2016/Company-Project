import React from 'react';
import Head from 'next/head';
import { useWebsite } from '@/hooks/useWebsite';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import MapReview from '@/components/roomdetails/map_review';
import MeetingComponent from '@/components/meeting/Meeting';
import { useMeeting } from '@/contexts/WebsiteContext';

export default function Meeting() {
  const { websiteData, loading: websiteLoading } = useWebsite();

  const meeting = useMeeting();

  if (websiteLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (meeting?.available == false) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col mx-auto">
      <Head>
        <title>{websiteData?.website?.name || 'MENA'}</title>
        <meta name="description" content="Official website of MENA Agent Hotel Alliance" />
      </Head>

      <Navbar />

      <main className="w-full overflow-hidden ">
        <Hero component="meeting" />

        <MeetingComponent meeting={meeting} />
        <MapReview />
      </main>

      <Footer />
    </div>
  );
}
