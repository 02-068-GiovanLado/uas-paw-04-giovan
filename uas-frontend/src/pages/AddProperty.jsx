import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { addProperty } from "../services/api"; // uncomment jika API sudah siap

export default function AddProperty() {
  const navigate = useNavigate();

  // State form
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    type: "Jual (For Sale)",
    beds: "",
    baths: "",
    area: "",
    description: "",
    image: null,
  });

  // Handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    // Logika API nanti di sini
  };

  // Style helper
  const inputClass =
    "w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none placeholder-gray-400 text-gray-700 bg-white";
  const labelClass = "block font-bold text-gray-800 mb-2 text-sm";

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col hidden md:flex">
        <div className="p-6">
           {/* Logo placeholder */}
           <div className="flex items-center gap-2 mb-8">
             <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
             <span className="font-bold text-lg">Realty</span>
           </div>
           {/* User Profile */}
           <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">John Appleseed</h3>
              <p className="text-xs text-gray-500">Realty Inc.</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {/* Dashboard */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium bg-blue-50 text-blue-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            Dashboard
          </div>
           <div className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-500 hover:text-gray-900">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4h4v4"/></svg>
            My Properties
          </div>
           <div className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-500 hover:text-gray-900">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Settings
          </div>
        </nav>

        <div className="p-4 space-y-1 mb-6">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-500 hover:text-gray-900">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            Help
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-500 hover:text-gray-900">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Logout
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10">
          Add New Property
        </h1>

        <form onSubmit={handleSubmit}>
          {/* === SECTION 1: BASIC INFORMATION === */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
              Basic Information
            </h2>
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className={labelClass}>Property Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Modern Villa with Ocean View"
                  className={inputClass}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className={labelClass}>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter a detailed description of the property..."
                  className={`${inputClass} h-32 resize-none`}
                  required
                />
              </div>
            </div>
          </div>

          {/* === SECTION 2: PROPERTY DETAILS === */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
              Property Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Type */}
              <div>
                <label className={labelClass}>Type</label>
                <div className="relative">
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option>Jual (For Sale)</option>
                    <option>Sewa (For Rent)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div>
                <label className={labelClass}>Price (IDR)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. 2000000000"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Location */}
              <div>
                <label className={labelClass}>Location</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Jakarta, Indonesia"
                  className={inputClass}
                  required
                />
              </div>
              {/* Bedrooms */}
              <div>
                <label className={labelClass}>Bedrooms</label>
                <input
                  type="number"
                  name="beds"
                  value={form.beds}
                  onChange={handleChange}
                  placeholder="3"
                  className={inputClass}
                  required
                />
              </div>
              {/* Bathrooms */}
              <div>
                <label className={labelClass}>Bathrooms</label>
                <input
                  type="number"
                  name="baths"
                  value={form.baths}
                  onChange={handleChange}
                  placeholder="2"
                  className={inputClass}
                  required
                />
              </div>
               {/* Area */}
               <div>
                <label className={labelClass}>Area (m²)</label>
                <input
                  type="number"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="250"
                  className={inputClass}
                  required
                />
              </div>
            </div>
          </div>

          {/* === SECTION 3: PHOTOS === */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
              Photos
            </h2>

            {/* Drag and Drop Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center flex flex-col items-center justify-center text-gray-500 mb-8 bg-gray-50 cursor-pointer hover:bg-gray-100 transition relative">
               {/* Input file yang sebenarnya tersembunyi di sini */}
               <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  // required // Uncomment jika wajib ada foto
                />
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-gray-400">
                <path d="M12 16.5V7.5M12 7.5L8 11.5M12 7.5L16 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 16.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="2"/>
               </svg>

              <p className="font-medium text-gray-700"><span className="text-blue-600 font-bold">Click to upload</span> or drag and drop</p>
              <p className="text-xs mt-2 text-gray-400">SVG, PNG, JPG or GIF (MIN. 1 photo)</p>
            </div>
            
          </div>

          {/* === FOOTER BUTTONS === */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition"
            >
              Save Property
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}