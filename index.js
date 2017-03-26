// NodeJS with ECMAScript6
'use strict'
// MongoDB ORM
const mongoose = require('mongoose')
const app = require('./app.js')
const config = require('./config/db')

// MongoDB and Initialize methods
mongoose.connect(config.db, (err, res) => {
  if (err) { return console.log(`Error connection mongodb ${err}`) }
  console.log('MongoDB connection established')
  app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`)
  })
})