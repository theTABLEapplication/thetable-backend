const mongoose = require('mongoose');

const { Schema } = mongoose;

const restSchema = new Schema({
  name: String,
  createdOn: String,
  hours: String,
  open_now: Boolean,
  address: String,
  location: String,
  categories: Array,
  url: String,
  meals: Array,
  visits: Number,
});

const Restaurant = mongoose.model('Restaurant', restSchema);

module.exports = Restaurant;