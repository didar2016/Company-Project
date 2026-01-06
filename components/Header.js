import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-brand">MENA Hotels</a>
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="/rooms"><a className="text-sm text-gray-600 hover:text-brand">Rooms</a></Link>
          <Link href="/about"><a className="text-sm text-gray-600 hover:text-brand">About</a></Link>
          <Link href="/contact"><a className="text-sm text-gray-600 hover:text-brand">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}