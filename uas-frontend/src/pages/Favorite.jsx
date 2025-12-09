import { Link } from "react-router-dom";
import { useState } from "react";

export default function Favorite() {
  // Dummy favorited properties (diganti API nanti)
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Modern Home in South Jakarta",
      price: 2500000000,
      location: "Jakarta Selatan",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
    },
    {
      id: 2,
      title: "Luxury Apartment at SCBD",
      price: 3500000000,
      location: "SCBD Jakarta",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80",
    },
  ]);

  // Remove from favorite
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Properties</h1>

      {/* IF FAVORITE EMPTY */}
      {favorites.length === 0 && (
        <div className="text-center text-gray-600 mt-20">
          <p className="text-xl mb-4">No favorites yet 😢</p>
          <Link
            to="/listing"
            className="text-blue-600 hover:underline text-lg"
          >
            Browse properties →
          </Link>
        </div>
      )}

      {/* FAVORITE LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition p-4"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div className="mt-3">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-500 text-sm">{p.location}</p>

              <p className="text-blue-600 font-bold mt-2">
                Rp {p.price.toLocaleString("id-ID")}
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between mt-4">
                <Link
                  to={`/property/${p.id}`}
                  className="text-blue-600 text-sm hover:underline"
                >
                  View Details →
                </Link>

                <button
                  onClick={() => removeFavorite(p.id)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Remove ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
