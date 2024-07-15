import React from "react";
import styled from "styled-components";

const featuredProducts = [
  {
    id: 1,
    name: "Roses",
    price: 29.99,
    img: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tulips",
    price: 19.99,
    img: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Daisies",
    price: 24.99,
    img: "https://via.placeholder.com/300",
  },
];

const FeaturedProducts = () => {
  return (
    <ProductsContainer>
      <SectionTitle>Featured Products</SectionTitle>
      <ProductsGrid>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
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

const ProductsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

export default FeaturedProducts;
