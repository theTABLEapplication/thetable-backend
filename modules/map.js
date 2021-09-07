'use strict';

// imports
const getKey = require('../helpers/getKey');
const jwt = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

// function
async function getMap (request, response) {
  const token = request.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function (error, user) {
    if (error) {
      response.send('invalid token');
    } else {
      const LOCATIONIQ_API_URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API_KEY}&q=${request.query.zipcode}&format=json`;

      const apiResponse = await axios.get(LOCATIONIQ_API_URL);
      const lat = apiResponse.data[0].lat;
      const lon = apiResponse.data[0].lon; 
      const mapImageURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=15`;

      response.status(200).send(mapImageURL);
    }
  });
};

// exports
module.exports = getMap;