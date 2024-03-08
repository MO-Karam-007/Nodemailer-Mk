const express = require('express')
const router = express.Router()
const controller = require('../controller/emailController')

router.route('/').post(controller.send)

module.exports = router