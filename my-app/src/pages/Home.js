import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import './Home.css';

const Home = () => {
  const [restaurants] = useState([
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.5,
      deliveryTime: 30,
      minOrder: 200,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
    },
    {
      id: 2,
      name: "Burger House",
      cuisine: "American",
      rating: 4.2,
      deliveryTime: 25,
      minOrder: 150,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
    },
    {
      id: 3,
      name: "Sushi Express",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: 35,
      minOrder: 300,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400"
    }
  ]);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Food Delivered to Your Door</h1>
          <p>Order from your favorite restaurants and get it delivered in minutes</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Enter your delivery address..."
              className="address-input"
            />
            <button className="search-btn">Find Food</button>
          </div>
        </div>
      </section>

      <section className="restaurants">
        <h2>Popular Restaurants</h2>
        <div className="restaurants-grid">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
