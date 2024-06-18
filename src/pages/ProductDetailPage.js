import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../redux/actions/productActions";
import styled from "styled-components";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.products.productDetails);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProductContainer>
      <ProductImage src={productDetails.image} alt={productDetails.name} />
      <ProductDetails>
        <h2>{productDetails.name}</h2>
        <p>{productDetails.description}</p>
        <h3>${productDetails.price}</h3>
        <button>Add to Cart</button>
      </ProductDetails>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  padding: 2rem;
`;

const ProductImage = styled.img`
  width: 50%;
  height: auto;
`;

const ProductDetails = styled.div`
  padding: 2rem;
  h2,
  h3 {
    margin: 0.5rem 0;
  }
  button {
    padding: 0.75rem 1.5rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #555;
    }
  }
`;

export default ProductDetailPage;
