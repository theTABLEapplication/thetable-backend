const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    createdOn: String,
    profilePic: String,
    email: String,
    address: String,
    city: String,
    state: String,
    lat: String,
    lon: String,
    favorites: Array,
    // friends: Array, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;