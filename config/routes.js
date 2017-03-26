'use strict'
const express = require('express')
const productController = require('../controllers/product_controller')
const api = express.Router()

/*
  = = = Routes - HTTP verbs = = =
*/

// Get all products - GET ALL
api.get('/product', productController.getProducts)

// Get specify product - SHOW
api.get('/product/:id', productController.getProduct)

// Create new product - NEW
api.post('/product', productController.createProduct)

// Update specify product - UPDATE
api.put('/product/:id', productController.updateProduct)

// Delete spificy product - DELETE
api.delete('/product/:id', productController.deleteProduct)

module.exports = api