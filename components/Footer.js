export default function Footer(){
  return (
    <footer className="bg-brand text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h3 className="font-heading text-2xl">MENA Hotels</h3>
            <p className="mt-2 text-sm opacity-90">© 2026 MENA Hotels & Resorts</p>
          </div>
          <div className="mt-6 md:mt-0">
            <a className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm" href="#">Book your stay</a>
          </div>
        </div>
      </div>
    </footer>
  )
}