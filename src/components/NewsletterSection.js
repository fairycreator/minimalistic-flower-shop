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
      <form onSubmit={handleSubscribe}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Subscribe</Button>
      </form>
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

const SectionTitle = styled.h2font-size: 2rem; margin-bottom: 1.5rem; color: #333; text-transform: uppercase; letter-spacing: 1.5px;;

const Input = styled.inputwidth: 300px; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #ccc; border-radius: 4px;;

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

export default NewsletterSection;