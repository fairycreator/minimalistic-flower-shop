import React from "react";
import styled from "styled-components";

const ContactSection = () => (
  <ContactContainer>
    <h2>Contact Us</h2>
    <ContactForm>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <ContactButton type="submit">Send</ContactButton>
    </ContactForm>
  </ContactContainer>
);

const ContactContainer = styled.section`
  padding: 2rem;
  background: #fff;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 0.5rem;
    width: 100%;
    max-width: 400px;
    text-align: left;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    height: 100px;
  }
`;

const ContactButton = styled.button`
  padding: 0.5rem 1rem;
  background: #ff5a5f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

export default ContactSection;
