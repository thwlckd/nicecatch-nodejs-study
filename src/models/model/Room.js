const mongoose = require('mongoose');
const { RoomSchema } = require('../schemas');

const Room = mongoose.model('Room', RoomSchema);

const roomDAO = {};

module.exports = roomDAO;
