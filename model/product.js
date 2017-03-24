const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  pic: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'phones'] },
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)
