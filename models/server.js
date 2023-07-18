const express = require("express")
const cors = require("cors")

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
  }

  // Bind controllers to routes
  routes() {
    this.app.use(this.paths.uploader, require("../routes/uploader"))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port)
    })
  }
}

module.exports = Server