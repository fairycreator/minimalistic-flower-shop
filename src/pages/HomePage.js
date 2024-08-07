import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoriesSection from "../components/CategoriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import BlogHighlights from "../components/BlogHighlights";
import SocialMediaFeed from "../components/SocialMediaFeed";
import TrustBadges from "../components/TrustBadges";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <BlogHighlights />
      <SocialMediaFeed />
      <TrustBadges />
      <Footer />
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export default HomePage;
