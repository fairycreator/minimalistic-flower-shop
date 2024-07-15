// src/components/SocialMediaFeed.js
import React from "react";
import styled from "styled-components";

const socialPosts = [
  {
    id: 1,
    img: "https://via.placeholder.com/300",
    link: "https://instagram.com",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/300",
    link: "https://instagram.com",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300",
    link: "https://instagram.com",
  },
];

const SocialMediaFeed = () => {
  return (
    <SocialContainer>
      <SectionTitle>Follow Us on Instagram</SectionTitle>
      <SocialGrid>
        {socialPosts.map((post) => (
          <SocialCard key={post.id}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img src={post.img} alt="Social Post" />
            </a>
          </SocialCard>
        ))}
      </SocialGrid>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
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

const SocialGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SocialCard = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export default SocialMediaFeed;
