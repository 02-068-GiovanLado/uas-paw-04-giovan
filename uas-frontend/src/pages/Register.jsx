import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("buyer");

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE - IMAGE */}
      <div
        className="hidden md:block bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600573472591-ee6bbf0b9218?q=80')",
        }}
      ></div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-center mb-6">PropertiKu</h1>

          <h2 className="text-xl font-semibold mb-6">Buat Akun Baru</h2>

          {/* ROLE SELECTOR */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="buyer"
                checked={role === "buyer"}
                onChange={() => setRole("buyer")}
              />
              <span>Pembeli</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="agent"
                checked={role === "agent"}
                onChange={() => setRole("agent")}
              />
              <span>Agent</span>
            </label>
          </div>

          {/* FORM */}
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded-lg"
                placeholder="Nama lengkap"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded-lg"
                placeholder="Alamat email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded-lg"
                placeholder="Buat password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center mt-6 text-sm">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
