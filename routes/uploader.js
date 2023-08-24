const { Router } = require('express')
const { home, postFile } = require('../controllers/uploader')
const router = Router()

router.get("/", home)

router.post("/", postFile)

module.exports = router