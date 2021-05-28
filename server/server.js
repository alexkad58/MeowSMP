const path = require('path')
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)
const { EventEmitter } = require("events");
const fs = require('fs');

app.use(express.static(path.join(__dirname, '../frontend')))

io.on('connection', async () => {
    console.log('new connection')

    const count = JSON.parse(fs.readFileSync(path.join(__dirname, './count.json')))

    count.count++
    
    fs.writeFileSync(path.join(__dirname, './count.json'), JSON.stringify(count));
});

server.listen(3000)

module.exports = {
    server
}