const { userDAO } = require('../models/model');

const userService = {
  async getUsers() {
    const users = await userDAO.findAll();
    return users;
  },

  async getUserByEmail(email) {
    const user = await userDAO.findOneByEmail(email);
    return user;
  },

  async patchUserByEmail(email, toUpdate) {
    const user = await userDAO.updateOneByEmail(email, toUpdate);
    return user;
  },
};

module.exports = userService;
