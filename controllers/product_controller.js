'use strict'

const Product = require('../models/product_model') // Import MongoDB model


function getProduct(req, res) {
  let productId = req.params.id
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: `Error ${err}` })
    if (!product) return res.status(404).send({ message: `Product not found` })
    res.status(200).send({ product })
  })
}

function getProducts(req, res) {
	Product.find({}, (err, products) => {
	  if (err) return res.status(500).send({ message: `Error ${err}` })
	  if (!products) return res.status(404).send({ message: 'Product not found' })
	  res.status(200).send({ products })
  })
}

function createProduct(req, res){
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
}

function updateProduct(req, res){
	let productId = req.params.id
  let update = req.body
  Product.findByIdAndUpdate(productId, update, (err, productStored) => {
    if (err) res.status(500).send({ message: `Error ${err}` })
    res.status(200).send({ product: productStored })
  })
}

function deleteProduct(req, res){
	let productId = req.params.id
  Product.findById(productId, (err, product) => { 
    if (err) res.status(500).send({ message: `Error ${err}` })
    product.remove(err => {
      if (err) res.status(500).send({ message: `Error ${err}` })
      res.status(200).send({ message: 'Product has been deleted'})  
    })
  })
}

module.exports = {
	getProduct,
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct
}