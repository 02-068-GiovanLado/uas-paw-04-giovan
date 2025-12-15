import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";

function Layout() {
  const location = useLocation();

  // (Termasuk halaman dashboard agen karena dia punya sidebar sendiri)
  const hideNavbarPages = ["/login", "/register", "/AgentDashboard"];

  // Cek apakah halaman sekarang ada di daftar hideNavbarPages
  const hideNavbar = hideNavbarPages.includes(location.pathname);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Navbar hanya muncul jika hideNavbar bernilai false */}
      {!hideNavbar && <Navbar />}

      {/* Semua halaman dari AppRouter */}
      <AppRouter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;