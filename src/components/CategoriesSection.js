import React from "react";
import styled from "styled-components";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Birthday",
      imageUrl: "https://source.unsplash.com/400x300/?birthday-flowers",
    },
    {
      name: "Wedding",
      imageUrl: "https://source.unsplash.com/400x300/?wedding-flowers",
    },
    {
      name: "Sympathy",
      imageUrl: "https://source.unsplash.com/400x300/?sympathy-flowers",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Shop by Category</SectionTitle>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryCard key={category.name}>
            <CategoryImage src={category.imageUrl} alt={category.name} />
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </CategoriesContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const CategoryCard = styled.div`
  width: 300px;
  text-align: center;
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const CategoryName = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export default CategoriesSection;
