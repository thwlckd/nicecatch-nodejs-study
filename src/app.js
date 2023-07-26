const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// health check
app.get('/health', (req, res, next) => {
  res.json({
    status: 'OK',
  });
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `${process.env.HOST}:${process.env.CLIENT_PORT}`,
    methods: ['GET', 'POST'],
  },
  // cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('user connected: ', socket.id);

  socket.on('join_room', (data) => {
    socket.join(data);
    console.log(`user id: ${socket.id} / room id: ${data}`);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

module.exports = server;
