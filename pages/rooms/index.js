import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RoomCard from '../../components/RoomCard'

const rooms = [
  { slug: 'studio', title: 'Studio Apartment', price: 899, short: 'Cozy studio with kitchen', image: '/images/room-1.svg' },
  { slug: 'one-bedroom', title: 'One-bedroom Apartment', price: 1199, short: 'Spacious 1BR with living area', image: '/images/room-2.svg' }
]

export default function Rooms(){
  return (
    <div>
      <Header />

      <div className="relative">
        <div className="h-56 md:h-80 lg:h-96 bg-cover bg-center rounded-b-3xl" style={{ backgroundImage: "url('/images/room-1.svg')" }}>
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white drop-shadow">ROOMS</h1>
              <p className="mt-2 text-white/90">Comfortable apartments for short and long stays.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-heading text-brand">Choose your stay</h2>
        <p className="mt-4 text-gray-600">Select from our range of apartments.</p>

        <section className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map(r => (
            <RoomCard key={r.slug} room={r} />
          ))}
        </section>

        <section className="mt-14">
          <h3 className="text-2xl font-heading text-brand">The Hotels</h3>
          <p className="mt-2 text-gray-600">Our properties and locations</p>
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <HotelCard hotel={{ title: 'MENA Hotel Tabuk', address: 'Street 12 - Al Barsha - Dubai', image: '/images/room-1.svg' }} />
            <HotelCard hotel={{ title: 'MENA Andalusia Riyadh', address: 'Street 13 - Al Barsha - Dubai', image: '/images/room-2.svg' }} />
            <HotelCard hotel={{ title: 'MENA Jubail', address: 'Street 13 - Al Barsha - Dubai', image: '/images/room-1.svg' }} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}