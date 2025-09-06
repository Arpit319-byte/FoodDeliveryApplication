import React from 'react';
import ShimmerCard from './ShimmerCard';
import './ShimmerHome.css';

const ShimmerHome = () => {
  // Create an array of 12 shimmer cards for the grid
  const shimmerCards = Array.from({ length: 12 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return (
    <div className="shimmer-home">
      {/* Hero Section Shimmer */}
      <section className="shimmer-hero">
        <div className="shimmer-hero-content">
          <div className="shimmer-hero-title"></div>
          <div className="shimmer-hero-subtitle"></div>
          <div className="shimmer-search-bar">
            <div className="shimmer-search-input"></div>
            <div className="shimmer-search-btn"></div>
          </div>
        </div>
      </section>

      {/* Restaurants Section Shimmer */}
      <section className="shimmer-restaurants">
        <div className="shimmer-section-title"></div>
        <div className="shimmer-section-subtitle"></div>
        
        {/* Filter Buttons Shimmer */}
        <div className="shimmer-filter-buttons">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="shimmer-filter-btn"></div>
          ))}
        </div>

        {/* Restaurant Cards Grid Shimmer */}
        <div className="shimmer-restaurants-grid">
          {shimmerCards}
        </div>
      </section>
    </div>
  );
};

export default ShimmerHome;
