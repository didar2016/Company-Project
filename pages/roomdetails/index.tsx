import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import RoomDetails from '../../components/roomdetails/roomdetails';
import HotelFeatures from '../../components/roomdetails/HotelFeatures';
import Footer from '../../components/Footer';
import Hero from '@/components/Hero';
import MapReview from '@/components/roomdetails/map_review';
import RelatedRooms from '@/components/roomdetails/relatedRooms';
import { useRooms } from '../../contexts/WebsiteContext';

export default function RoomDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const rooms = useRooms();

  // Find the room with the matching ID
  // We need to handle the case where rooms might not be loaded yet or ID is undefined
  const room = React.useMemo(() => {
    if (!id || !rooms.length) return null;
    return rooms.find((r: any) => r._id === id);
  }, [id, rooms]);

  const [singleroomName, setSingleroomName] = React.useState('');
  const [singleroomDescription, setSingleroomDescription] = React.useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-body">
      <Head>
        <title>MENA | {room?.name || 'Room Details'}</title>
        <meta name="description" content={`${room?.name || 'Room'} - MENA Agent Hotel Alliance`} />
      </Head>
      <Navbar />

      <main className="flex-grow w-full overflow-hidden">
        <Hero
          component="roomdetails"
          singleroomName={singleroomName}
          singleroomDescription={singleroomDescription}
        />
        <RoomDetails
          room={room}
          setSingleroomDescription={setSingleroomDescription}
          setSingleroomName={setSingleroomName}
        />
        <HotelFeatures room={room} />
        <MapReview />
        <RelatedRooms />
      </main>

      <Footer />
    </div>
  );
}
