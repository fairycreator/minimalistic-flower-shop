import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../redux/actions/productActions";
import styled from "styled-components";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productDetail);

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <ProductDetailContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

const ProductDetailContainer = styled.div`
  display: flex;
  padding: 2rem;
`;

const ProductImage = styled.img`
  width: 50%;
  margin-right: 2rem;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const AddToCartButton = styled.button`
  padding: 0.75rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #555;
  }
`;

export default ProductDetailPage;
