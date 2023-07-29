const mongoose = require('mongoose');
const { UserSchema } = require('../schemas');

const User = mongoose.model('User', UserSchema);

const userDAO = {};

module.exports = userDAO;
