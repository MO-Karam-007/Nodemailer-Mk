const express = require('express');
const morgan = require('morgan');

// Setting up our Routes
const router = require('./router/index')

const app = express()
// Config our middlewares
app.use(morgan('dev'))
app.use(express.json())


// Routing
app.use('/', router)

module.exports = app