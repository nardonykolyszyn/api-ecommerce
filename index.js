// NodeJS with ECMAScript6
'use strict'
// Libraries
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./model/product') // Import MongoDB model
const app = express() // Express Instance
const port = process.env.PORT || 3000

// MiddleWare
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// MongoDB and Initialize methods
mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
  if (err) { return console.log(`Error connection mongodb ${err}`) }
  app.listen(port, () => {
    console.log('http://localhost:3000')
  })
})

/*
  = = = Routes - HTTP verbs = = =
*/

// Get all products
app.get('/api/product', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({ message: `Error ${ err }` })
    if (!products) return res.status(404).send({ message: 'Products not exist' })
    // Send products if there are
    res.status(200).send({ products })
  })
  res.status(200).send({ products: [] })
})

// Get specify product
app.get('/api/product/:id', (req, res) => {
  let productId = req.params.id
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: 'Error' })
    if (!product) return res.status(404).send({ message: 'Product not found' })
    res.status(200).send({ product })
  })
})

// Create new product
app.post('/api/product', (req, res) => {
  console.log('POST /api/product')
  console.log(req.body)
  let product = new Product()
  product.name = req.body.name
  product.pic = req.body.pic
  product.price = req.body.price
  product.cateogory = req.body.category
  product.description = req.body.description
  product.save((err, product) => {
    if (err) res.status(500).send({ message: `Error to save product ${err}` })
      res.status(200).send({ product: product })
  })
})

// Update specify product
app.put('/api/product/:id', (req, res) => {

})

// Delete spificy product
app.delete('/api/product/:id', (req, res) => {

})})

// Create new product
app.post('/api/product', (req, res) => {
  console.log('POST /api/product')
  console.log(req.body)
  let product = new Product()
  product.name = req.body.name
  product.pic = req.body.pic
  product.price = req.body.price
  product.cateogory = req.body.category
  product.description = req.body.description

  product.save((err, product) => {
    if (err) res.status(500).send({ message: `Error to save product ${err}` })
      res.status(200).send({ product: product })
  })
})

// Update specify product
app.put('/api/product/:id', (req, res) => {

})

// Delete spificy product
app.delete('/api/product/:id', (req, res) => {

})

// Create new product
app.post('/api/product', (req, res) => {
  console.log('POST /api/product')
  console.log(req.body)
  let product = new Product()
  product.name = req.body.name
  product.pic = req.body.pic
  product.price = req.body.price
  product.cateogory = req.body.category
  product.description = req.body.description
  product.save((err, product) => {
    if (err) res.status(500).send({ message: `Error to save product ${err}` })
      res.status(200).send({ product: product })
  })
})

// Update specify product
app.put('/api/product/:id', (req, res) => {

})

// Delete spificy product
app.delete('/api/product/:id', (req, res) => {

})
