'use strict'
const express = require('express')
const productController = require('../controllers/product_controller')
const api = express.Router()

/*
  = = = Routes - HTTP verbs = = =
*/

// Get all products - GET ALL
api.get('/products', productController.getProducts)

// Get specify product - SHOW
api.get('/products/:id', productController.getProduct)

// Create new product - NEW
api.post('/products', productController.createProduct)

// Update specify product - UPDATE
api.put('/products/:id', productController.updateProduct)

// Delete spificy product - DELETE
api.delete('/products/:id', productController.deleteProduct)

module.exports = api