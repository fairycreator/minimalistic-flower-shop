import React, { useState } from "react";
import styled from "styled-components";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <NewsletterContainer>
      <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
      <Description>
        Stay updated with the latest floral trends, special offers, and
        exclusive promotions. Join our community of flower enthusiasts today!
      </Description>
      <form onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Subscribe</Button>
      </form>
      <SocialProof>
        <p>Trusted by thousands of flower lovers!</p>
        <p>🌸🌷🌼🌺🌻</p>
      </SocialProof>
    </NewsletterContainer>
  );
};

const NewsletterContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 300px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const SocialProof = styled.div`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  color: #333;

  p {
    margin: 0.5rem 0;
  }
`;

export default NewsletterSection;
