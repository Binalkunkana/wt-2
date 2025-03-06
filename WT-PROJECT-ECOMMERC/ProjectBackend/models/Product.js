const mongoose = require('mongoose')

const ProductScheme= mongoose.Schema({
    name: String, 
    description: String, 
    price: Number, 
    category: String, 
    brand: String, 
    images: String, 
    stock: Number, 
    ratings: String
})

module.exports = mongoose.model('product_details',ProductScheme)