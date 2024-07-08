import React from "react";
import styled from "styled-components";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      text: "The flowers were absolutely beautiful and arrived on time!",
    },
    {
      name: "John Smith",
      text: "Excellent service and stunning arrangements. Highly recommend!",
    },
    {
      name: "Emily Johnson",
      text: "I loved the freshness and quality of the flowers. Great experience!",
    },
  ];

  return (
    <TestimonialsContainer>
      <h2>What Our Customers Say</h2>
      <Testimonials>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </Testimonial>
        ))}
      </Testimonials>
    </TestimonialsContainer>
  );
};

const TestimonialsContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 2rem;
  }
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Testimonial = styled.div`
  max-width: 300px;
  margin: 1rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: #333;
  }
`;

export default TestimonialsSection;
