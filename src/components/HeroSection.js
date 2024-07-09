import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <HeroImage src="/images/copenhagen1.png" alt="Beautiful Flowers" />
        <HeroImage src="/images/copenhagen2.png" alt="Fresh Bouquets" />
        <HeroImage src="/images/copenhagen3.png" alt="Flower Arrangements" />
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
