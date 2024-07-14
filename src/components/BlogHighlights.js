import React from "react";
import styled from "styled-components";

const BlogHighlights = () => {
  return (
    <BlogContainer>
      <h2>From Our Blog</h2>
      <BlogPost>
        <h3>Latest Flower Trends</h3>
        <p>Discover the latest trends in floral design and decoration.</p>
      </BlogPost>
      <BlogPost>
        <h3>Flower Care Tips</h3>
        <p>Learn how to keep your flowers fresh and beautiful for longer.</p>
      </BlogPost>
      <BlogPost>
        <h3>Behind the Scenes</h3>
        <p>Get a glimpse of how we create our stunning flower arrangements.</p>
      </BlogPost>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  width: 80%;
  margin: 2rem auto;

  text-align: center;
`;

const BlogPost = styled.div`
  margin: 1rem 0;
  h3 {
    font-size: 1.5rem;
    color: #333;
    margin: 10px;
  }
  p {
    font-size: 1rem;
    color: #666;
  }
`;

export default BlogHighlights;
