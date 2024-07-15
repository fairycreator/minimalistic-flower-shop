// src/components/TestimonialsSection.js
import React from "react";
import styled from "styled-components";

const testimonials = [
  { id: 1, name: "Jane Doe", quote: "Best flower shop ever!" },
  { id: 2, name: "John Smith", quote: "Amazing flowers and service!" },
  { id: 3, name: "Emily Johnson", quote: "Highly recommend to everyone!" },
];

const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <SectionTitle>What Our Customers Say</SectionTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.name}</h4>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
};

const TestimonialsContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    font-size: 1.2rem;
    color: #666;
  }

  h4 {
    font-size: 1.1rem;
    color: #333;
    margin-top: 1rem;
  }
`;

export default TestimonialsSection;
