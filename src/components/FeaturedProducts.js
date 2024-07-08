import React from "react";
import styled from "styled-components";

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <Feature>
        <FeatureIcon src="/images/feature-icon1.png" alt="Freshness" />
        <h3>Always Fresh</h3>
        <p>
          Our flowers are sourced directly from farms to ensure the freshest
          blooms.
        </p>
      </Feature>
      <Feature>
        <FeatureIcon src="/images/feature-icon2.png" alt="Delivery" />
        <h3>Fast Delivery</h3>
        <p>Enjoy fast and reliable delivery to your doorstep.</p>
      </Feature>
      <Feature>
        <FeatureIcon src="/images/feature-icon3.png" alt="Support" />
        <h3>24/7 Support</h3>
        <p>
          Our customer support is available around the clock for any queries.
        </p>
      </Feature>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  background-color: #fff;
`;

const Feature = styled.div`
  text-align: center;
  max-width: 300px;

  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #777;
  }
`;

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export default FeaturesSection;
