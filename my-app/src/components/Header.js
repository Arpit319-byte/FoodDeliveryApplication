import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <h1>🍕 FoodExpress</h1>
        </Link>
      </div>

      <div className='nav-items'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
        <div className="cart-icon">
          🛒 <span className="cart-count">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
