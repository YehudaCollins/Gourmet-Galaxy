import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "../style/insideShop.css";

function InsideCard() {
  const { name } = useParams(); // קבלת שם המסעדה מהנתיב
  const restaurants = JSON.parse(localStorage.getItem("restaurants")) || []; // קבלת המסעדות מה-localStorage או מערך ריק
  const restaurant = restaurants.find(r => r.name === name); // מציאת המסעדה על פי השם

  const [currentIndex, setCurrentIndex] = useState(0); // מצב לאינדקס התמונה הנוכחית

  // אם המסעדה לא נמצאה, הצג הודעת שגיאה
  if (!restaurant) {
    return <h1 className="not-found">Restaurant not found</h1>;
  }

  // פונקציה להצגת התמונה הקודמת
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 2 + restaurant.images.length) % restaurant.images.length);
  };

  // פונקציה להצגת התמונה הבאה
  const handleNext = () => {
    setCurrentIndex((currentIndex + 2) % restaurant.images.length);
  };

  // פונקציה להמרת מחיר למספר דולרים
  const renderPrice = (price) => {
    const totalDollars = 3;
    const dollars = [];
    for (let i = 0; i < totalDollars; i++) {
      dollars.push(
        <span key={i} className={i < price ? "dollar black" : "dollar gray"}>$</span>
      );
    }
    return dollars;
  };

  return (
    <div className="inside-card">
      <h1 className="restaurant-name">{restaurant.name}</h1>
      <div className="restaurant-details">
        <p><strong>City:</strong> {restaurant.city}</p>
        <p><strong>Kitchen style:</strong> {restaurant.cuisine}</p>
        <p><strong>Price:</strong> {renderPrice(restaurant.price)}</p>
        <p><strong>Rating:</strong> {restaurant.rating}</p>
        <p><strong>Description:</strong> {restaurant.description}</p>
      </div>
      <div className="image-gallery">
        <button className="prev-button" onClick={handlePrev}>&#8249;</button>
        <div className="gallery-images">
          <img className="gallery-image" src={restaurant.images[currentIndex]} alt={`${restaurant.name} ${currentIndex + 1}`} />
          <img className="gallery-image" src={restaurant.images[(currentIndex + 1) % restaurant.images.length]} alt={`${restaurant.name} ${currentIndex + 2}`} />
        </div>
        <button className="next-button" onClick={handleNext}>&#8250;</button>
      </div>
      <img className="main-image" src={restaurant.main_image} alt={restaurant.name} />
    </div>
  );
}

export default InsideCard;