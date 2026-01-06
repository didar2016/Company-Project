import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

const rooms = {
  studio: { title: 'Studio Apartment', price: 899, image: '/images/room-1.svg', desc: 'A compact studio with modern amenities and kitchenette.' },
  'one-bedroom': { title: 'One-bedroom Apartment', price: 1199, image: '/images/room-2.svg', desc: 'One-bedroom with separate living area and large windows.' }
}

export default function RoomDetail(){
  const { query } = useRouter()
  const room = rooms[query.slug]
  if (!room) return <p className="p-6">Room not found</p>
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden">
            <div className="relative h-80">
              <Image src={room.image} alt={room.title} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-heading text-brand">{room.title}</h1>
            <p className="mt-4 text-gray-700">{room.desc}</p>
            <div className="mt-6 flex items-center space-x-4">
              <span className="text-2xl font-bold text-accent">${room.price}</span>
              <a className="inline-block bg-accent text-white px-5 py-3 rounded-full">Book now</a>
            </div>
            <section className="mt-8 space-y-4">
              <h3 className="font-semibold">Amenities</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li>Free WiFi</li>
                <li>Breakfast</li>
                <li>Gym access</li>
                <li>Swimming pool</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}