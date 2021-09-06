'use strict';

// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const getKey = require('./helpers/getKey');
const getMap = require('./modules/map');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(cors());
// TODO: need to add to .env for mongoDB
// mongoose.connect(process.env.MONGODB_URL);


// connect to mongoose database
const database = mongoose.connection;
database.on('database error', console.error.bind(console, 'connection fail'));
database.once('database open', _ => {
  console.log('connected on database');
});

// routes
app.get('/map', getMap);
app.get('/', (request, response) => {
  response.send('hello world');
});
app.get('*', (request, response) => {
  response.status(404).send('not found');
});

// listener
app.listen(PORT, () => console.log(`listening on ${PORT}`));