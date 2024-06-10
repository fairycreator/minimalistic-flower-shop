import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <p>&copy; {new Date().getFullYear()} Flower Shop. All rights reserved.</p>
      <FooterLinks>
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </FooterLinks>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  p {
    margin: 0;
  }
`;

const FooterLinks = styled.div`
  a {
    color: white;
    margin: 0 0.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
