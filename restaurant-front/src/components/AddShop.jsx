import React, { useState } from "react";
import '../style/addShop.css';
import { toast } from 'react-toastify';


const Add = ({ addRestaurant }) => {
  const [restaurant, setRestaurant] = useState({
    id: "",
    name: "",
    city: "",
    price: "",
    main_image: "",
    cuisine: "",
    created_at: "",
    images: "",
    description: "",
  });

  // פונקציה לטיפול בשינוי בשדות הטופס
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // פונקציה לטיפול בהגשת הטופס
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRestaurant = {
        ...restaurant,
        images: restaurant.images.split(',').map(image => image.trim()),
        id: Date.now(), // מזהה ייחודי על סמך תאריך וזמן
      };
      addRestaurant(newRestaurant); // הוספת המסעדה החדשה
      setRestaurant({ // איפוס הטופס
        id: "",
        name: "",
        city: "",
        price: "",
        main_image: "",
        cuisine: "",
        created_at: "",
        images: "",
        description: "",
      });
    }
  };

  // פונקציה לתקינות של הטופס
  const validateForm = () => {
    if (!restaurant.name || !restaurant.city || !restaurant.price || !restaurant.main_image || !restaurant.cuisine || !restaurant.created_at || !restaurant.description) {
      toast.info("Please fill in all required fields.");
      return false;
    }
    if (isNaN(restaurant.price)) {
      toast.info("Price must be a number.");
      return false;
    }
    return true;
  };

  return (
    <div className="add-restaurant-container">
      <h1>Add Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={restaurant.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={restaurant.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price (Enter a number from 1 to 3. Where 3 is the most expensive and 1 is the cheapest)</label>
          <input type="text" name="price" value={restaurant.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Main Image URL</label>
          <input type="text" name="main_image" value={restaurant.main_image} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Kitchen style</label>
          <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Created At</label>
          <input type="datetime-local" name="created_at" value={restaurant.created_at} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Images (comma separated URLs - Put a comma between one picture and the next)</label>
          <input type="text" name="images" value={restaurant.images} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={restaurant.description} onChange={handleChange} required />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default Add;
