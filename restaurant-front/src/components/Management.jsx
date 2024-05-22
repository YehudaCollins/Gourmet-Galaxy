import React, { useState } from "react";
import "../style/manage.css"; 
import { toast } from 'react-toastify';


//בקוד זה בניתי את ניהול ועיצוב החנויות
//רציתי לעשות כניסת מנהל וססמה. אבל מאמין שזה מיותר

const Manage = ({ restaurants, updateRestaurant, deleteRestaurant }) => {
    // משתנים לניהול מצב החנות
    const [editingRestaurant, setEditingRestaurant] = useState(null); // מזהה של המסעדה שבעריכה
    const [restaurant, setRestaurant] = useState({ // פרטי המסעדה שבעריכה
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

    // פונקציה להתחלת עריכת מסעדה
    const startEditing = (restaurant) => {
        setEditingRestaurant(restaurant.id);
        setRestaurant({
            ...restaurant,
            images: restaurant.images.join(', '), // הופכת את המערך של תמונות למחרוזת
        });
    };

    // פונקציה לטיפול בשינוי ערכים בטופס
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant({
            ...restaurant,
            [name]: value,
        });
    };

    // פונקציה לעדכון מסעדה
    const handleUpdate = (e) => {
        e.preventDefault();
    // אם הטופס תקין....
        if (validateForm()) {
            const updatedRestaurant = {
                ...restaurant,
                images: restaurant.images.split(',').map(image => image.trim()), // מערך לתמונות
            };

            updateRestaurant(updatedRestaurant); // קוראת לפונקציה לעדכון מסעדה
            setEditingRestaurant(null); // מסיימת עריכה
        }
    };

    // פונקציה למחיקת מסעדה
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this restaurant?")) {
            deleteRestaurant(id); // קוראת לפונקציה למחיקת מסעדה
        }
    };

    // פונקציה לבדיקת תקינות טופס
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
        <div className="manage-main">
            <h1>Manage Restaurants</h1>
            {restaurants.map((rest) => (
                <div key={rest.id} className="restaurant-item">
                    {editingRestaurant === rest.id ? (
                        // טופס עריכת מסעדה
                        <form onSubmit={handleUpdate} className="edit-form">
                            <input type="text" name="name" value={restaurant.name} onChange={handleChange} required />
                            <input type="text" name="city" value={restaurant.city} onChange={handleChange} required />
                            <input type="text" name="price" value={restaurant.price} onChange={handleChange} required />
                            <input type="text" name="main_image" value={restaurant.main_image} onChange={handleChange} required />
                            <input type="text" name="cuisine" value={restaurant.cuisine} onChange={handleChange} required />
                            <input type="datetime-local" name="created_at" value={restaurant.created_at} onChange={handleChange} required />
                            <input type="text" name="images" value={restaurant.images} onChange={handleChange} />
                            <textarea name="description" value={restaurant.description} onChange={handleChange} required />
                            <button type="submit">Update</button>
                            <button type="button" onClick={() => setEditingRestaurant(null)}>Cancel</button>
                        </form>
                    ) : (
                        // הצגת פרטי מסעדה
                        <div className="restaurant-details-mange">
                            <h2>{rest.name}</h2>
                            <p><strong>City:</strong> {rest.city}</p>
                            <p><strong>Price:</strong> {rest.price}</p>
                            <p><strong>Cuisine:</strong> {rest.cuisine}</p>
                            <div className="hh">
                            <button onClick={() => startEditing(rest)}>Edit</button>
                            <button onClick={() => handleDelete(rest.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Manage;