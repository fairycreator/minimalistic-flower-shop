// src/pages/ShopPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ShopContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ShopContainer>
  );
};

const ShopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

export default ShopPage;
