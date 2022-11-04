const express = require("express");
const socket = require("socket.io");

// App setup
const port = 7050;
const app = express();

// Http server
const server = app.listen(port, function () {
  console.log(`Listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});

app.use(express.static('client-public'));

// Socket setup
const io = require('socket.io')(server, {
    cors: {
        origin: `http://localhost:${port}`,
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

io.on('connection', function (socket) {
    console.log('Made socket connection');
    socket.emit('message', 'Hej '+socket.id+' - fra serveren');

    socket.on("disconnect", () => {
        console.log('disconnected');
    });
});
