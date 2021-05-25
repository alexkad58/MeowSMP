const path = require('path')
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const { EventEmitter } = require("events");

app.use(express.static(path.join(__dirname, '../frontend')))

io.on('connection', ioClient => {
    console.log('new connection')
});

server.listen(3000);

module.exports = {
    server
}