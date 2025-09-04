import React from 'react';
import './RestaurantCard.css';

// const RestaurantCard = ({ restaurant }) => {
//   const { name, cuisine, rating, deliveryTime, minOrder, image } = restaurant;
  
//   return (
//     <div className="restaurant-card">
//       <div className="restaurant-image">
//         <img src={image} alt={name} />
//         <div className="rating-badge">
//           ⭐ {rating}
//         </div>
//       </div>
//       <div className="restaurant-info">
//         <h3>{name}</h3>
//         <p className="cuisine">{cuisine}</p>
//         <div className="restaurant-details">
//           <span>🕒 {deliveryTime} min</span>
//           <span>💰 Min ₹{minOrder}</span>
//         </div>
//         <button className="view-menu-btn">View Menu</button>
//       </div>
//     </div>
//   );
// };





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
       src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info.cloudinaryImageId}
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
