import { useState } from "react";
import { Link } from "react-router-dom";

export default function Listing() {
  const [sort, setSort] = useState("newest");

  // Dummy Property Data
  const properties = [
    {
      id: 1,
      title: "Modern Home in South Jakarta",
      price: 2500000000,
      img: "https://images.unsplash.com/photo-1560185127-6ed57f56fa24?q=80",
      location: "Jakarta Selatan",
      beds: 3,
      baths: 2,
      area: 220,
    },
    {
      id: 2,
      title: "Spacious Apartment at SCBD",
      price: 3500000000,
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80",
      location: "SCBD Jakarta",
      beds: 2,
      baths: 1,
      area: 150,
    },
    {
      id: 3,
      title: "Family Home in Green Area",
      price: 1800000000,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      location: "Depok",
      beds: 4,
      baths: 3,
      area: 300,
    },
    {
      id: 4,
      title: "Cozy Studio Apartment",
      price: 900000000,
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80",
      location: "Bandung",
      beds: 1,
      baths: 1,
      area: 45,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      
      {/* SIDEBAR FILTER */}
      <aside className="md:col-span-1 bg-white shadow rounded-xl p-6 h-fit">
        <h2 className="text-xl font-bold mb-4">Find Your Dream Property</h2>

        <div className="space-y-4">
          {/* LOCATION */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Search by location"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* MIN PRICE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Minimum Price
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              placeholder="Rp 500.000.000"
            />
          </div>

          {/* MAX PRICE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Maximum Price
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              placeholder="Rp 5.000.000.000"
            />
          </div>

          {/* PROPERTY TYPE */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Property Type
            </label>
            <select className="w-full p-2 border rounded-md">
              <option>Rumah</option>
              <option>Apartemen</option>
              <option>Villa</option>
            </select>
          </div>

          {/* BEDROOMS */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Bedrooms
            </label>
            <select className="w-full p-2 border rounded-md">
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </aside>

      {/* LISTING CONTENT */}
      <div className="md:col-span-3">
        {/* HEADER AREA */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold">{properties.length}</span>{" "}
            properties
          </p>

          {/* SORTING */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="newest">Newest</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>

        {/* GRID LISTINGS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.location}</p>

                <p className="text-blue-600 font-bold mt-2">
                  Rp {p.price.toLocaleString("id-ID")}
                </p>

                <div className="flex justify-between text-gray-500 text-sm mt-2">
                  <span>{p.beds} Beds</span>
                  <span>{p.baths} Baths</span>
                  <span>{p.area} m²</span>
                </div>

                <Link
                  to={`/property/${p.id}`}
                  className="mt-3 inline-block text-sm text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center space-x-3 mt-10">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded bg-blue-600 text-white">
            2
          </button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">Next →</button>
        </div>
      </div>
    </div>
  );
}
