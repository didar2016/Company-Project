import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '@/components/homepage';
import { useWebsite } from '@/hooks/useWebsite';
import { ALLDATA } from '@/contexts/titles';

export default function Home() {
  const { websiteData, loading } = useWebsite();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>{ALLDATA.meta?.title || 'MENA | Agent Hotel Alliance'}</title>
        <meta
          name="description"
          content={ALLDATA.meta?.description || 'Official website of MENA Agent Hotel Alliance'}
        />
      </Head>

      <Navbar />

      <main className="flex-grow w-full overflow-hidden">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}
