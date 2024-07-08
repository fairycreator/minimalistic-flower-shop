import React, { useState } from "react";
import styled from "styled-components";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    setEmail("");
  };

  return (
    <NewsletterContainer>
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest updates and offers.</p>
      <NewsletterForm onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </NewsletterForm>
    </NewsletterContainer>
  );
};

const NewsletterContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f5f5f5;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 2rem;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

const EmailInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  flex: 1;
  font-size: 1rem;
`;

const SubscribeButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #555;
  }
`;

export default NewsletterSection;
