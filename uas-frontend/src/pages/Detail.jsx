import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  // Dummy detail data (nanti bisa diganti API)
  const property = {
    id,
    title: "Modern House in South Jakarta",
    price: 5500000000,
    location: "Jakarta Selatan",
    beds: 4,
    baths: 3,
    area: 320,
    about:
      "Rumah modern ini dirancang untuk memberikan kenyamanan dan kemewahan. Terletak di kawasan premium Jakarta Selatan dengan akses mudah ke pusat perbelanjaan, sekolah internasional, dan area bisnis.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      "https://images.unsplash.com/photo-1560185008-5a7a594be0c3?q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6bbf0b9218?q=80",
      "https://images.unsplash.com/photo-1600566753531-2ae444ef8e4c?q=80",
    ],
  };

  const agent = {
    name: "Jane Doe",
    phone: "+62 812 3456 7890",
    email: "jane.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80",
  };

  const similarProperties = [
    {
      id: 2,
      title: "Classic Villa",
      price: 4200000000,
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80",
    },
    {
      id: 3,
      title: "Tropical Modern House",
      price: 3800000000,
      img: "https://images.unsplash.com/photo-1600585154206-e3b9ae3d6f89?q=80",
    },
    {
      id: 4,
      title: "Luxury Apartment",
      price: 2900000000,
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/listing" className="hover:underline">
          Property Listings
        </Link>{" "}
        / <span className="font-medium text-gray-700">{property.title}</span>
      </div>

      {/* HEADER + GALLERY */}
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Big main image */}
        <img
          src={property.images[0]}
          className="w-full h-80 object-cover rounded-xl md:col-span-2"
        />

        {/* Small thumbnails */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {property.images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-36 w-full object-cover rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* PRICE + DETAILS */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <p className="text-2xl font-bold text-blue-600">
            Rp {property.price.toLocaleString("id-ID")}
          </p>
          <p className="text-gray-600 mt-1">{property.location}</p>
        </div>

        <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add to Favorites
        </button>
      </div>

      {/* SPECS */}
      <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 text-center gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium">{property.beds}</p>
          <p className="text-gray-600 text-sm">Bedrooms</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium">{property.baths}</p>
          <p className="text-gray-600 text-sm">Bathrooms</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium">{property.area} m²</p>
          <p className="text-gray-600 text-sm">Area</p>
        </div>
      </div>

      {/* ABOUT PROPERTY */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">About this property</h2>
        <p className="text-gray-700 leading-relaxed">{property.about}</p>
      </div>

      {/* AGENT INFO */}
      <div className="mt-10 bg-white shadow rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={agent.avatar}
          className="w-24 h-24 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold">{agent.name}</h3>
          <p className="text-gray-600 mt-1">
            Agent properti berpengalaman lebih dari 5 tahun.
          </p>

          <div className="mt-3 text-gray-700">
            <p>📞 {agent.phone}</p>
            <p>✉️ {agent.email}</p>
          </div>
        </div>

        <Link
          to={`/chat/${agent.name}`}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Contact Agent
        </Link>
      </div>

      {/* SIMILAR PROPERTIES */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProperties.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded-xl hover:shadow-lg transition p-4"
            >
              <img
                src={p.img}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="font-semibold text-lg mt-3">{p.title}</h3>
              <p className="text-blue-600 font-bold mt-1">
                Rp {p.price.toLocaleString("id-ID")}
              </p>
              <Link
                to={`/property/${p.id}`}
                className="text-blue-600 text-sm hover:underline mt-2 inline-block"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
