import React, { useState } from "react";
import styled from "styled-components";

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <h3>Shipping Information</h3>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={shippingInfo.name}
          onChange={handleShippingChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleShippingChange}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleShippingChange}
        />
        <Input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          value={shippingInfo.zip}
          onChange={handleShippingChange}
        />
        <h3>Payment Information</h3>
        <Input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentChange}
        />
        <Input
          type="text"
          name="expiryDate"
          placeholder="Expiry Date"
          value={paymentInfo.expiryDate}
          onChange={handlePaymentChange}
        />
        <Input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={handlePaymentChange}
        />
        <Button type="submit">Place Order</Button>
      </CheckoutForm>
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const CheckoutForm = styled.form`
  background: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  width: 100%;
  max-width: 500px;
  h3 {
    margin: 1rem 0;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
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

export default CheckoutPage;
