// NodeJS with ECMAScript6
'use strict'
// Libraries
const express = require('express')
const bodyParser = require('body-parser')
const app = express() // Express Instance
const productController = require('./controllers/product_controller')
const api = require('./config/routes')
// MiddleWare
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app