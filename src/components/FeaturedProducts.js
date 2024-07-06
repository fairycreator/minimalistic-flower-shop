import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  // Example products array
  const products = [
    {
      id: 1,
      name: "Rose Bouquet",
      price: 29.99,
      imageUrl: "https://source.unsplash.com/400x300/?rose",
    },
    {
      id: 2,
      name: "Tulip Bundle",
      price: 24.99,
      imageUrl: "https://source.unsplash.com/400x300/?tulip",
    },
    {
      id: 3,
      name: "Sunflower Arrangement",
      price: 19.99,
      imageUrl: "https://source.unsplash.com/400x300/?sunflower",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Featured Products</SectionTitle>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export default FeaturedProducts;
