// src/components/TrustBadges.js
import React from "react";
import styled from "styled-components";

const badges = [
  { id: 1, name: "100% Fresh Flowers", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Free Delivery", img: "https://via.placeholder.com/100" },
  {
    id: 3,
    name: "Satisfaction Guarantee",
    img: "https://via.placeholder.com/100",
  },
];

const TrustBadges = () => {
  return (
    <BadgesContainer>
      <BadgesGrid>
        {badges.map((badge) => (
          <BadgeCard key={badge.id}>
            <img src={badge.img} alt={badge.name} />
            <p>{badge.name}</p>
          </BadgeCard>
        ))}
      </BadgesGrid>
    </BadgesContainer>
  );
};

const BadgesContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
`;

const BadgesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BadgeCard = styled.div`
  width: 150px;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }

  p {
    font-size: 1.2rem;
    color: #333;
    margin-top: 0.5rem;
  }
`;

export default TrustBadges;
