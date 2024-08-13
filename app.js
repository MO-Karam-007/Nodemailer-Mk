const express = require('express');
const morgan = require('morgan');
const cors  =require('cors')
// Setting up our Routes
const router = require('./router/index')
const app = express()
// Cors
app.use(cors({
    origin: ['http://localhost:4200','https://shop-easy-5fgnzk1p6-mohamed-karams-projects.vercel.app'],
    ethods: 'GET,POST,PUT,DELETE,OPTIONS',
}))

// Config our middlewares
app.use(morgan('dev'))
app.use(express.json())



// Routing
app.use('/', router)

module.exports = app