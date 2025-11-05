// frontend/src/components/HeroCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./HeroCarousel.css"; // CSS file we'll create below

// Replace these image imports with your image file paths or URLs
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/smartcare/frontend/src/assets/english-teacher-doing-her-lessons-online.jpg";

const slides = [
  {
    title: "Together Towards\nWith Better Health",
    description:
      "Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.",
    btnText: "Book appointment",
    image: hero1,
  },
  {
    title: "Expert Care,\nAnytime You Need",
    description:
      "Find qualified doctors and get timely consultations and follow ups.",
    btnText: "Find doctors",
    image: hero2,
  },
  {
    title: "Quality Treatment\n& Compassion",
    description:
      "Personalized treatment plans and caring staff to help you recover faster.",
    btnText: "Get Started",
    image: hero3,
  },
];

export default function HeroCarousel() {
  return (
    <section className="hero-carousel">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-slide">
              <div className="hero-left">
                <h1 className="hero-title">
                  {s.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
                <p className="hero-desc">{s.description}</p>
                <button className="hero-cta">{s.btnText} →</button>
              </div>

              <div className="hero-right">
                <img
                  src={s.image}
                  alt={`slide-${idx}`}
                  className="hero-image"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


