import { Router } from 'express'
import {postFile} from '../controllers/uploader.js'
const router = Router()

// router.get("/", home)

router.post("/", postFile)

export default router