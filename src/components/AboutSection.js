import React from "react";
import styled from "styled-components";

const AboutSection = () => (
  <AboutContainer>
    <h2>About Us</h2>
    <p>
      We are a flower shop based in Copenhagen, dedicated to bringing the beauty
      of fresh flowers to your home. Our arrangements are crafted with care and
      passion.
    </p>
  </AboutContainer>
);

const AboutContainer = styled.section`
  padding: 2rem;
  background: #f1f1f1;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export default AboutSection;
