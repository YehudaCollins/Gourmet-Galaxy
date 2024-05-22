import React from "react";
import "../style/shop.css";

//כאן בניתי את העיצוב של כל חנות מבחוץ

function Inside({ restaurant }) {
  //פונקציה בשביל הדולרים(כמה יקר)
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
        <div className="card">
            <img className="img" src={restaurant.main_image} alt={`${restaurant.name}`} />
            <div className="name-card">
                <h1 className="name">{restaurant.name}</h1>
                <div className="details">
                    <h2>{restaurant.city}</h2>
                    <p className="price"><strong>Price:</strong> {renderPrice(restaurant.price)}</p>
                    <h3>Rating:    {restaurant.rating}</h3>
                </div>
            </div>
        </div>
    );
}

export default Inside;
