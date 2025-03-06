const express = require('express')
const Cart = require('../models/Cart')
const router = express.Router()

router.post("/", (req, res) => {
    Cart.create(req.body).then(cart => res.json(cart));
});

// Get all cart items
router.get("/", (req, res) => {
    Cart.find().populate("userId items.productId").then(cart => res.json(cart));
});

// Get cart for a specific user
router.get("/:userId", (req, res) => {
    Cart.findOne({ userId: req.params.userId }).populate("items.productId").then(cart => res.json(cart));
});

// Update cart (e.g., change quantity)
router.put("/:userId", (req, res) => {
    Cart.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true }).then(cart => res.json(cart));
});

// Remove an item from the cart
router.delete("/:userId/:productId", (req, res) => {
    Cart.findOneAndUpdate(
        { userId: req.params.userId },
        { $pull: { items: { productId: req.params.productId } } },
        { new: true }
    ).then(cart => res.json(cart));
});

// Clear entire cart for a user
router.delete("/:userId", (req, res) => {
    Cart.findOneAndDelete({ userId: req.params.userId }).then(() => res.json({ message: "Cart cleared" }));
});

module.exports=router