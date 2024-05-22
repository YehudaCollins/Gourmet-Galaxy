const mongoose = require('mongoose');
    
const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true }, 
  main_image: { type: String, required: true },
  cuisine: { type: String, required: true },
  created_at: { type: Date, required: true },
  images: [String],
  description: { type: String, required: true }
}); 

module.exports = mongoose.model('Restaurant', RestaurantSchema);
