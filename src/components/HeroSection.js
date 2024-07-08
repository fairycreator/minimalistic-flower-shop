import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Discover the Beauty of Flowers</h1>
        <p>Fresh blooms delivered to your door</p>
        <HeroButton>Shop Now</HeroButton>
      </HeroText>
      <HeroImage src="/images/copenhagen.png" alt="Flowers" />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const HeroText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 3rem;
    color: #333;
  }

  p {
    font-size: 1.5rem;
    color: #777;
    margin: 1rem 0;
  }
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #555;
  }
`;

const HeroImage = styled.img`
  max-width: 500px;
  border-radius: 10px;
`;

export default HeroSection;
