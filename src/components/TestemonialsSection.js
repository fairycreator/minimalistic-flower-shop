import React from "react";
import styled from "styled-components";

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Beautiful flowers and great service!" },
    {
      id: 2,
      name: "Jane Smith",
      text: "The bouquet was stunning and delivery was prompt.",
    },
    {
      id: 3,
      name: "Mary Johnson",
      text: "Wonderful experience, highly recommend.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Testimonials</SectionTitle>
      <TestimonialsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialAuthor>- {testimonial.name}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  width: 300px;
  background: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  color: #555;
`;

export default TestimonialsSection;
