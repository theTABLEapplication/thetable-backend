const mongoose = require('mongoose');

const { Schema } = mongoose;

const restSchema = new Schema({
  name: String,
  hours: String,
  open_now: Boolean,
  address: String,
  location: String,
  categories: String,
  url: String,
});

const Restaurant = mongoose.model('Restaurant', restSchema);

module.exports = Restaurant;