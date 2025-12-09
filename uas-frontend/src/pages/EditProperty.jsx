import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function EditProperty() {
  const { id } = useParams();

  // Dummy existing data (nanti bisa diganti call API)
  const propertyFromServer = {
    title: "Modern House in South Jakarta",
    location: "Jakarta Selatan",
    price: 2500000000,
    type: "Rumah",
    beds: 3,
    baths: 2,
    area: 220,
    description:
      "Rumah modern minimalis dengan 3 kamar tidur dan lokasi strategis.",
    image: null,
  };

  const [form, setForm] = useState(propertyFromServer);

  // Update form on change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  // Submit update
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UPDATED PROPERTY:", form);
    alert("Property berhasil diperbarui!");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Edit Property</h1>
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block font-medium mb-2">Change Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg bg-gray-50"
            />
          </div>

          {/* TITLE */}
          <div>
            <label className="block font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* LOCATION & PRICE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Price (Rp)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>
          </div>

          {/* TYPE & SPECS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium mb-2">Property Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option>Rumah</option>
                <option>Apartemen</option>
                <option>Villa</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">Bedrooms</label>
              <input
                type="number"
                name="beds"
                value={form.beds}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Bathrooms</label>
              <input
                type="number"
                name="baths"
                value={form.baths}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              />
            </div>
          </div>

          {/* AREA */}
          <div>
            <label className="block font-medium mb-2">Area (m²)</label>
            <input
              type="number"
              name="area"
              value={form.area}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg h-32"
              required
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Update Property
            </button>

            <Link
              to="/dashboard"
              className="px-6 py-3 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
