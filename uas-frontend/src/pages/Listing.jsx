import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Bath, BedDouble, Square, BadgeCheck } from "lucide-react";

export default function Listing() {
  const [sort, setSort] = useState("newest");

  // Dummy Property Data with status
  const properties = [
    {
      id: 1,
      title: "Modern Villa in South Jakarta",
      price: 2500000000,
      img: "https://images.unsplash.com/photo-1560185127-6ed57f56fa24?q=80",
      location: "Kebayoran Baru, Jakarta Selatan",
      beds: 3,
      baths: 2,
      area: 250,
      status: "New",
    },
    {
      id: 2,
      title: "Spacious Apartment with City View",
      price: 25000000,
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80",
      location: "Sudirman, Jakarta Pusat",
      beds: 2,
      baths: 2,
      area: 120,
      status: "Sold",
    },
    {
      id: 3,
      title: "Family Home in Green Area",
      price: 4800000000,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      location: "Cilandak, Jakarta Selatan",
      beds: 3,
      baths: 3,
      area: 400,
      status: "New",
    },
    {
      id: 4,
      title: "Luxury House with Pool",
      price: 12000000000,
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80",
      location: "Pondok Indah, Jakarta Selatan",
      beds: 5,
      baths: 5,
      area: 600,
      status: "Rent",
    },
    {
      id: 5,
      title: "Cozy Studio Apartment",
      price: 8000000,
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80",
      location: "Kemang, Jakarta Selatan",
      beds: 1,
      baths: 1,
      area: 45,
      status: "Rent",
    },
    {
      id: 6,
      title: "Minimalist House in Cluster",
      price: 1800000000,
      img: "https://images.unsplash.com/photo-1600585154206-e3b9ae3d6f89?q=80",
      location: "Bintaro, Tangerang Selatan",
      beds: 3,
      baths: 2,
      area: 150,
      status: "New",
    },
  ];

  return (
    <div className="bg-white pb-20 pt-6">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR FILTER */}
        <aside className="md:col-span-1 bg-white border border-gray-200 rounded-xl p-6 h-fit shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Find Your Dream Property
          </h2>

          <div className="space-y-4">

            {/* LOCATION */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Location
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-slate-200"
                placeholder="Search by location"
              />
            </div>

            {/* MIN PRICE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Minimum Price
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Rp 0"
              />
            </div>

            {/* MAX PRICE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Maximum Price
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Rp 10.000.000.000"
              />
            </div>

            {/* PROPERTY TYPE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Property Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>

            {/* BEDROOMS */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Bedrooms
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            <button className="w-full py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* LISTING CONTENT */}
        <div className="md:col-span-3">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{properties.length}</span> of 150 properties
            </p>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-lg"
            >
              <option value="newest">Newest</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* GRID PROPERTIES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {properties.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative">
                  <img src={p.img} className="w-full h-48 object-cover" />

                  {/* BADGE STATUS */}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
                      ${p.status === "New" ? "bg-green-600 text-white" :
                        p.status === "Sold" ? "bg-orange-500 text-white" :
                        "bg-blue-600 text-white"}`}
                  >
                    {p.status}
                  </span>

                  {/* FAVORITE ICON */}
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow hover:bg-white transition">
                    <Heart size={18} className="text-slate-700" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.location}</p>

                  <p className="text-slate-900 font-bold mt-2">
                    Rp {p.price.toLocaleString("id-ID")}
                  </p>

                  <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1"><BedDouble size={16} /> {p.beds}</div>
                    <div className="flex items-center gap-1"><Bath size={16} /> {p.baths}</div>
                    <div className="flex items-center gap-1"><Square size={16} /> {p.area} m²</div>
                  </div>

                  <Link
                    to={`/property/${p.id}`}
                    className="w-full mt-4 block text-center py-2 border border-gray-300 rounded-lg text-slate-800 hover:bg-gray-50"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button className="px-4 py-2 border rounded-lg">1</button>
            <button className="px-4 py-2 border bg-slate-800 text-white rounded-lg">2</button>
            <button className="px-4 py-2 border rounded-lg">3</button>
            <button className="px-4 py-2 border rounded-lg">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
