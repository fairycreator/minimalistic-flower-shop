import React from "react";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default ProductCard;
