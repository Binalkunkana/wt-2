const mongoose = require('mongoose')

const ReviewSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, 
    rating: { type: Number, required: true, min: 1, max: 5 }, 
    reviewText: String
})

module.exports = mongoose.model('review_details',ReviewSchema)