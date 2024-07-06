import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>About Us</h4>
          <p>
            We are a boutique flower shop in Copenhagen, offering the freshest
            flowers for every occasion.
          </p>
        </FooterSection>
        <FooterSection>
          <h4>Contact Us</h4>
          <p>Email: info@copenhagenflowershop.com</p>
          <p>Phone: +45 123 456 789</p>
        </FooterSection>
        <FooterSection>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Copenhagen Flower Shop. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #444;
`;

const FooterSection = styled.div`
  max-width: 300px;

  h4 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: white;
    text-decoration: none;
    margin: 0.5rem 0;
    transition: color 0.3s ease;

    &:hover {
      color: #ff4081;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
  color: #aaa;
`;

export default Footer;
