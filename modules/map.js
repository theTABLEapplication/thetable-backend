'use strict';

const getKey = require('../helpers/getKey');
const jwt = require('jsonwebtoken');

async function getMap (request, response) {
  const token = request.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, async function (error, user) {
    if (error) {
      response.send('invalid token');
    } else {
      const lat = request.query.lat;
      const lon = request.query.lon;

    }
  });
};

module.exports = getMap;