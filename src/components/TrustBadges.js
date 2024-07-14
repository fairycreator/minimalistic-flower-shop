import React from "react";
import styled from "styled-components";

const TrustBadges = () => {
  return (
    <BadgesContainer>
      <h2>Our Trust Badges</h2>
      <Badges>
        <Badge>
          <img src="https://via.placeholder.com/100" alt="Badge 1" />
          <p>Secure Payments</p>
        </Badge>
        <Badge>
          <img src="https://via.placeholder.com/100" alt="Badge 2" />
          <p>Quality Guarantee</p>
        </Badge>
        <Badge>
          <img src="https://via.placeholder.com/100" alt="Badge 3" />
          <p>Fast Delivery</p>
        </Badge>
      </Badges>
    </BadgesContainer>
  );
};

const BadgesContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
`;

const Badges = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  margin: 1rem;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  p {
    font-size: 1rem;
    color: #333;
  }
`;

export default TrustBadges;
