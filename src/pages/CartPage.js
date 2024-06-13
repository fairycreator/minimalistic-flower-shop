import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../redux/actions/cartActions";
import styled from "styled-components";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartQuantity(id, quantity));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <QuantityInput
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              min="1"
            />
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </div>
        </CartItem>
      ))}
      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  img {
    width: 100px;
    height: auto;
    margin-right: 1rem;
  }
  div {
    h3 {
      margin: 0;
    }
    p {
      margin: 0.5rem 0;
    }
    button {
      padding: 0.5rem 1rem;
      background: #ff4d4f;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: #ff7875;
      }
    }
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  margin-right: 1rem;
`;

const TotalPrice = styled.h3`
  margin-top: 2rem;
`;

const CheckoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #555;
  }
`;

export default CartPage;
