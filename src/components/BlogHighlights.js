import React from "react";
import styled from "styled-components";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Bouquet",
    excerpt: "Learn how to select the best flowers...",
  },
  {
    id: 2,
    title: "Flower Care Tips",
    excerpt: "Keep your flowers fresh longer with these tips...",
  },
  {
    id: 3,
    title: "The Meaning of Different Flowers",
    excerpt: "Discover the symbolism behind popular flowers...",
  },
];

const BlogHighlights = () => {
  return (
    <BlogContainer>
      <SectionTitle>From Our Blog</SectionTitle>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
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

const BlogGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BlogCard = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export default BlogHighlights;
