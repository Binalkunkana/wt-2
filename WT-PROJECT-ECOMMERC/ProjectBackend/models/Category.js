const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: String, 
    description: String, 
    type: String, 
    type_id: String, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Reference to User
})

module.exports = mongoose.model("category_details",CategorySchema)