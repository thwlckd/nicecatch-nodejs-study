const { Router } = require('express');
const { userController } = require('../controllers');
const { loginRequired } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', loginRequired, userController.getUsers);
userRouter.get('/info', loginRequired, userController.getUser);
userRouter.patch('/info', loginRequired, userController.patchUser);

module.exports = userRouter;
