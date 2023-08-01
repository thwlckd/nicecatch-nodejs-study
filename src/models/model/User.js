const mongoose = require('mongoose');
const { UserSchema } = require('../schemas');

const User = mongoose.model('User', UserSchema);

const userDAO = {
  async findAll() {
    const users = await User.find({}).lean();
    return users;
  },

  async findOneByEmail(email) {
    const user = await User.findOne({ email }).lean();
    return user;
  },

  async updateOneByEmail(email, toUpdate) {
    const user = await User.findOneAndUpdate({ email }, toUpdate).lean();
    return user;
  },
};

module.exports = userDAO;
