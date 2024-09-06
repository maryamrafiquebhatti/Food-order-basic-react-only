
import React from 'react';
import './OrderSummary.css';  

const OrderSummary = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      {cart.length === 0 ? (
        <p>No items in the order.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <h2>{item.name}</h2>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <p>Thank you for your order!</p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
