import React from "react";
import styled from "styled-components";

const HeroSection = () => (
  <HeroContainer>
    <HeroContent>
      <h1>Welcome to Our Flower Shop</h1>
      <p>Discover the beauty of our fresh flowers</p>
      <HeroButton>Shop Now</HeroButton>
    </HeroContent>
  </HeroContainer>
);

const HeroContainer = styled.section`
  height: 100vh;
  background: url("/public/images/copenahgen.png") no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;

  h1 {
    font-size: 3rem;
  }

  p {
    margin: 1rem 0;
  }
`;

const HeroButton = styled.button`
  padding: 0.5rem 1rem;
  background: #ff5a5f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

export default HeroSection;
