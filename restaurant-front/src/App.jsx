import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style/app.css";
import Home from "./components/Home";
import Top from "./components/Top";
import InsideCard from "./components/InsideShop";
import Manage from "./components/Management";
import AddShop from "./components/AddShop";  
import restaurantsData from "./data/dataBase";
 
//משתמש בספריית ReactToastify להודעות יפות
//ובספריית @fortawesome/react-fontawesome של אייקונים



function App() {
  const [restaurants, setRestaurants] = useState([]);

// אתחול localStorage בפעם הראשונה
  useEffect(() => {
    const storedRestaurants = JSON.parse(localStorage.getItem("restaurants"));
    if (!storedRestaurants || storedRestaurants.length === 0) {
      localStorage.setItem("restaurants", JSON.stringify(restaurantsData));
      setRestaurants(restaurantsData);
    } else {
      setRestaurants(storedRestaurants);
    }
  }, []);

   // עדכון localStorage בכל פעם שמצב restaurants משתנה
  useEffect(() => {
    if (restaurants.length > 0) {
      localStorage.setItem("restaurants", JSON.stringify(restaurants));
    }
  }, [restaurants]);

  // פונקציה להוספת מסעדה חדשה
  const addRestaurant = (newRestaurant) => {
    const updatedRestaurants = [...restaurants, newRestaurant];
    setRestaurants(updatedRestaurants);
    toast.success("Restaurant added successfully!");  
  };

   // פונקציה לעדכון מסעדה קיימת
  const updateRestaurant = (updatedRestaurant) => {
    const updatedRestaurants = restaurants.map(restaurant =>
      restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
    );
    setRestaurants(updatedRestaurants);
    toast.success("Restaurant updated successfully!");  
  };

   // פונקציה למחיקת מסעדה
  const deleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
    setRestaurants(updatedRestaurants);
    toast.warn("Restaurant deleted successfully!");
  };

  return (
    <Router>
      <div className="Main">
        <Top />
        <div>
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} />} />
            <Route path="/inside/:name" element={<InsideCard />} />
            <Route path="/add" element={<AddShop addRestaurant={addRestaurant} />} />
            <Route path="/manage" element={<Manage restaurants={restaurants} updateRestaurant={updateRestaurant} deleteRestaurant={deleteRestaurant} />} />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;


/*יחד עם בקאנד (skl/exprees)
       ||
       ||
      \||/
       \/
*/

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "./style/app.css";
// import Home from "./components/Home";
// import Top from "./components/Top";
// import InsideCard from "./components/InsideShop";
// import Manage from "./components/Management";
// import Add from "./components/AddShop";

// function App() {
//     const [restaurants, setRestaurants] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5001/api/restaurants')
//             .then(response => {
//                 setRestaurants(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the restaurants!', error);
//             });
//     }, []);

//     const addRestaurant = (newRestaurant) => {
//         axios.post('http://localhost:5001/api/restaurants', newRestaurant)
//             .then(response => {
//                 setRestaurants([...restaurants, response.data]);
//             })
//             .catch(error => {
//                 console.error('There was an error adding the restaurant!', error);
//             });
//     };

//     const updateRestaurant = (updatedRestaurant) => {
//         axios.patch(`http://localhost:5001/api/restaurants/${updatedRestaurant.id}`, updatedRestaurant)
//             .then(response => {
//                 setRestaurants(restaurants.map(restaurant =>
//                     restaurant.id === updatedRestaurant.id ? response.data : restaurant
//                 ));
//             })
//             .catch(error => {
//                 console.error('There was an error updating the restaurant!', error);
//             });
//     };

//     const deleteRestaurant = (id) => {
//         axios.delete(`http://localhost:5001/api/restaurants/${id}`)
//             .then(() => {
//                 setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
//             })
//             .catch(error => {
//                 console.error('There was an error deleting the restaurant!', error);
//             });
//     };

//     return (
//         <Router>
//             <div className="Main">
//                 <Top />
//                 <Routes>
//                     <Route path="/" element={<Home restaurants={restaurants} />} />
//                     <Route path="/inside/:name" element={<InsideCard />} />
//                     <Route path="/add" element={<Add addRestaurant={addRestaurant} />} />
//                     <Route path="/manage" element={<Manage restaurants={restaurants} updateRestaurant={updateRestaurant} deleteRestaurant={deleteRestaurant} />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

