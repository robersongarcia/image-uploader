const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")

const path = require('path');


class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.paths = {
        uploader: "/api/uploader",
    }
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors()) // Enable CORS
    // add react app build
    // this.app.use(express.static(
      //     path.join(__dirname,“../client/build”)));
      
      this.app.use(express.json())
      
      this.app.use(fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/',
        limits: {fieldSize: 50 * 1024 * 1024},
      }));
      this.app.use('/app',express.static(path.join(appRoot, 'client/dist/app')));
      this.app.use('/files', express.static(appRoot + '/public'))
  }

  // Bind controllers to routes
  routes() {
    this.app.use(this.paths.uploader, require("../routes/uploader"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port)
    })

    this.app.get('*', (req, res) => {
      res.sendFile(path.join(appRoot, 'client/dist/app', 'index.html'));
    });
  }
}

module.exports = Server