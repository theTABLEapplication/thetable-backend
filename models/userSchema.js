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
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Restaurant'}],
    // friends: Array, 
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//https://stackoverflow.com/questions/35795480/mongoose-query-to-get-data-from-multiple-collections
// const userSchema = new Schema({  
//     nick_name:{type:String},  
//     email: {  
//         type: String,  
//         trim: true,  
//         required: '{PATH} is required!',
//         index: true,
//     },
//     comments: [{ type: Schema.Types.ObjectId, ref:'Comment' }],
//     posts: [{ type: Schema.Types.ObjectId, ref:'Post' }]
// }, {timestamps: true});

// mongoose.model('User', userSchema);