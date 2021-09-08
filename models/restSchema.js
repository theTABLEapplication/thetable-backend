const mongoose = require('mongoose');

const { Schema } = mongoose;

const restSchema = new Schema({
  name: String,
  createdOn: String,
  location: String,
  categories: Array,
  url: String,
  image_URL: String,
  meals: Array,
  visits: Number,
  email: String,
  latitude: Number,
  longitude: Number,
});

const Restaurant = mongoose.model('Restaurant', restSchema);

module.exports = Restaurant;