import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import EmergencyPopup from "./components/EmergencyPopup";
import { AppContext } from "./context/AppContext";

const App = () => {
  const [showEmergency, setShowEmergency] = useState(false);
  const { loading } = useContext(AppContext);

  // ✅ Show a loading screen while data (user/profile) is being fetched
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center bg-white">
        <div className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 sm:mx-[10%] relative">
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>

      <Footer />

      {/* 🚨 Emergency Floating Button */}
      <button
        onClick={() => setShowEmergency(true)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-lg font-semibold z-50"
      >
        🚨 Emergency
      </button>

      {/* Popup Modal */}
      <EmergencyPopup
        show={showEmergency}
        onClose={() => setShowEmergency(false)}
      />
    </div>
  );
};

export default App;
