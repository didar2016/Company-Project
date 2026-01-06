import Link from 'next/link'
import Image from 'next/image'

export default function HotelCard({ hotel }){
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="relative h-44">
        <Image src={hotel.image} alt={hotel.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-brand">{hotel.title}</h4>
        <p className="text-sm text-gray-600 mt-2">{hotel.address}</p>
        <div className="mt-4">
          <a className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm">Visit hotel</a>
        </div>
      </div>
    </article>
  )
}