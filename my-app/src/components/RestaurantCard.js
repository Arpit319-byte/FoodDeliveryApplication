import React from 'react';
import './RestaurantCard.css';
import RESTAURANT_LOGO from '../utils/constant';

const RestaurantCard=(props)=>{
  const {restaurant} = props;

  // Handle case where restaurant might be undefined
  if (!restaurant) {
    return <div>No restaurant data available</div>;
  }

  return(
    <div className='restaurant-card'>
       <img 
       className='restaurant-image' 
       src={RESTAURANT_LOGO+restaurant.info.cloudinaryImageId}
        alt="restaurant-image" />
      
      {/* Rating Badge */}
      <div className="rating-badge">
        ⭐ {restaurant.info.avgRatingString}
      </div>
      
      {/* Delivery Time Badge */}
      <div className="delivery-badge">
        {restaurant.info.sla.deliveryTime} min
      </div>
      
      <h3>{restaurant.info.name}</h3>
      <p className="cuisine">{restaurant.info.cuisines.join(', ')}</p>
      
      <div className="restaurant-details">
        <span>🕒 {restaurant.info.sla.slaString}</span>
        <span>💰 {restaurant.info.costForTwo}</span>
      </div>
      
      <button className="view-menu-btn">View Menu</button>
    </div>
  );
}
export default RestaurantCard;
