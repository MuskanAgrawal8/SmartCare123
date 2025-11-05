import React from "react";
// import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import TeamSection from "../components/TeamSection";
import HeroCarousel from "../components/Carousel/HeroCarousel";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroCarousel />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <TeamSection />
    </div>
  );
};

export default Home;
