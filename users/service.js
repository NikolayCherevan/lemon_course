const {find} = require('lodash');
const { users } = require('./users-mock');
const findUserById = (id) => find(users,user=> user.id == id);

module.exports = findUserById;