const express = require('express')
const Review = require('../models/Review')
// const router = require('./UserRoutes')
const router = express.Router()

router.post("/add", (req, res) => {
    Review.create(req.body).then(review => res.json(review));
});

// Get all reviews
router.get("/", (req, res) => {
    Review.find().populate("userId productId").then(reviews => res.json(reviews));
});

// Get reviews for a specific product
router.get("/product/:productId", (req, res) => {
    Review.find({ productId: req.params.productId }).populate("userId").then(reviews => res.json(reviews));
});

// Get reviews by a specific user
router.get("/user/:userId", (req, res) => {
    Review.find({ userId: req.params.userId }).populate("productId").then(reviews => res.json(reviews));
});

// Update a review
router.put("/:id", (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(review => res.json(review));
});

// Delete a review
router.delete("/:id", (req, res) => {
    Review.findByIdAndDelete(req.params.id).then(() => res.json({ message: "Review deleted" }));
});

module.exports=router