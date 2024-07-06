import React from "react";
import styled from "styled-components";

const NewsletterSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
      <NewsletterForm>
        <Input type="email" placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </NewsletterForm>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #ff4081;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #ff4081;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff1c66;
    color: white;
  }
`;

export default NewsletterSection;
