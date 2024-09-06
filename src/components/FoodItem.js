import React from 'react';

const FoodItem = ({ item, addToCart }) => {
  return (
    <div className="food-item">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
