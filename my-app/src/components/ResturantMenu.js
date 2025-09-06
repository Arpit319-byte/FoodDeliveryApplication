import React from 'react';
import './ResturantMenu.css';

const ResturantMenu = () => {
    const menuItems = [
        { id: 1, name: "Margherita Pizza", price: "₹299", description: "Classic tomato and mozzarella pizza", category: "Pizza" },
        { id: 2, name: "Chicken Burger", price: "₹199", description: "Juicy chicken patty with fresh vegetables", category: "Burger" },
        { id: 3, name: "Pasta Carbonara", price: "₹249", description: "Creamy pasta with bacon and parmesan", category: "Pasta" },
        { id: 4, name: "Caesar Salad", price: "₹149", description: "Fresh lettuce with caesar dressing", category: "Salad" },
        { id: 5, name: "Chocolate Brownie", price: "₹99", description: "Rich chocolate brownie with ice cream", category: "Dessert" },
        { id: 6, name: "Fresh Orange Juice", price: "₹79", description: "Freshly squeezed orange juice", category: "Beverage" }
    ];

    return (
        <div className="restaurant-menu">
            <div className="menu-header">
                <h1>🍽️ FoodExpress Menu</h1>
                <p>Delicious dishes made with love</p>
            </div>

            <div className="menu-categories">
                <button className="category-btn active">All</button>
                <button className="category-btn">Pizza</button>
                <button className="category-btn">Burger</button>
                <button className="category-btn">Pasta</button>
                <button className="category-btn">Salad</button>
                <button className="category-btn">Dessert</button>
                <button className="category-btn">Beverage</button>
            </div>

            <div className="menu-items">
                {menuItems.map(item => (
                    <div key={item.id} className="menu-item">
                        <div className="menu-item-content">
                            <h3>{item.name}</h3>
                            <p className="menu-description">{item.description}</p>
                            <span className="menu-category">{item.category}</span>
                        </div>
                        <div className="menu-item-price">
                            <span className="price">{item.price}</span>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResturantMenu;