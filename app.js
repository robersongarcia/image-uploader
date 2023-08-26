import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const appRoot = __dirname
import dotenv from 'dotenv'
dotenv.config()
import { Server } from "./src/server/models/server.js"

const server = new Server()


server.listen()