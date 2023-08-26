import express from "express"
import cors from "cors"
import fileUpload from "express-fileupload"

// import path from 'path'
import ViteExpress from "vite-express"

import { appRoot } from "../../../app.js"
import UploadRouter from "../routes/uploader.js"

export class Server {
  constructor() {
    this.app = express()
    // eslint-disable-next-line no-undef
    this.port = process.env.PORT || 3000
    this.paths = {
        uploader: "/api/uploader",
    }
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors()) // Enable CORS
      
      this.app.use(express.json())
      
      this.app.use(fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/',
        limits: {fieldSize: 50 * 1024 * 1024},
      }))
      this.app.use('/files', express.static(appRoot + '/public'))
  }

  // Bind controllers to routes
  routes() {
    this.app.use(this.paths.uploader, UploadRouter)
  }

  listen() {
    ViteExpress.config({            
      // eslint-disable-next-line no-undef
      mode: process.env.NODE_ENV || 'development',
    })
    ViteExpress.listen(this.app, this.port, () => console.log(`Server is listening on port: ${this.port}...`)) 
  }
}
