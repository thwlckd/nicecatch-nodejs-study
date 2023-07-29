const { Router } = require('express');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const quizRouter = require('./quizRouter');
const roomRouter = require('./roomRouter');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/rooms', roomRouter);
router.use('/quizzes', quizRouter);

module.exports = { router };
