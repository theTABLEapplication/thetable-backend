'use strict';

// imports
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const getKey = require('./helpers/getKey');
const UserRoutes = require('./modules/userPaths');
const testServer = require('./modules/serverTest');
const RestRoutes = require('./modules/restaurant');
// const getMap = require('./modules/map');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI).then( () => {
  console.log('successfully connected')
})
.catch(e => {
  console.log(e);
});



// connect to mongoose database
const database = mongoose.connection;
database.on('database error', console.error.bind(console, 'connection fail'));
database.once('database open', _ => {
  console.log('connected on database');
});

// Routes
// Testing Server Connection
app.get('/', testServer);

//User Routes
app.get('/user', UserRoutes.read);
app.post('/user', UserRoutes.create);
app.put('/user', UserRoutes.update);

// Restaurant Routes
app.get('/restaurants', RestRoutes.read);
app.post('/restaurants', RestRoutes.create);
// app.put('/restaurants', RestRoutes.update);
// app.delete('/restaurants', RestRoutes.delete);
// Map Routes?

// listener
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// app.get('/map', getMap);

// app.get('/test', async function test(request, response) {

//   const token = request.headers.authorization.split(' ')[1];

//   jwt.verify(token, getKey, {}, function (err, user) {
//     if (err) {
//       response.send('invalid token');
//     } else {
//       response.send(user);
//     }
//   });

// });
