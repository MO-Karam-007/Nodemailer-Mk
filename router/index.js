const express = require('express')
const router = express.Router()
const controller = require('../controller/emailController')
const { validateData } = require('../middlewares/validateData')

router.route('/').post(validateData('to', 'subject'), controller.send)

module.exports = router