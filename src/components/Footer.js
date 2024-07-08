import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h4>About Us</h4>
          <p>
            We are committed to providing the freshest and most beautiful
            flowers delivered directly to your door.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact Us</h4>
          <p>Email: support@flowershop.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow Us</h4>
          <FooterSocials>
            <SocialLink href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </SocialLink>
          </FooterSocials>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <p>© {new Date().getFullYear()} Flower Shop. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    color: #aaa;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

export default Footer;
