import React, { useState, useEffect } from 'react';
import Inside from "./Shop";
import { Link } from 'react-router-dom';
import "../style/Home.css";

// חיפוש לסינון מסעדות
const Search = ({ restaurants, setFilteredRestaurants, resetSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // מאפס את הרשימה לכל המסעדות לפני חיפוש חדש
    if (term !== searchTerm) {
      resetSearch();
    }

    // מסנן את המסעדות על סמך החיפוש
    const filtered = restaurants.filter((restaurant) =>
      restaurant.city.toLowerCase().includes(term)
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="חפש מסעדות..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

// אובייקט ראשי שמציג את המסעדות
function Home({ restaurants }) {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // הגדרת המצב ההתחלתי עם כל המסעדות
  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  //מעדכן את הרשימה של המסעדות לאחר שאני מבצע איפוס
  const resetSearch = () => {
    setFilteredRestaurants(restaurants);
  };

  return (
    <div className="home-main">
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        resetSearch={resetSearch}
      />

      <div className="main-cards">
        {filteredRestaurants.map((restaurant, index) => (
          <Link key={index} to={`/inside/${restaurant.name}`}>
            <Inside key={index} restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;