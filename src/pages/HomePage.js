import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => (
  <HomeContainer>
    <HeroSection>
      <HeroImage src="/images/copenhagen.jpg" alt="Copenhagen" />
      <HeroText>
        <h1>Welcome to Our Flower Shop</h1>
        <Link to="/shop">
          <HeroButton>Shop Now</HeroButton>
        </Link>
      </HeroText>
    </HeroSection>
  </HomeContainer>
);

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 80vh;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
`;

const HeroButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default HomePage;
