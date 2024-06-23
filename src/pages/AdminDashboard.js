import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import styled from "styled-components";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <DashboardContainer>
      <h2>Admin Dashboard</h2>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </ProductItem>
        ))}
      </ProductList>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default AdminDashboard;
