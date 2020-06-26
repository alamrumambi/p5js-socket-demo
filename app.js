const express = require('express');
require('dotenv').config();
const socket = require('socket.io');

const app = express(), port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`server running in port ${ port }`));
const io = socket(server);

app.use(express.static('public'));

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    socket.on('mouseDragFromClient', dataFromClient);

    function dataFromClient(data) {
        socket.broadcast.emit('mouseDragToClient', data);
    }
}
