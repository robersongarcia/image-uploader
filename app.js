require('dotenv').config()
const path = require('path');
global.appRoot = path.resolve(__dirname);
const Server = require('./models/server')
const server = new Server()
server.listen()