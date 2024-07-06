import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoriesSection from "../components/CategoriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  font-family: "Arial", sans-serif;
`;

export default HomePage;
