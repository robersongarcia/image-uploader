const { Router } = require('express')
const { home } = require('../controllers/uploader')
const router = Router()

router.get("/", home)

module.exports = router