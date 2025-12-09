import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Chat() {
  const { id } = useParams();

  // Dummy chat list
  const chatList = [
    { id: 1, name: "Jane Doe", last: "Silakan, rumah masih tersedia ya!" },
    { id: 2, name: "Agus Wijaya", last: "Besok bisa survey lokasi?" },
    { id: 3, name: "Property Agent", last: "Tentu, kapan ingin dijadwalkan?" },
  ];

  // Dummy property data on right panel
  const property = {
    id: 99,
    title: "Modern House in South Jakarta",
    price: 2500000000,
    location: "Jakarta Selatan",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
  };

  // Dummy chat messages
  const [messages, setMessages] = useState([
    { from: "agent", text: "Selamat siang, ada yang bisa saya bantu?" },
    { from: "user", text: "Rumah ini masih tersedia, kak?" },
    { from: "agent", text: "Iya, masih tersedia ya!" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-4">

      {/* SIDEBAR CHAT LIST */}
      <div className="border-r bg-white p-4 md:col-span-1 overflow-y-auto h-screen">
        <h2 className="text-xl font-bold mb-4">Chats</h2>

        <div className="space-y-3">
          {chatList.map((c) => (
            <div
              key={c.id}
              className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
            >
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-gray-600 truncate">{c.last}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CHAT ROOM */}
      <div className="md:col-span-2 flex flex-col h-screen bg-gray-50">

        {/* HEADER */}
        <div className="p-4 border-b bg-white flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Jane Doe</p>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>

        {/* CHAT MESSAGES */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl max-w-xs ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white shadow rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* MESSAGE INPUT */}
        <div className="p-4 border-t bg-white flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border p-3 rounded-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>

      {/* PROPERTY INFO PANEL */}
      <div className="hidden md:block border-l bg-white p-6 md:col-span-1 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Property Info</h2>

        <img
          src={property.img}
          className="w-full h-40 object-cover rounded-lg"
        />

        <h3 className="mt-4 font-semibold text-lg">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>

        <p className="text-blue-600 font-bold mt-2">
          Rp {property.price.toLocaleString("id-ID")}
        </p>

        <Link
          to={`/property/${property.id}`}
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          View Property →
        </Link>
      </div>
    </div>
  );
}
