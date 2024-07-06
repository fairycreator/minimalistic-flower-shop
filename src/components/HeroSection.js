import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to Copenhagen Flower Shop</HeroTitle>
        <HeroSubtitle>Beautiful Flowers for Every Occasion</HeroSubtitle>
        <HeroButton>Shop Now</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: url("https://source.unsplash.com/1600x900/?flowers") no-repeat
    center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const HeroContent = styled.div`
  text-align: center;
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  background-color: #ff4081;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff1c66;
  }
`;

export default HeroSection;
