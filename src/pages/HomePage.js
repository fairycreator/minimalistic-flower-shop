// src/pages/HomePage.js
import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/Contactsection";

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedProducts />
    <AboutSection />
    <ContactSection />
  </>
);

export default HomePage;
