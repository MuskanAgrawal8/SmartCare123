import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import "./HeroCarousel.css";
import { assets } from "../../assets/assets";
import Carousels from "./dummy-carousels/carousel";

const carouselContents = [
  {
    heroTexts: {
      text1: "Book Appointment",
      text2: "With Trusted Doctors",
    },
    supporting: {
      img: assets.group_profiles,
      text1: "Simply browse through our extensive list of trusted doctors",
      text2: "schedule your appointment hassle-free.",
    },
    heroImage: {
      img: assets.header_img,
    },
    action: {
      btnText: "Book appointment",
    },
  },
  {
    heroTexts: {
      text1: "Book Lab Tests Now",
      text2: "Safe home pickup in 60 minutes",
    },
    supporting: {
      img: assets.group_profiles,
      text1: "Certified labs, barcoded samples, secure digital access",
      text2: "reports in 24 hours",
    },
    heroImage: {
      img: assets.CaroselItem1,
    },
    action: {
      btnText: "Book your test now",
    },
  },
  {
    heroTexts: {
      text1: "24/7 Video",
      text2: "Consultation",
    },
    supporting: {
      img: assets.group_profiles,
      text1: "Connect with doctors",
      text2: "anytime & anywhere",
    },
    heroImage: {
      img: assets.carasoule3,
    },
    action: {
      btnText: "Book consultation now",
    },
  },
];

// const HeroCarousel = () => {
//   return (
//     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//       {carouselContents.map((carousel,i) => (<SwiperSlide key={i}><Carousels {...carousel} /></SwiperSlide>))}
//     </Swiper>
//   );
// };

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop
      speed={700}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="mySwiper"
    >
      {carouselContents.map((carousel, i) => (
        <SwiperSlide key={i}>
          <Carousels {...carousel} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;