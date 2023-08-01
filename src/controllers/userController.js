const { userService } = require('../services');

const userController = {
  async getUsers(req, res, next) {
    try {
      const users = await userService.getUsers();
      res.json(users);
    } catch (e) {
      next(e);
    }
  },

  async getUser(req, res, next) {
    try {
      const user = await userService.getUserByEmail(req.user.userEmail);
      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  async patchUser(req, res, next) {
    try {
      const { nickName, image } = req.body;
      const user = await userService.patchUserByEmail(req.user.userEmail, {
        nickName,
        image,
      });
      res.json(user);
    } catch (e) {
      next(e);
    }
  },
};

module.exports = userController;
