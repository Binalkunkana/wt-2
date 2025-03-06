const express = require('express')
const Product = require('../models/Product')
const { default: mongoose } = require('mongoose')
const router = express.Router()

router.use('/', async (req,res)=>{
    const data = await Product.find()
    res.send(data)
})

router.get('/:id', async (req,res)=>{
    const data = await Product.findById(req.params.id)
    res.send(data)
})

router.post('/', async (req,res)=>{
    const data = await Product.create(req.body)
    res.send(data)
})

router.put('/:id', async (req,res)=>{
    const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(data)
})

module.exports=router;