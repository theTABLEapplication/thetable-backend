const axios = require('axios');
const { application } = require('express');
const { JwksRateLimitError } = require('jwks-rsa');
const cache = require('../helpers/cache');
const Restaurant = require('../models/restSchema');

const RestRoutes = {
  // create: createRest,
  read: getRests,
  // update: updateRest,
  // delete: deleteRest,
}

async function getRests (request, response) {
  // const token = request.headers.authorization.split(' ')[1];
  // jwt.verify(token, getKey, {}, async function(error, user) {
  //   if(error){
  //     response.send('invalid token');
  //   } else {
      let name = request.query.name;
      let city = request.query.city;
      const yelpKey = process.env.YELP_API_KEY;
    
      let yelpAPI_URL = `https://api.yelp.com/v3/businesses/search?location=${city}&term=${name}&limit=5`;
    
      try{
        let yelpResponse = await axios.get(yelpAPI_URL, {
          headers: {
            Authorization: `Bearer ${yelpKey}`,
          }
        });
        const yelpArray = yelpResponse.data.businesses;
        response.send(yelpArray);
      }catch(error){
        console.log(error);
        response.send(error);
      }
    }
//   })  
// };

module.exports = RestRoutes;
