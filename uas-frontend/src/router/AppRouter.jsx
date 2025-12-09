import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";

// Auth
import Login from "../pages/Login";
import Register from "../pages/Register";

// Agent Pages
import AgentProfile from "../pages/AgentProfile";
import AgentDashboard from "../pages/AgentDashboard";
import AddProperty from "../pages/AddProperty";
import EditProperty from "../pages/EditProperty";

// Chat
import Chat from "../pages/Chat";

export default function AppRouter() {
  return (
    <Routes>

      {/* PUBLIC PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/property/:id" element={<Detail />} />
      <Route path="/favorite" element={<Favorite />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* AGENT ROUTES */}
      <Route path="/agent/profile/:id" element={<AgentProfile />} />
      <Route path="/agent/dashboard" element={<AgentDashboard />} />
      <Route path="/agent/add-property" element={<AddProperty />} />
      <Route path="/agent/edit-property/:id" element={<EditProperty />} />

      {/* CHAT SYSTEM */}
      <Route path="/chat/:agentId" element={<Chat />} />

    </Routes>
  );
}