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
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
    //https://stackoverflow.com/questions/35795480/mongoose-query-to-get-data-from-multiple-collections
    //posts: [{ type: Schema.Types.ObjectId, ref:'Post' }]
    // friends: Array, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;

