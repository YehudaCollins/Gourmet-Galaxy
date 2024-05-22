const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// GET מקבל את המערך הקיים
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET מקבל מסעדה
router.get('/:id', getRestaurant, (req, res) => {
  res.json(res.restaurant);
});

// POST מפרסם מסעדה
router.post('/', async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    city: req.body.city,
    price: req.body.price,
    main_image: req.body.main_image,
    cuisine: req.body.cuisine,
    created_at: req.body.created_at,
    images: req.body.images,
    description: req.body.description
  });

  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH
router.patch('/:id', getRestaurant, async (req, res) => {
  if (req.body.name != null) {
    res.restaurant.name = req.body.name;
  }
  if (req.body.city != null) {
    res.restaurant.city = req.body.city;
  }
  if (req.body.price != null) {
    res.restaurant.price = req.body.price;
  }
  if (req.body.main_image != null) {
    res.restaurant.main_image = req.body.main_image;
  }
  if (req.body.cuisine != null) {
    res.restaurant.cuisine = req.body.cuisine;
  }
  if (req.body.created_at != null) {
    res.restaurant.created_at = req.body.created_at;
  }
  if (req.body.images != null) {
    res.restaurant.images = req.body.images;
  }
  if (req.body.description != null) {
    res.restaurant.description = req.body.description;
  }

  try {
    const updatedRestaurant = await res.restaurant.save();
    res.json(updatedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE מוחק מסעדה
router.delete('/:id', getRestaurant, async (req, res) => {
  try {
    await res.restaurant.remove();
    res.json({ message: 'Deleted Restaurant' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get restaurant by ID
async function getRestaurant(req, res, next) {
  let restaurant;
  try {
    restaurant = await Restaurant.findById(req.params.id);
    if (restaurant == null) {
      return res.status(404).json({ message: 'Cannot find restaurant' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.restaurant = restaurant;
  next();
}

module.exports = router;
