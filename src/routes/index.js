const { Router } = require('express');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const quizRouter = require('./quizRouter');
const { loginRequired } = require('../middlewares');
const roomRouter = require('./roomRouter');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', loginRequired, userRouter);
router.use('/quiz', loginRequired, quizRouter);
router.use('/rooms', roomRouter);

module.exports = { router };
