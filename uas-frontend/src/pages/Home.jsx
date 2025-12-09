import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text + Search */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Temukan Properti Impian Anda
          </h1>

          {/* SEARCH BAR */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-3 md:gap-0 p-4 md:p-2 w-full max-w-2xl">
            <input
              type="text"
              placeholder="Cari properti..."
              className="px-4 py-2 border md:border-none rounded-md md:rounded-none text-black flex-1"
            />

            <select className="px-4 py-2 border rounded-md md:rounded-none text-black">
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* FEATURED PROPERTIES */}
      <div className="max-w-7xl mx-auto mt-16 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={`https://source.unsplash.com/random/800x60${i}?house`}
                alt="Property"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold">Modern House #{i}</h3>
              <p className="text-gray-600 text-sm mt-1">Jakarta, Indonesia</p>
              <p className="text-blue-600 font-bold mt-2">
                Rp {(i * 500000000).toLocaleString("id-ID")}
              </p>

              <Link
                to={`/property/${i}`}
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* BROWSE BY CATEGORY */}
      <div className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rumah */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">Rumah</h3>
            </div>
          </div>

          {/* Apartemen */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">Apartemen</h3>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        <div>
          <h3 className="text-3xl font-bold">10,000+</h3>
          <p className="text-gray-600">Properti Tersedia</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">5,000+</h3>
          <p className="text-gray-600">Agent Profesional</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-600">Kategori Properti</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-lg">PropertiKu</h3>
            <p className="text-gray-400 text-sm">
              Platform terpercaya untuk menemukan properti impian Anda.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/listing">Listing</Link></li>
              <li><Link to="/favorite">Favorite</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Rumah</li>
              <li>Apartemen</li>
              <li>Agent</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
