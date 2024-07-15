import React from "react";
import styled from "styled-components";

const categories = [
  { id: 1, name: "Birthday", img: "https://via.placeholder.com/300" },
  { id: 2, name: "Wedding", img: "https://via.placeholder.com/300" },
  { id: 3, name: "Sympathy", img: "https://via.placeholder.com/300" },
];

const CategoriesSection = () => {
  return (
    <CategoriesContainer>
      <SectionTitle>Shop by Categories</SectionTitle>
      <CategoriesGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id}>
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
          </CategoryCard>
        ))}
      </CategoriesGrid>
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
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

const CategoriesGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CategoryCard = styled.div`
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
`;

export default CategoriesSection;
