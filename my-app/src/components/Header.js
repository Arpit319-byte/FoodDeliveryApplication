import React from 'react';
import './Header.css';

const Header=()=>{
  return(
     
    <div className="header">

      <div className="logo-container">
          <h1>🍕 FoodExpress</h1>
      </div>

      <div className='nav-items'>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Resturant">Resturant</a></li>
          <li><a href="#Order">Order</a></li>
          <li><a href="Profile">Profile</a></li>
        </ul>
        <div className="cart-icon">
           🛒 <span className="cart-count">Cart</span>
      </div>
      </div>
    </div>
  );
}

export default Header;
