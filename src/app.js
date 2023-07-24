const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// health check
app.get('/health', (req, res, next) => {
  res.json({
    status: 'OK',
  });
});

module.exports = app;
