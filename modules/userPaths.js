const User = require('../models/userSchema');

const UserRoutes = {
    create: createUser,
    read: getUsers,
    update: updateUser,
}

function createUser(request, response) {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, async function (error, user) {
      if (error) {
        response.send('invalid token');
      } else {
        const { name, createdOn, profilePic, email, address, city, state, lat, lon, favorites } = request.body;
        const UserInfo = { name, createdOn, profilePic, email, address, city, state, lat, lon, favorites };
        const newUser = await User.create(UserInfo);
        response.send(newUser);
      }
    });
  }

  function getUsers(request, response) {
    const token = request.headrs.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, async function (error, user) {
      if(error) {
        response.send('invalid token');
      } else {
        const userName = request.query.username;
        User.find({ userName }, (error, user) => {
          if(error) return console.error(error);
          response.send(user);
        })
      }
    });
  }
  function updateUser(request, response) {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, async function (err, user) {
      if (err) {
        response.send('invalid token');
      } else {
  
        const { name, email, description, status } = request.body;
  
        try {
  
          const updatedUser = await User.findByIdAndUpdate(request.params.id, { name, email, description, status }, { new: true, overwrite: true });
          response.send(updatedUser);
        } catch (error) {
          handleServerError(request, response, error);
        }
      }
    });
  }


  module.exports = UserRoutes;
  