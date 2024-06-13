import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../redux/actions/productActions";
import styled from "styled-components";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
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
