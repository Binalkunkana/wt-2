const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    totalAmount: Number,
    status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" }
})

module.exports = mongoose.model("order_details",OrderSchema)