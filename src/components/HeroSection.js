import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <HeroContainer>
      <StyledCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="https://via.placeholder.com/1200x500" alt="Flower 1" />
          <p className="legend">Beautiful Bouquets</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x500" alt="Flower 2" />
          <p className="legend">Fresh Flowers</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/1200x500" alt="Flower 3" />
          <p className="legend">Floral Arrangements</p>
        </div>
      </StyledCarousel>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const StyledCarousel = styled(Carousel)`
  .legend {
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 5px;
  }

  img {
    border-radius: 10px;
  }
`;

export default HeroSection;
