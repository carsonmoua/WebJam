const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

const io = require('socket.io')(5000)

io.on('connection', socket => {
    socket.emit('chat-message', 'Welcome Stranger')
})

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})

const webjamRouter = require('./route/webjam');
const usersRouter = require('./route/users');

app.use('/webjam', webjamRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log("Server is running on port: ", port);
});
