import React from 'react';
import menuItems from '../data'; 
import './menu.css';  

const Menu = ({ addToCart }) => {
  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div className="food-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
