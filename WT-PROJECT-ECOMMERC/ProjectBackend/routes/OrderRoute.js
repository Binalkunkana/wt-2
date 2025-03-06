const express = require('express')
const Order = require('../models/Order')
const { default: mongoose } = require('mongoose')
const router = express.Router()

router.get('/', async (req,res)=>{
    const data = await Order.find()
    res.send(data)
})

router.get('/:id', async (req,res)=>{
    const data = await Order.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req,res)=>{
    const data = await Order.create(req.body)
    res.send(data)
})

module.exports = router