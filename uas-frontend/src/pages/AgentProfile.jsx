import { Link, useParams } from "react-router-dom";

export default function AgentProfile() {
  const { id } = useParams();

  // Dummy agent data
  const agent = {
    id,
    name: "Jane Doe",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80",
    about:
      "Saya adalah agen properti berpengalaman lebih dari 6 tahun, fokus pada properti premium di wilayah Jakarta Selatan. Selalu mengutamakan kenyamanan dan kepuasan klien.",
    phone: "+62 812 3456 7890",
    email: "jane.doe@example.com",
    listings: [
      {
        id: 1,
        title: "Modern House in South Jakarta",
        price: 2500000000,
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
        location: "Jakarta Selatan",
      },
      {
        id: 2,
        title: "Luxury Apartment at SCBD",
        price: 3500000000,
        img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80",
        location: "SCBD Jakarta",
      },
      {
        id: 3,
        title: "Family House with Garden",
        price: 1800000000,
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80",
        location: "Depok",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* BACK LINK */}
      <div className="mb-6">
        <Link to="/listing" className="text-blue-600 hover:underline">
          ← Back to Listings
        </Link>
      </div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Agent Photo */}
        <img
          src={agent.image}
          className="w-40 h-40 object-cover rounded-full shadow-lg"
        />

        {/* Agent Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{agent.name}</h1>
          <p className="text-gray-600 mt-2">{agent.about}</p>

          <div className="mt-4 space-y-1 text-gray-700">
            <p>📞 {agent.phone}</p>
            <p>✉️ {agent.email}</p>
          </div>

          <Link
            to={`/chat/${agent.id}`}
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Chat with Agent
          </Link>
        </div>
      </div>

      {/* AGENT LISTINGS */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">Properties by {agent.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agent.listings.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded-xl hover:shadow-lg transition p-4"
            >
              <img
                src={p.img}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="font-semibold text-lg mt-3">{p.title}</h3>
              <p className="text-gray-500">{p.location}</p>

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
