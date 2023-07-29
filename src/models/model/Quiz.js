const mongoose = require('mongoose');
const { QuizSchema } = require('../schemas');

const Quiz = mongoose.model('Quiz', QuizSchema);

const quizDAO = {};

module.exports = quizDAO;
