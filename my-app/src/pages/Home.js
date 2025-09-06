import React, { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import ShimmerHome from '../components/ShimmerHome';
import './Home.css';



const Home = () => {

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);

   useEffect(()=>{
         fetchData();
   },[]);


   const fetchData= async ()=>{
        try {
          setIsLoading(true);
          const data = await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api");
          const ndata = await data.json();
          console.log(ndata);
          const restaurants = ndata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
          setFilteredRestaurants(restaurants);
          setOriginalRestaurants(restaurants);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
   };

  // Show shimmer UI while loading
  if (isLoading) {
    return <ShimmerHome />;
  }

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
        <p className="restaurants-subtitle">Discover amazing food from top-rated restaurants near you</p>
        <div className="filter-buttons">
          <button className="top-rated-btn" onClick={() => {
            const topRated = originalRestaurants.filter(restaurant => restaurant.info.avgRating >= 4.5);
            setFilteredRestaurants(topRated);
            console.log("Top Rated Restaurants:", topRated.length);
          }}>Top Rated Restaurants</button>
          
          <button className="new-restaurants-btn" onClick={() => {
            const newRestaurants = originalRestaurants.filter(restaurant => restaurant.info.avgRating > 4.0);
            setFilteredRestaurants(newRestaurants);
            console.log("New Restaurants:", newRestaurants.length);
          }}>New Restaurants</button>
          
          <button className="price-low-to-high-btn" onClick={() => {
            const sortedByPrice = [...originalRestaurants].sort((a, b) => {
              const priceA = parseInt(a.info.costForTwo.replace(/[^\d]/g, ''));
              const priceB = parseInt(b.info.costForTwo.replace(/[^\d]/g, ''));
              return priceA - priceB;
            });
            setFilteredRestaurants(sortedByPrice);
            console.log("Price: Low to High");
          }}>Price: Low to High</button>
          
          <button className="price-high-to-low-btn" onClick={() => {
            const sortedByPrice = [...originalRestaurants].sort((a, b) => {
              const priceA = parseInt(a.info.costForTwo.replace(/[^\d]/g, ''));
              const priceB = parseInt(b.info.costForTwo.replace(/[^\d]/g, ''));
              return priceB - priceA;
            });
            setFilteredRestaurants(sortedByPrice);
            console.log("Price: High to Low");
          }}>Price: High to Low</button>
          
          <button className="all-restaurants-btn" onClick={() => {
            setFilteredRestaurants(originalRestaurants);
            console.log("All Restaurants");
          }}>All Restaurants</button>
        </div>
        <div className="restaurants-grid">
          {filteredRestaurants.map(restaurant => {
            return <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
