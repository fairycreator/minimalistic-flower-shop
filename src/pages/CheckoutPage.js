import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.items);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order here
  };

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <Input
          type="text"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, address: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="City"
          value={shippingInfo.city}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, city: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Postal Code"
          value={shippingInfo.postalCode}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, postalCode: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Country"
          value={shippingInfo.country}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, country: e.target.value })
          }
        />
        <h2>Payment Information</h2>
        <Input
          type="text"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          value={paymentInfo.expiryDate}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="CVV"
          value={paymentInfo.cvv}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
          }
        />
        <Button type="submit">Place Order</Button>
      </CheckoutForm>
      <OrderSummary>
        <h2>Order Summary</h2>
        {items.map((item) => (
          <OrderItem key={item.id}>
            <p>{item.name}</p>
            <p>
              ${item.price} x {item.quantity}
            </p>
          </OrderItem>
        ))}
        <TotalAmount>Total: ${totalAmount.toFixed(2)}</TotalAmount>
      </OrderSummary>
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const CheckoutForm = styled.form`
  flex: 1;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const OrderSummary = styled.div`
  flex: 1;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-left: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
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

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const TotalAmount = styled.div`
  font-weight: bold;
  padding: 1rem;
  text-align: right;
`;

export default CheckoutPage;
