import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <HeroImage
          src="https://images.unsplash.com/photo-1600051702654-9f9a6a58d924"
          alt="Beautiful Flowers"
        />
        <HeroImage
          src="https://images.unsplash.com/photo-1593642634367-d91a135587b5"
          alt="Fresh Bouquets"
        />
        <HeroImage
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          alt="Flower Arrangements"
        />
      </Carousel>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  max-height: 60vh;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default HeroSection;
