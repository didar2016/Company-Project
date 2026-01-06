import Link from 'next/link'
import Image from 'next/image'

export default function RoomCard({ room }){
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative h-60">
        <Image src={room.image} alt={room.title} layout="fill" objectFit="cover" />
        <div className="absolute top-3 left-3 bg-white/90 text-xs font-semibold text-accent px-3 py-1 rounded-full">20% OFF</div>
        <div className="absolute top-3 right-3 bg-white/80 text-sm font-medium text-brand px-3 py-1 rounded-full">{room.size || '65 sqm'}</div>
        <div className="absolute left-3 bottom-3 flex gap-2">
          <span className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-xs">Wi</span>
          <span className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-xs">AC</span>
          <span className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-xs">Rx</span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-brand font-heading">{room.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{room.short}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-accent">${room.price} <span className="text-sm font-normal">/ night</span></span>
          <Link href={`/rooms/${room.slug}`}><a className="inline-flex items-center px-4 py-2 border border-accent text-accent rounded-full text-sm hover:bg-accent hover:text-white transition">View details</a></Link>
        </div>
      </div>
    </article>
  )
}