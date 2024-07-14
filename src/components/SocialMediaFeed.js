import React from "react";
import styled from "styled-components";

const SocialMediaFeed = () => {
  return (
    <FeedContainer>
      <h2>Follow Us on Social Media</h2>
      <Feed>
        <FeedItem>
          <img src="https://via.placeholder.com/150" alt="Instagram Post" />
        </FeedItem>
        <FeedItem>
          <img src="https://via.placeholder.com/150" alt="Instagram Post" />
        </FeedItem>
        <FeedItem>
          <img src="https://via.placeholder.com/150" alt="Instagram Post" />
        </FeedItem>
      </Feed>
    </FeedContainer>
  );
};

const FeedContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
`;

const Feed = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeedItem = styled.div`
  margin: 0.5rem;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

export default SocialMediaFeed;
