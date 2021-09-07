'use strict';

// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const getKey = require('./helpers/getKey');
const getMap = require('./modules/map');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cors());
// TODO: need to add to .env for mongoDB
// MONGODB_URL=mongodb://localhost:27017/user
// mongoose.connect(process.env.MONGODB_USER_PATH);
// mongoose.connect(process.env.MONGODB_REST_PATH);


// connect to mongoose database
const database = mongoose.connection;
database.on('database error', console.error.bind(console, 'connection fail'));
database.once('database open', _ => {
  console.log('connected on database');
});

// routes
app.get('/map', getMap);

app.get('/test', async function test(request, response) {

  const token = request.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, function (err, user) {
    if (err) {
      response.send('invalid token');
    } else {
      response.send(user);
    }
  });

});


app.get('/user', (request, response) => {
    const token = request.headers.authorization.split(' ')[1];
    
      jwt.verify(token, getKey, {}, function (err, user) {
        if (err) {
  
        } else {
          // try {
          //   request.query.email(request, response) => {
          //     //   const token = request.headers.authorization.split(' ')[1];
                
          //     //     jwt.verify(token, getKey, {}, function (err, user) {
          //     //       if (err) {
              
          //     //       }
          //     //     });
          //   }
          // } catch (error) {}
        }
    })
});

app.get('/', (request, response) => {
  try {
    response.status(200).send('connected');
  } catch (error) {
    response.status(500).send(error);
  }
})

// listener
app.listen(PORT, () => console.log(`listening on ${PORT}`));