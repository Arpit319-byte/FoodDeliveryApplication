import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisine, rating, deliveryTime, minOrder, image } = restaurant;
  
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={image} alt={name} />
        <div className="rating-badge">
          ⭐ {rating}
        </div>
      </div>
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p className="cuisine">{cuisine}</p>
        <div className="restaurant-details">
          <span>🕒 {deliveryTime} min</span>
          <span>💰 Min ₹{minOrder}</span>
        </div>
        <button className="view-menu-btn">View Menu</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
