import React, { useMemo, useState } from "react";
import { assets } from "../assets/assets"; // make sure team images are exported

const TeamSection = () => {
  const allMembers = [
    { id: 1, name: "Nihar Ranjan Sahoo", role: "Team Lead & UI/UX Designer", img: assets.Nihar || "" },
    { id: 2, name: "Hritik Apata", role: "Frontend Developer", img: assets.hrithik || "" },
    { id: 3, name: "Kaibalya Das", role: "Frontend Developer", img: assets.kaibalya || "" },
    { id: 4, name: "Muskan Agrawal", role: "Frontend Developer", img: assets.muskan || "" },
    { id: 5, name: "Anubhab Mahapatra", role: "Database Engineer", img: assets.anubhav || "" },
    { id: 6, name: "Jasoda Sethy", role: "Business Research & Documentation", img: assets.jashoda || "" },
    { id: 7, name: "Dibyajyoti Roy Das", role: "UI/UX Designer", img: assets.dibya || "" },
    { id: 10, name: "Mamina Behera", role: "Business Research & Documentation", img: assets.mamuni || "" },
    { id: 11, name: "Chitta Ranjan Nayak", role: "Q/A", img: assets.chita || "" },
  ];

  const PAGE_SIZE = 4;
  const totalPages = Math.ceil(allMembers.length / PAGE_SIZE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("next");

  const goPrev = () => {
    setDirection("prev");
    setPage((p) => Math.max(0, p - 1));
  };

  const goNext = () => {
    setDirection("next");
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  const goTo = (p) => {
    setDirection(p > page ? "next" : "prev");
    setPage(Math.max(0, Math.min(totalPages - 1, p)));
  };

  const currentMembers = useMemo(() => {
    const start = page * PAGE_SIZE;
    return allMembers.slice(start, start + PAGE_SIZE);
  }, [allMembers, page]);

  return (
    <section id="team" className="bg-[#f5f7fa] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary font-semibold mb-2">Our Expert Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Meet Our Expert Team
        </h2>

        {/* ---- Animated Wrapper ---- */}
        <div className="relative w-full overflow-hidden">
          <div
            key={page} // re-trigger animation on page change
            className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center transform transition-all duration-700 ease-in-out
              ${direction === "next" ? "translate-x-0 animate-slide-next" : "translate-x-0 animate-slide-prev"}`}
          >
            {currentMembers.map((member) => (
              <div
                key={member.id}
                className="w-full max-w-xs bg-[#172133] rounded-xl shadow-lg
                           transform transition-all duration-500 ease-in-out
                           hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <img
                  src={
                    member.img && member.img !== ""
                      ? member.img
                      : `https://via.placeholder.com/280x280?text=${encodeURIComponent(
                          member.name
                        )}`
                  }
                  alt={member.name}
                  className="w-full h-52 object-cover transition-all duration-500 ease-in-out"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{member.role}</p>
                  <div className="w-12 h-[2px] bg-primary mx-auto mb-4"></div>

                  <div className="flex justify-center gap-4 text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Pagination ---- */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            disabled={page === 0}
            className={`px-3 py-2 rounded-full border border-gray-400 text-gray-600 
                        hover:bg-primary hover:text-white transition 
                        ${page === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <i className="fas fa-arrow-left"></i>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full ${
                  page === i ? "bg-primary" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            className={`px-3 py-2 rounded-full border border-gray-400 text-gray-600 
                        hover:bg-primary hover:text-white transition 
                        ${page === totalPages - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Inline animation styles */}
      <style>
        {`
          @keyframes slide-next {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slide-prev {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-next {
            animation: slide-next 0.6s ease-in-out;
          }
          .animate-slide-prev {
            animation: slide-prev 0.6s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default TeamSection;
