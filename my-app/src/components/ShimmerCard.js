import React from 'react';
import './ShimmerCard.css';

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-content">
        <div className="shimmer-title"></div>
        <div className="shimmer-cuisines"></div>
        <div className="shimmer-cuisines shimmer-cuisines-small"></div>
        <div className="shimmer-footer">
          <div className="shimmer-rating"></div>
          <div className="shimmer-delivery"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
