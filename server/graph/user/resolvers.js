const User = require('../../models/user');
const userDataServices = require('../../dataServices/user');

module.exports = {
  Mutation: {
    getToken: userDataServices.getToken,
    registerUser: userDataServices.registerUser,
  },

  Query: {
    getUser: userDataServices.getUser,
  }
};
